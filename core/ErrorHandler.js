(function () {
  'use strict';
  function ErrorInfo(line, column, msg) {
    this.line = line;
    this.column = column;
    this.msg = msg;
  }
  var ErrorHandler = {};
  ErrorHandler.errors = [];
  ErrorHandler.addRedefinition = function (token, type, id) {
    var msg = type + ' ' + id + ' is already defined';
    this.errors.push(new ErrorInfo(token.line, token.column, msg));
  };
  ErrorHandler.getErrors = function () {
    return this.errors;
  };
  exports.ErrorHandler = ErrorHandler;
})();