var sendMessage = (function($) {
  function submitForm(e) {
    e.preventDefault()

    var formData = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "php/form.php",
      data: formData,
      success: function() {
        alert("Ваше сообщение отправлено!");
      },
      error: function (xhr,status,error) {
        console.log(status);
        console.log(error);
      }
    });

    $(this).trigger('reset');
  }

  function init() {
    $('#form').on('submit', submitForm);
  }

  return {
    init: init()
  };
})(jQuery);

$(document).ready(sendMessage.init);
