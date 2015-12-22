(function () {
  'use strict';
  var MiniJavaListener = require('grammar/MiniJavaListener.js');
  var MiniJavaParser = require('grammar/MiniJavaParser.js');
  var Scope = require('core/Scope.js');
  var Utils = require('core/Utils.js');
  var ErrorHandler = require('core/ErrorHandler.js');

  var INVALID = "__INVALID";
  var UNCERTAIN = "__UNCERTAIN";

  function CheckListener(scopes, outerScope) {
    MiniJavaListener.MiniJavaListener.apply(this, arguments);
    this.outerScope = outerScope;
    this.currentScope = this.outerScope;
    this.scopes = scopes;
    return this;
  }
  CheckListener.prototype = Object.create(MiniJavaListener.MiniJavaListener.prototype);
  CheckListener.prototype.constructor = CheckListener;

  CheckListener.prototype.enterClassDeclaration = function(ctx) {
    if (ctx.IDENTIFIER().length > 1) {
      var identifierName = ctx.IDENTIFIER(1).getText();
      var scope = this.currentScope.resolve(identifierName);
      if (scope === null || identifierName === ctx.IDENTIFIER(0).getText()) {
        ErrorHandler.ErrorHandler.addUndefinition(ctx.IDENTIFIER(1).getSymbol(), "class", identifierName);
      } else if (scope.genre !== "class"){
        ErrorHandler.ErrorHandler.addWrongGenre(ctx.IDENTIFIER(1).getSymbol(), "class", scope.genre, identifierName);
      }
    }
    this.currentScope = this.scopes[ctx];
  };

  CheckListener.prototype.exitClassDeclaration = function(ctx) {
    this.currentScope = this.currentScope.parent;
  };

  CheckListener.prototype.enterMainMethod = function(ctx) {
    this.currentScope = this.scopes[ctx];
  };

  CheckListener.prototype.exitMainMethod = function(ctx) {
    this.currentScope = this.currentScope.parent;
  };

  CheckListener.prototype.enterMethod = function(ctx) {
    this.currentScope = this.scopes[ctx];
  };

  CheckListener.prototype.exitMethod = function(ctx) {
    this.currentScope = this.currentScope.parent;
  };

  CheckListener.prototype.enterBlock = function(ctx) {
    this.currentScope = this.scopes[ctx];
  };

  CheckListener.prototype.exitBlock = function(ctx) {
    this.currentScope = this.currentScope.parent;
  };

  CheckListener.prototype.enterPrimaryExpression = function(ctx) {
    if (ctx.IDENTIFIER() !== null) {
      var identifierName = ctx.IDENTIFIER(0).getText();
      var scope = this.currentScope.resolve(identifierName);
      if (ctx.getChildCount() > 1) {
        if (scope === null) {
          ErrorHandler.ErrorHandler.addUndefinition(ctx.IDENTIFIER(0).getSymbol(), "method", identifierName);
        } else if (scope.genre !== "method") {
          ErrorHandler.ErrorHandler.addWrongGenre(ctx.IDENTIFIER(0).getSymbol(), "method", scope.genre, identifierName);
        }
      } else {
        if (scope === null) {
          ErrorHandler.ErrorHandler.addUndefinition(ctx.IDENTIFIER(0).getSymbol(), "variable", identifierName);
        } else if (scope.genre !== "variable") {
          ErrorHandler.ErrorHandler.addWrongGenre(ctx.IDENTIFIER(0).getSymbol(), "variable", scope.genre, identifierName);
        }
      }
    }
  };

  CheckListener.prototype.exitExpression = function(ctx) {
    var params = ctx.expression();
    for (var i in params) {
      var expressionScope = this.scopes[params[i]];
      if (expressionScope.type === INVALID) {
        this.scopes[ctx] = new Scope.ExpressionScope(INVALID, ctx.getText());
        return;
      }
    }
    for (var i in params) {
      var expressionScope = this.scopes[params[i]];
      if (expressionScope.type === UNCERTAIN) {
        this.scopes[ctx] = new Scope.ExpressionScope(UNCERTAIN, ctx.getText());
        return;
      }
    }

    var type = UNCERTAIN;
    if (ctx.primaryExpression() !== null) {
      type = this.scopes[ctx.primaryExpression()].type;
    } else if (ctx.getChild(0).getText() === "new") {
      var scope = this.currentScope.resolve(ctx.IDENTIFIER(0).getText());
      if (scope.genre === "class") {
        type = scope.name;
      }
    } else if (ctx.getChild(0).getText === "-" || ctx.getChild(0).getText() === "!") {
      var expressionScope = this.scopes[ctx.expression(0)];
      if (ctx.getChild(0).getText() === "-") {
        if (expressionScope.type === "int") {
          type = "int";
        } else {
          type = INVALID;
          ErrorHandler.ErrorHandler.addWrongType(ctx.expression(0).start, "int", expressionScope.type, expressionScope.name);
        }
      } else {
        if (expressionScope.type === "boolean") {
          type = "boolean";
        } else {
          type = INVALID;
          ErrorHandler.ErrorHandler.addWrongType(ctx.expression(0).start, "boolean", expressionScope.type, expressionScope.name);
        }
      }
    } else if (ctx.getChildCount() === 3 && ctx.expression().length === 2) {
      var expressionScope0 = this.scopes[ctx.expression(0)];
      var expressionScope1 = this.scopes[ctx.expression(1)];
      if (ctx.getChild(1).getText().length === 1) {
        switch (ctx.getChild(1).getText().charAt(0)) {
          case '*':
          case '/':
          case '%':
          case '+':
          case '-':
          case '&':
          case '|':
            if (expressionScope0.type === "int" && expressionScope1.type === "int") {
              type = "int";
            }
            else {
              type = INVALID;
              if (expressionScope0.type !== "int") {
                ErrorHandler.ErrorHandler.addWrongType(ctx.expression(0).start, "int", expressionScope0.type, expressionScope0.name);
              }
              if (expressionScope1.type !== "int") {
                ErrorHandler.ErrorHandler.addWrongType(ctx.expression(1).start, "int", expressionScope1.type, expressionScope1.name);
              }
            }
            break;
          case '=':
            if (matchType(expressionScope0.type, expressionScope1.type)) {
              type = expressionScope0.type;
            } else {
              type = INVALID;
              ErrorHandler.ErrorHandler.addWrongType(ctx.expression(1).start, expressionScope1.type, expressionScope1.name);
            }
            break;
        }
      } else {
        var sign = ctx.getChild(1).getText();
        if (sign === "<=" || sign === ">=") {
          if (expressionScope0.type === "int" && expressionScope1.type === "int") {
            type = "boolean";
          } else {
            type = INVALID;
            if (expressionScope0.type !== "int") {
              ErrorHandler.ErrorHandler.addWrongType(ctx.expression(0).start, "int", expressionScope0.type, expressionScope0.name);
            } else if (expressionScope1.type !== "int") {
              ErrorHandler.ErrorHandler.addWrongType(ctx.expression(1).start, "int", expressionScope1.type, expressionScope1.name);
            }
          }
        } else if (sign === "==" || sign === "!=") {
          if (expressionScope0.type === expressionScope1.type) {
            type = "boolean";
          } else {
            type = INVALID;
            ErrorHandler.ErrorHandler.addWrongType(ctx.expression(1).start, expressionScope0.type, expressionScope1.type, expressionScope1.name);
          }
        } else {
          if (expressionScope0.type === "boolean" && expressionScope1.type === "boolean") {
            type = "boolean";
          } else {
            type = INVALID;
            if (expressionScope0.type !== "boolean") {
              ErrorHandler.ErrorHandler.addWrongType(ctx.expression(0).start, "boolean", expressionScope0.type, expressionScope0.name);
            }
            if (expressionScope1.type !== "boolean") {
              ErrorHandler.ErrorHandler.addWrongType(ctx.expression(1).start, "boolean", expressionScope1.type, expressionScope1.name);
            }
          }
        }
      }
    }
    this.scopes[ctx] = new Scope.ExpressionScope(type, ctx.getText());
  };

  CheckListener.prototype.exitPrimaryExpression = function(ctx) {
    var type = UNCERTAIN;
    if (ctx.getChildCount() === 3 && ctx.expression() !== null) {
      type = this.scopes[ctx.expression()].type;
    } else if (ctx.getChildCount() === 1) {
      var typeStr = ctx.getChild(0).getText();
      if (typeStr === "this") {
        type = this.currentScope.parent.name;
      } else if (typeStr === "null") {
        type = "null";
      } else if (typeStr === "true" || typeStr === "false") {
        type = "boolean";
      } else if (ctx.getChild(0).getSymbol().type == MiniJavaParser.MiniJavaParser.INTEGER) {
        type = "int";
      } else {
        var scope = this.currentScope.resolve(ctx.IDENTIFIER(0).getText());
        if (scope !== null && scope.genre === "variable") {
          type = scope.type;
        }
      }
    } else {
      var scope = this.currentScope.resolve(ctx.IDENTIFIER(0).getText());
      if (scope !== null && scope.genre === "method") {
        var methodScope = scope;
        type = methodScope.type;
        var paramNum = 0;
        if (ctx.expressionList() !== null) {
          paramNum = ctx.expressionList().expression().length;
        }
        if (paramNum !== methodScope.getParameterNum()) {
          ErrorHandler.ErrorHandler.addWrongParameterNum(ctx.IDENTIFIER().getSymbol(), paramNum, methodScope.getParameterNum(), methodScope.name);
        } else {
          for (var i = 0; i < paramNum; i++) {
            if (!matchType(methodScope.getParameterType(i), this.scopes[ctx.expressionList().expression(i)].type)) {
              ErrorHandler.ErrorHandler.addWrongType(ctx.expressionList().expression(i).start, methodScope.getParameterType(i), this.scopes[ctx.expressionList().expression(i)].type, ctx.expressionList().expression(i).getText());
            }
          }
        }
      }
    }
    this.scopes[ctx] = new Scope.ExpressionScope(type, ctx.getText());
  };

  CheckListener.prototype.exitLocalVariableDeclarationStatement = function(ctx) {
    if (ctx.expression() !== null) {
      var type = this.scopes[ctx.expression()].type;
      if (type !== INVALID && type !== UNCERTAIN) {
        if (!matchType(ctx.type().getText(), type)) {
          ErrorHandler.ErrorHandler.addWrongType(ctx.expression().start, ctx.type().getText(), type, ctx.expression().name);
        }
      }
    }
  };

  CheckListener.prototype.exitReturnStatement = function(ctx) {
    if (ctx.expression() !== null) {
      var type = this.scopes[ctx.expression()].type;
      if (type !== INVALID && type !== UNCERTAIN) {
        var def = this.currentScope.getParent("method").type;
        if (!matchType(def, type)) {
          ErrorHandler.ErrorHandler.addReturnWrongType(ctx.expression().start, def);
        }
      }
    }
  };

  var isIndentifier = function(id) {
    return id !== "this" && id !== "null" && id !== "true" && id !== "false" && id !== "int";
  };

  var matchType = function(def, type) {
    return def === type || isIndentifier(def) && type === "null" || def === "void" && type === "null";
  };

  exports.CheckListener = CheckListener;

})();
