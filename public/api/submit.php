<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $inquiry = $_POST['inquiry'];

    $body = "お名前: $name\n";
    $body .= "企業名: $company\n";
    $body .= "メールアドレス: $email\n";
    $body .= "電話番号: $phone\n";
    $body .= "お問い合わせ内容:\n$inquiry\n";

    // $to = "info@grow-infotech.com";
		$to = "taichi.1111@icloud.com";
    $subject = "お問い合わせがありました";
    
    $flg = bSENDMAIL3($to, $email, $subject, $body);

    if ($flg == true) {
        echo json_encode(['status' => 'success', 'message' => 'お問い合わせが送信されました。']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'お問い合わせの送信に失敗しました。']);
    }
}

function bSENDMAIL3($to, $from, $sub, $body) {
    mb_language("uni");
    mb_internal_encoding("utf-8");
    $headers = "From: $from\n";
    $headers .= "Mime-Version: 1.0\n";
    $headers .= "Reply-To: $from\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    return mb_send_mail($to, $sub, $body, $headers);
}
?>
