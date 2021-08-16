$(document).ready(function () {
  $.ajax({
    url: '../src/data/products.json',
    dataType: 'json',
    success: function (data) {
      console.log(data.length);
      var template = $('<div class="result">' + data.length + ' result</div>');
      $('.totalResult').append(template);
      $('#PLPTemplate').tmpl(data).appendTo('.plp');
    },
  });
});
