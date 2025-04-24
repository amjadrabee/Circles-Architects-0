<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $feedback = $_POST["feedback"];
    $to = "circles.architects@gmail.com";
    $subject = "رأيك";
    $headers = "From: circles.architects@gmail.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n"; // Set UTF-8 encoding

    if (mail($to, $subject, $feedback, $headers)) {
        echo "<script>alert('!شكرًا'); window.location.href='form.html';</script>";
    } else {
        echo "Error sending email.";
    }
}
