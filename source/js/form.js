$(document).ready(function(){
  $('#form').on('submit', function(e) { //устанавливаем событие отправки для формы с id=form
    e.preventDefault()
    var formData = $(this).serialize(); //собераем все данные из формы
    $.ajax({
      type: "POST", //Метод отправки
      url: "php/form.php", //путь до php фаила отправителя
      data: formData,
      success: function() {
        //код в этом блоке выполняется при успешной отправке сообщения
        alert("Ваше сообщение отправлено!");
      },
      error: function (xhr,status,error) {
        console.log(status);
        console.log(error);
      }
    });
    $(this).trigger('reset');
  });
});