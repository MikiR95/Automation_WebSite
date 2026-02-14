<?php
header('Content-Type: application/json');

$company = $_POST['company'] ?? '';
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

$to = "r.mikolajczak@coreliautomation.com";
$subject = "Nowa wiadomość ze strony";
$body = "Firma: $company\nImię: $name\nEmail: $email\n\nWiadomość:\n$message";

$headers = "From: r.mikolajczak@coreliautomation.com\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Wiadomość została wysłana pomyślnie!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Wystąpił błąd podczas wysyłania']);
}
?>