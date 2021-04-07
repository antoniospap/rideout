<?php
require_once "connect.php";
session_start();
$inputUsername = $_POST["username"];
$inputPwd = $_POST["password"];

if (isset($inputUsername) && isset($inputPwd)) {
    $query = "INSERT INTO users VALUES (NULL,'$inputUsername','$inputPwd')";
    $result  = $conn->query($query);
    if (!$result) {
        echo "<div class='loginMsg'>Username already in use, try another one</div>";
    }
    else {
        echo "<div class='loginMsg'>Sign Up success, wait for redirection to the game...</div>";
        header("refresh:5; url=../rideout/game.php");
         $_SESSION["name"] = $inputUsername;
    }
    $conn->close();
}

?>