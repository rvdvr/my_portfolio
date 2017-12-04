<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")){
  $to = 'avradantsev@yandex.ru';
  $subject = 'Вопросы с сайта портфолио';
  $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>E-mail: '.$_POST['email'].'</p>    
                        <p>Сообщение: '.$_POST['message'].'</p>
                    </body>
                </html>'; 
  $headers  = "Content-type: text/html; charset=utf-8" . "\r\n";
  $headers .= "From: Radanzev@gmail.com" . "\r\n"; //Наименование и почта отправителя
  mail($to, $subject, $message, $headers); 
}
?>