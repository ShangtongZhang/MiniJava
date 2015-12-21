(function () {
  antlr4 = require('antlr4/index');
  MiniJavaLexer = require('grammar/MiniJavaLexer.js');
  MiniJavaParser = require('grammar/MiniJavaParser.js');
  MiniJavaListener = require('grammar/MiniJavaListener.js');
  MiniJavaVisitor = require('grammar/MiniJavaVisitor.js');
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
  };

})();