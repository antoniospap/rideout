<?php require_once "PHP/login.php";
require_once "PHP/signup.php";

if(!isset($_SESSION['name'])){
    header("location:index.php");
}
?>

<html>
    <head>
        <script src="//cdn.jsdelivr.net/npm/phaser@3.52.0/dist/phaser.js"></script>
        <script type="module" src="script/script.js"></script>
        <link rel="stylesheet" href="style/style.css">    
    </head>

    <body>
    <?php 
    if(isset($_SESSION["name"])) {
    echo "<div id='logged-user'>Welcome <span id='playerName'>".$_SESSION["name"]."</span><div id=''><a href='PHP/logout.php' tite='Logout' id='logout'>Logout</a></div></div>";
    }
?>
    </body>
</html>