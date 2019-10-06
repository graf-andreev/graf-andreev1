<?php
include 'config.php';
$result = [];
if (
    !isset($_POST['system_field_1'])
    || !isset($_POST['system_field_2'])
    || $_POST['system_field_1'] != 'i_am_real_man'
    || $_POST['system_field_2'] != ''
) {
    $result['status'] = 'error';
    $result['message'] = 'Не так быстро ) Вы точно человек? Заполните форму ещё раз, но чуть медленнее';
} else{
    // отправка нескольким адресатам
    $to  = $admin_email;
    $subject = 'На сайте ' . $_SERVER['SERVER_NAME'] . ' была заполнена форма «' . $_POST['subject'] . '»';
    $message = '<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>' . $_POST['subject'] . '</title>
    </head>
    <body>';
    foreach ($_POST['fields'] as $n=>$v) {
        $message .= '<p><b>' . $n . ': </b>' . $v . '</p>';
    }
    $message .= '</body>
</html>';

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "Content-type: text/html; charset=utf-8 \r\n";
    //$headers .= "From: Colibri <info@colibri-customs.ru/>\r\n"; // от кого
    //$headers .= 'Cc: secondnick@example.com' . "\r\n"; // копия сообщения на этот адрес
    //$headers .= "Bcc: sivokozov@sniper-m.ru\r\n"; // скрытая копия сообщения на этот
    $send = mail($to, $subject, $message, $headers);
    if ($send) {
        $result['status'] = 'success';
        $result['message'] = 'Ваша заявка успешно принята. Наш менеджер свяжется с вами в ближайшее время.';
    } else {
        $result['status'] = 'error';
        $result['message'] = 'Произошёл сбой во время отправки заявки. Попробуйте ещё раз через несколько минут';
    }
}
echo json_encode($result);