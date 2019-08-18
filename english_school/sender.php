<?
$name = $_POST['name'];
$phone = $_POST['phone'];

//$to = 'kuznecovs45@gmail.com';

$header = 'Content-Type: text/plain; charset=utf-8'."\r\n";
$header.='From: info@leveleleven.ru'."\r\n";
//$header.='BCC: zayavki@sniper-m.ru';

if ($_POST['adres'] == 'dusi_kovalchuk'){
	$adres = "Дуси ковальчук 250";
	$to = 'eduard@sniper-m.ru';
//	$to = 'Dk.novosibirsk@leveleleven.ru';
}elseif ($_POST['adres'] == 'myasnikova'){
	$adres = "Мясниковой 22";
	$to = 'eduard@sniper-m.ru';
//	$to = 'rodniki.novosibirsk@leveleleven.ru';
}elseif ($_POST['adres'] == 'stanislavsky'){
	$adres = "Станиславского, 6";
	$to = 'eduard@sniper-m.ru';
//	$to = 'stanislavskogo.novosibirsk@leveleleven.ru';
}elseif ($_POST['adres'] == 'frunze'){
	$adres = "Фрунзе 71/1";
	$to = 'eduard@sniper-m.ru';
//	$to = 'frunze.novosibirsk@leveleleven.ru';
}

$subject = 'Заявка с лэндинга Level Eleven';
$message .= "Имя клиента: ".strip_tags($name).PHP_EOL;
$message .= "Контактный телефон: ".trim(strip_tags($phone)).PHP_EOL;

if($_POST['adres']){
	$message .= 'Адрес Школы: '.$adres. PHP_EOL;
}else{
	$to = 'eduard@sniper-m.ru';
//	$to = 'info@leveleleven.ru';
}
if($_POST['time'])
	{
		$message .= "Удобное время звонка: " . trim(strip_tags($_POST['time'])) . PHP_EOL;
	}
if($_POST['points'])
	{
		$message .= "Количество набранных баллов: " . trim(strip_tags($_POST['points'])) . PHP_EOL;
	}
if($_POST['direction'])
	{
		$message .= "Выбранный курс: " . trim(strip_tags($_POST['direction'])) . PHP_EOL;
	}

//mail($to, $subject, $message, $header);

?>