$(document).ready(function() {
  var $boxes = $('.example');

  $boxes.each(function() {
    var obj = $(this);
    var invisibleBtn = obj.find('.invisible-btn');
    var alertBox = obj.find('.alert-box');
    alertBox.text('Normal');
    invisibleBtn.hover(
      function() {
        alertBox.addClass('hover').text('Mouse Over');
      },
      function() {
        alertBox.removeClass('hover').text('Normal');
      }
    );
  });
});
