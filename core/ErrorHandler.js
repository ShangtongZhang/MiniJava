(function () {
  'use strict';
  function ErrorInfo(line, column, msg) {
    this.line = line;
    this.column = column;
    this.msg = msg;
  }
  var ErrorHandler = {};
  var errors = [];
  ErrorHandler.addRedefinition = function (token, type, id) {
    var msg = type + ' ' + id + ' is already defined';
    errors.push(new ErrorInfo(token.line, token.column, msg));
  };
  ErrorHandler.getErrors = function () {
    return errors;
  };
  exports.ErrorHandler = ErrorHandler;
})();