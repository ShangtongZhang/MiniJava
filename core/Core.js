(function () {
  'use strict';
  var antlr4 = require('antlr4/index');
  var MiniJavaLexer = require('grammar/MiniJavaLexer.js');
  var MiniJavaParser = require('grammar/MiniJavaParser.js');
  var BuildListener = require('core/BuildListener.js');
  var CheckListener = require('core/CheckListener.js');
  var ErrorHandler = require('core/ErrorHandler.js');
  var Scope = require('core/Scope.js');

  function Core(source) {
    this.source = source;
    return this;
  }

  Core.prototype.compile = function () {
    var chars = new antlr4.InputStream(this.source);
    var lexer = new MiniJavaLexer.MiniJavaLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new MiniJavaParser.MiniJavaParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.translationUnit();
    var buildListener = new BuildListener.BuildListener();
    var checkListener = new CheckListener.CheckListener(buildListener.scopes, buildListener.outerScope);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(buildListener, tree);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(checkListener, tree);
    this.parseTree = tree;
    this.parser = parser;
    this.token = tokens;
    this.errors = ErrorHandler.ErrorHandler.getErrors();
    console.log(this.errors);
  };

  Core.prototype.reportErrors = function () {
    this.errors = this.errors.sort(function (e1, e2) {
      var dLine = e1.line - e2.line;
      return dLine || (e1.column - e2.column);
    });
    var msg = '';
    if (this.errors.length === 0) {
      msg = "Successfully Compiled!";
    } else {
      $.each(this.errors, function (i, error) {
        msg += 'Line ' + error.line + ' Column ' + error.column + ':\n';
        msg += error.msg + '\n\n';
      });
    }
    this.errors.splice(0);
    return msg;
  };

  Core.prototype.getTokens = function () {
    var tokensStr = '';
    $.each(this.token.tokens, function (i, token) {
      tokensStr = tokensStr + token.text + '\n';
    });
    return tokensStr;
  };

  Core.prototype.buildRenderTree = function () {
    this.renderTree = this._buildRenderTree(this.parseTree);
  };

  Core.prototype._buildRenderTree = function (treeNode) {
    if (!treeNode) {
      return null;
    }
    var me = this;
    var root = {};
    if (treeNode.ruleIndex !== undefined) {
      root.text = this.parser.ruleNames[treeNode.ruleIndex];
    } else if (treeNode.symbol && treeNode.symbol.tokenIndex) {
      root.text = treeNode.getText();
    } else {
      return null;
    }
    if (treeNode.children) {
      root.nodes = [];
      $.each(treeNode.children, function (i, childNode) {
        var node = me._buildRenderTree(childNode);
        if (node && node.text) {
          root.nodes.push(node);
        }
      });
    }
    return root;
  };

  exports.Core = Core;

})();