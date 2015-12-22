(function () {
  'use strict';

  var Utils = require('core/Utils.js');

  function Scope(name, parent) {
    this.name = name;
    this.parent = parent;
    this.children = {};
    this.genre = null;
    return this;
  }

  Scope.prototype.resolve = function (name) {
    if (this.children[name]) {
      return this.children[name];
    } else if (this.parent) {
      return this.parent.resolve(name);
    } else {
      return null;
    }
  };

  Scope.prototype.defined = function (name) {
    return !!this.children[name];
  };

  Scope.prototype.define = function (scope) {
    this.children[scope.name] = scope;
  };

  Scope.prototype.getParent = function (genre) {
    var s = this;
    while (s && s.genre !== genre) {
      s = s.parent;
    }
    return s;
  };

  function BlockScope(parent) {
    Scope.call(this, null, parent);
    this.genre = Utils.ScopeGenre.BLOCK_SCOPE;
    return this;
  }
  BlockScope.prototype = Object.create(Scope.prototype);
  BlockScope.prototype.constructor = BlockScope;

  function ClassScope(name, parent) {
    Scope.call(this, name, parent);
    this.genre = Utils.ScopeGenre.CLASS_SCOPE;
    return this;
  }
  ClassScope.prototype = Object.create(Scope.prototype);
  ClassScope.prototype.constructor = ClassScope;

  function ExpressionScope(type, name) {
    Scope.call(this, name, null);
    this.type = type;
    this.genre = Utils.ScopeGenre.EXPRESSION_SCOPE;
    return this;
  }
  ExpressionScope.prototype = Object.create(Scope.prototype);
  ExpressionScope.prototype.constructor = ExpressionScope;

  function MethodScope(type, name, parent) {
    Scope.call(this, name, parent);
    this.type = type;
    this.genre = Utils.ScopeGenre.METHOD_SCOPE;
    this.parameterTypes = [];
    return this;
  }
  MethodScope.prototype = Object.create(Scope.prototype);
  MethodScope.prototype.constructor = MethodScope;
  MethodScope.prototype.addParameterType = function (type) {
    this.parameterTypes.push(type);
  };
  MethodScope.prototype.getParameterType = function (index) {
    return this.parameterTypes[index];
  };
  MethodScope.prototype.getParameterNum = function () {
    return this.parameterTypes.length;
  };

  function VariableScope(type, name, parent) {
    Scope.call(this, name, parent);
    this.type = type;
    this.genre = Utils.ScopeGenre.VARIABLE_SCOPE;
    return this;
  }
  VariableScope.prototype = Object.create(Scope.prototype);
  VariableScope.prototype.constructor = VariableScope;

  exports.Scope = Scope;
  exports.BlockScope = BlockScope;
  exports.ClassScope = ClassScope;
  exports.ExpressionScope = ExpressionScope;
  exports.MethodScope = MethodScope;
  exports.VariableScope = VariableScope;
}());