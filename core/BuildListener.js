(function () {
  'use strict';
  var MiniJavaListener = require('grammar/MiniJavaListener.js');
  var Scope = require('core/Scope.js');
  var Utils = require('core/Utils.js');
  var ErrorHandler = require('core/ErrorHandler.js');

  function BuildListener() {
    MiniJavaListener.MiniJavaListener.apply(this, arguments);
    this.outerScope = new Scope.BlockScope(null);
    this.currentScope = this.outerScope;
    this.scopes = {};
    return this;
  }
  BuildListener.prototype = Object.create(MiniJavaListener.MiniJavaListener.prototype);
  BuildListener.prototype.constructor = BuildListener;

  BuildListener.prototype.enterClassDeclaration = function (context) {
    var className = context.IDENTIFIER(0).getText();
    var classScope = new Scope.ClassScope(className, this.currentScope);
    if (this.currentScope.defined(className)) {
      ErrorHandler.ErrorHandler.addRedefinition(context.IDENTIFIER().getSymbol(), 'class', className);
    }
    this.currentScope.define(classScope);
    this.currentScope = classScope;
    this.scopes[context] = classScope;
  };

  BuildListener.prototype.exitClassDeclaration = function (context) {
    this.currentScope = this.currentScope.parent;
  };

  BuildListener.prototype.enterMainMethod = function (context) {
    var mainMethodName = 'main';
    var methodScope = new Scope.MethodScope('void', mainMethodName, this.currentScope);
    methodScope.addParameterType('String[]');
    if (this.currentScope.defined(mainMethodName)) {
      ErrorHandler.ErrorHandler.addRedefinition(context.IDENTIFIER().getSymbol(), 'main method', mainMethodName);
    }
    this.currentScope.define(methodScope);
    this.scopes[context] = methodScope;
    this.currentScope = methodScope;
  };

  BuildListener.prototype.exitMainMethod = function (context) {
    this.currentScope = this.currentScope.parent;
  };

  BuildListener.prototype.enterMethod = function (context) {
    var methodName = context.IDENTIFIER().getText();
    var methodScope = new Scope.MethodScope(context.type().getText(), methodName, this.currentScope);
    if (context.parameters()) {
      var parameters = context.parameters().parameter();
      $.each(parameters, function (i, parameter) {
        methodScope.addParameterType(parameter.type().getText());
      });
    }
    if (this.currentScope.defined(methodScope)) {
      ErrorHandler.ErrorHandler.addRedefinition(context.IDENTIFIER().getSymbol(), 'method', methodName);
    }
    this.currentScope.define(methodScope);
    this.currentScope = methodScope;
    this.scopes[context] = methodScope;
  };

  BuildListener.prototype.exitMethod = function (context) {
    this.currentScope = this.currentScope.parent;
  };

  BuildListener.prototype.enterBlock = function (context) {
    var blockScope = new Scope.BlockScope(this.currentScope);
    this.scopes[context] = blockScope;
    this.currentScope = blockScope;
  };

  BuildListener.prototype.exitBlock = function (context) {
    this.currentScope = this.currentScope.parent;
  };

  BuildListener.prototype.enterField = function (context) {
    var fieldName = context.IDENTIFIER().getText();
    var variableScope = new Scope.VariableScope(context.type().getText(), fieldName, this.currentScope);
    if (this.currentScope.defined(fieldName)) {
      ErrorHandler.ErrorHandler.addRedefinition(context.IDENTIFIER().getSymbol(), 'field', fieldName);
    } else {
      this.currentScope.define(variableScope);
      this.scopes[context] = variableScope;
    }
  };

  BuildListener.prototype.enterParameter = function (context) {
    var parameterName = context.IDENTIFIER().getText();
    var variableScope = new Scope.VariableScope(context.type().getText(), parameterName, this.currentScope);
    if (this.currentScope.defined(parameterName)) {
      ErrorHandler.ErrorHandler.addRedefinition(context.IDENTIFIER().getSymbol(), 'parameter', parameterName);
    } else {
      this.currentScope.define(variableScope);
      this.scopes[context] = variableScope;
    }
  };

  BuildListener.prototype.enterLocalVariableDeclarationStatement = function (context) {
    var variableName = context.IDENTIFIER().getText();
    var variableScope = new Scope.VariableScope(context.type().getText(), variableName, this.currentScope);
    if (this.currentScope.defined(variableName)) {
      ErrorHandler.ErrorHandler.addRedefinition(context.IDENTIFIER().getSymbol(), 'variable', variableName);
    } else {
      this.currentScope.define(variableScope);
      this.scopes[context] = variableScope;
    }
  };

  exports.BuildListener = BuildListener;

})();