<?php

$data = json_decode(file_get_contents('php://input'), true);
$body = "<table border='0' cellpadding='0' cellspacing='0' bgcolor='#cae5ff' style='margin-bottom: 20px;'>
            <tr>
                <th style='padding: 10px; min-width: 300px; font-size: 20px;' align='center' valign='top'>{$data['user_name']}</td>
                <th style='padding: 10px; min-width: 300px; font-size: 20px;' align='center' valign='top'>{$data['phone']}</td>
            </tr>
        </table>";

if ($data['comment'] !== '') {
     $body .= "<table border='0' cellpadding='0' cellspacing='0' style='margin-bottom: 20px;'>
                    <tr>
                        <th style='padding: 10px; min-width: 200px' valign='top'>{$data['comment']}</td>
                    </tr>
                </table>";
};


 $body .= "<table border='0' cellpadding='0' cellspacing='0' bgcolor='#cae5ff'>
            <tr>
                <th style='padding: 10px; min-width: 200px' align='center' valign='top'>Название</td>
                <th style='padding: 10px; min-width: 200px' align='center' valign='top'>Количество</td>
                <th style='padding: 10px; min-width: 200px' align='center' valign='top'>Стоимость</td>
            </tr>
        ";
foreach ($data['list'] as $order) {
    $body .=  "<tr>
                    <td style='padding: 5px;' align='center' valign='top'>{$order['title']}</td>
                    <td style='padding: 5px;' align='center' valign='top'>{$order['quantity']} {$order['weight']}</td>
                    <td style='padding: 5px;' align='center' valign='top'>{$order['price']} грн.</td>
                </tr>";
};
            
$body .= "</table>";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

if (mail( "artem.girda@gmail.com", "Заявка с сайта", $body, $headers))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}

?>