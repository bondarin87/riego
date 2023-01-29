<?php

/* https://api.telegram.org/bot1682151969:AAGLpj9YI2QqCauZruYv5ynPGUe82Wpt03E/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$phone = $_POST['user_phone'];
$message = $_POST['user_message'];
$token = "1682151969:AAGLpj9YI2QqCauZruYv5ynPGUe82Wpt03E";
$chat_id = "-505312118";
$arr = array(
  'Телефон: ' => $phone,
  'Сообщение: ' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ../thankyou.html');
} else {
  echo "Error";
}
?>
