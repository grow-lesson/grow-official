<?php
ob_start();
// エラーレポーティングを有効にする
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // フォームデータの受け取り
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = $_POST['phone'];
    $inquiry = $_POST['inquiry'];

    // ログファイルのパスを指定
    $logFile = __DIR__ . '/contact_log.txt';
    $logData = sprintf(
        "%s, %s, %s, %s, %s, %s\n",
        date('Y-m-d H:i:s'),
        $name,
        $company,
        $email,
        $phone,
        $inquiry
    );

    // ログファイルにデータを追記
    file_put_contents($logFile, $logData, FILE_APPEND);

    // メール送信処理
    $recipient = "shou.k.0322@gmail.com"; // 受信者のメールアドレス
    $bccAddresses = ["twumooo0626@gmail.com", "shou.k.0322@icloud.com"]; // BCCアドレスの配列

    $subject = "お問い合わせ: {$name} 様から";
    $email_content = "名前: $name\n";
    $email_content .= "企業名: $company\nメールアドレス: $email\n";
    $email_content .= "電話番号: $phone\nお問い合わせ内容: $inquiry\n";

    // メールヘッダーを構築
    $email_headers = "From: $name <$email>\r\n";
    $email_headers .= "Bcc: " . implode(", ", $bccAddresses) . "\r\n";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        echo "お問い合わせありがとうございます。";
    } else {
        echo "お問い合わせメールの送信に失敗しました。";
    }
} else {
    echo "お問い合わせフォームからのリクエストではありません。";
}
ob_end_flush(); 
?>
