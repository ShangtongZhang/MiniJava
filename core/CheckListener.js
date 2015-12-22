(function () {
  'use strict';
  var MiniJavaListener = require('grammar/MiniJavaListener.js');
  var MiniJavaParser = require('grammar/MiniJavaParser.js');
  var Scope = require('core/Scope.js');
  var Utils = require('core/Utils.js');
  var ErrorHandler = require('core/ErrorHandler.js');

  var INVALID = "__INVALID";
  var UNCERTAIN = "__UNCERTAIN";

  function CheckListener() {
    MiniJavaListener.MiniJavaListener.apply(this, arguments);
    this.outerScope = new Scope.BlockScope(null);
    this.currentScope = this.outerScope;
    this.scopes = {};
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
    var className = ctx.IDENTIFIER(0).getText();
    var classScope = new Scope.ClassScope(className, this.currentScope);
    this.currentScope.define(classScope);
    this.currentScope = classScope;
    this.scopes[ctx] = classScope;
  };

  CheckListener.prototype.exitClassDeclaration = function(ctx) {
    this.currentScope = this.currentScope.parent;
  };

  CheckListener.prototype.enterMainMethod = function(ctx) {
    //this.currentScope = this.scopes[ctx];
    var mainMethodName = 'main';
    var methodScope = new Scope.MethodScope('void', mainMethodName, this.currentScope);
    methodScope.addParameterType('String[]');
    this.currentScope.define(methodScope);
    this.scopes[ctx] = methodScope;
    this.currentScope = methodScope;
  };

  CheckListener.prototype.exitMainMethod = function(ctx) {
    this.currentScope = this.currentScope.parent;
  };

  CheckListener.prototype.enterMethod = function(ctx) {
    //this.currentScope = this.scopes[ctx];
    var methodName = ctx.IDENTIFIER().getText();
    var methodScope = new Scope.MethodScope(ctx.type().getText(), methodName, this.currentScope);
    this.currentScope.define(methodScope);
    this.currentScope = methodScope;
    this.scopes[ctx] = methodScope;
  };

  CheckListener.prototype.exitMethod = function(ctx) {
    this.currentScope = this.currentScope.parent;
  };

  CheckListener.prototype.enterBlock = function(ctx) {
    //this.currentScope = this.scopes[ctx];
    var blockScope = new Scope.BlockScope(this.currentScope);
    this.scopes[ctx] = blockScope;
    this.currentScope = blockScope;
  };

  CheckListener.prototype.exitBlock = function(ctx) {
    this.currentScope = this.currentScope.parent;
  };

  CheckListener.prototype.enterPrimaryExpression = function(ctx) {
    if (ctx.IDENTIFIER() !== null) {
      var identifierName = ctx.IDENTIFIER().getText();
      var scope = this.currentScope.resolve(identifierName);
      if (ctx.getChildCount() > 1) {
        if (scope === null) {
          ErrorHandler.ErrorHandler.addUndefinition(ctx.IDENTIFIER().getSymbol(), "method", identifierName);
        } else if (scope.genre !== "method") {
          ErrorHandler.ErrorHandler.addWrongGenre(ctx.IDENTIFIER().getSymbol(), "method", scope.genre, identifierName);
        }
      } else {
        if (scope === null) {
          ErrorHandler.ErrorHandler.addUndefinition(ctx.IDENTIFIER().getSymbol(), "variable", identifierName);
        } else if (scope.genre !== "variable") {
          ErrorHandler.ErrorHandler.addWrongGenre(ctx.IDENTIFIER().getSymbol(), "variable", scope.genre, identifierName);
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
      var scope = this.currentScope.resolve(ctx.IDENTIFIER().getText());
      if (scope.genre === "class") {
        type = scope.getName();
      }
    } else if (ctx.getChild(0).getText === "-" || ctx.getChild(0).getText() === "!") {
      var expressionScope = this.scopes[ctx.expression(0)];
      if (ctx.getChild(0).getText() === "-") {
        if (expressionScope.type === "int") {
          type = "int";
        } else {
          type = INVALID;
          ErrorHandler.ErrorHandler.addWrongType(ctx.expression(0).getStart(), "int", expressionScope.type, expressionScope.getName());
        }
      } else {
        if (expressionScope.type === "boolean") {
          type = "boolean";
        } else {
          type = INVALID;
          ErrorHandler.ErrorHandler.addWrongType(ctx.expression(0).getStart(), "boolean", expressionScope.type, expressionScope.getName());
        }
      }
    } else if (ctx.getChildCount() === 3 && ctx.expression().size() === 2) {
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
                ErrorHandler.ErrorHandler.addWrongType(ctx.expression(0).getStart(), "int", expressionScope0.type, expressionScope0.getName());
              }
              if (expressionScope1.type !== "int") {
                ErrorHandler.ErrorHandler.addWrongType(ctx.expression(1).getStart(), "int", expressionScope1.type, expressionScope1.getName());
              }
            }
            break;
          case '=':
            if (matchType(expressionScope0.type, expressionScope1.type)) {
              type = expressionScope0.type;
            } else {
              type = INVALID;
              ErrorHandler.ErrorHandler.addWrongType(ctx.expression(1).getStart(), expressionScope1.type, expressionScope1.getName());
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
              ErrorHandler.ErrorHandler.addWrongType(ctx.expression(0).getStart(), "int", expressionScope0.type, expressionScope0.getName());
            } else if (expressionScope1.type !== "int") {
              ErrorHandler.ErrorHandler.addWrongType(ctx.expression(1).getStart(), "int", expressionScope1.type, expressionScope1.getName());
            }
          }
        } else if (sign === "==" || sign === "!=") {
          if (expressionScope0.type === expressionScope1.type) {
            type = "boolean";
          } else {
            type = INVALID;
            ErrorHandler.ErrorHandler.addWrongType(ctx.expression(1).getStart(), expressionScope0.type, expressionScope1.type, expressionScope1.getName());
          }
        } else {
          if (expressionScope0.type === "boolean" && expressionScope1.type === "boolean") {
            type = "boolean";
          } else {
            type = INVALID;
            if (expressionScope0.type !== "boolean") {
              ErrorHandler.ErrorHandler.addWrongType(ctx.expression(0).getStart(), "boolean", expressionScope0.type, expressionScope0.getName());
            } else if (expressionScope1.type !== "boolean") {
              ErrorHandler.ErrorHandler.addWrongType(ctx.expression(1).getStart(), "boolean", expressionScope1.type, expressionScope1.getName());
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
        var scope = this.currentScope.resolve(ctx.IDENTIFIER().getText());
        if (scope !== null && scope.genre === "variable") {
          type = scope.type;
        }
      }
    } else {
      var scope = this.currentScope.resolve(ctx.IDENTIFIER().getText());
      if (scope !== null && scope.genre === "method") {
        var methodScope = scope;
        type = methodScope.type;
        var paramNum = 0;
        if (ctx.expressionList() !== null) {
          paramNum = ctx.expressionList().expression().size;
        }
        if (paramNum !== methodScope.getParameterNum()) {
          ErrorHandler.ErrorHandler.addWrongParameterNum(ctx.IDENTIFIER().getSymbol(), paramNum, methodScope.getParameterNum(), methodScope.getName());
        } else {
          for (var i = 0; i < paramNum; i++) {
            if (!matchType(methodScope.getParameterType(i), this.scopes[ctx.expressionList().expression(i)].type)) {
              ErrorHandler.ErrorHandler.addWrongType(ctx.expressionList().expression(i).getStart(), methodScope.getParameterType(i), this.scopes[ctx.expressionList().expression(i)].type, ctx.expressionList().expression(i).getText());
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
          ErrorHandler.ErrorHandler.addWrongType(ctx.expression.getStart(), ctx.type().getText(), type, ctx.expression().getName());
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
          ErrorHandler.ErrorHandler.addReturnWrongType(ctx.expression().getStart(), def);
        }
      }
    }
  };

  var isIndentifier = function(id) {
    return id !== "this" && id !== "null" && id !== "true" && id !== "false" && id !== "int";
  }

  var matchType = function(def, type) {
    return def === type || isIndentifier(def) && type === "null" || def === "void" && type === "null";
  }

  exports.CheckListener = CheckListener;

})();
