(function () {
  'use strict';
  var MiniJavaListener = require('grammar/MiniJavaListener.js');
  function RenderListener() {

  }
  RenderListener.prototype = Object.create(MiniJavaListener.MiniJavaListener.prototype);
  RenderListener.prototype.constructor = RenderListener;

  RenderListener.prototype.enterEveryRule = function (context) {

  };
  RenderListener.prototype.exitEveryRule = function (context) {

  };
})();