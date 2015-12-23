(function () {
  'use strict';
  var Core = require('core/Core.js');
  window.onload = function () {
    $('#errorInfoContainer').css('visibility', 'hidden');
    $('#tokensContainer').css('visibility', 'hidden');
    var uploadButton = $('#uploadButton');
    uploadButton.change(function () {
      fileReader.readAsText(uploadButton[0].files[0]);
    });
    var fileReader = new FileReader();
    fileReader.onload = function (evt) {
      if (FileReader.DONE == fileReader.readyState) {
        var core = new Core.Core(this.result);
        core.compile();
        core.buildRenderTree();
        console.log(core.renderTree);
        $('#AST').treeview({
          data: [core.renderTree]
        });
        $('#errorInfoContainer').css('visibility', 'visible');
        $('#errorInfo').text(core.reportErrors());
        $('#tokensContainer').css('visibility', 'visible');
        $('#tokensInfo').text(core.getTokens());
      }
    };
  };
})();