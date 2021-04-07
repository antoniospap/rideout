<?php
require_once "connect.php";
session_start();



if (isset($_POST["submit-login"])){
    $username = $_POST["username"];
    $password = $_POST["password"];

    $sql = $conn->query("SELECT count(*) as inputUser FROM users where username='".$username."' and password='".$password."'");
    if (!$sql) die("FATAL ERROR");
    $row = mysqli_fetch_array($sql);
    $count = $row["inputUser"];

    if($count > 0){
        $_SESSION['name'] = $username;
        echo "<div class='loginMsg'>Login success, wait for redirection to the game...</div>";
        header("refresh:5; url=../rideout/game.php");
    }else{
        echo "<div class='loginMsg'>Wrong username or password, please try again!</div>";
    }
    $conn->close();
}
?>