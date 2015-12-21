(function () {
  'use strict';
  var antlr4 = require('antlr4/index');
  var MiniJavaLexer = require('grammar/MiniJavaLexer.js');
  var MiniJavaParser = require('grammar/MiniJavaParser.js');
  var BuildListener = require('core/BuildListener.js');
  var CheckListener = require('core/CheckListener.js');
  var ErrorHandler = require('core/ErrorHandler.js');
  var Scope = require('core/Scope.js');
  window.onload = function () {
    var upfile = document.querySelector('#upfile');
    $('#upfile').change(function () {
      fileReader.readAsText(upfile.files[0]);
    });
    var fileReader = new FileReader();
    fileReader.onload = function (evt) {
      if (FileReader.DONE == fileReader.readyState) {
        compile(this.result);
      }
    };
  };

  var compile = function (input) {
    var chars = new antlr4.InputStream(input);
    var lexer = new MiniJavaLexer.MiniJavaLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new MiniJavaParser.MiniJavaParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.translationUnit();
    var buildListener = new BuildListener.BuildListener();
    var checkListener = new CheckListener.CheckListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(buildListener, tree);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(checkListener, tree);
    console.log(ErrorHandler.ErrorHandler.getErrors());
  };
})();