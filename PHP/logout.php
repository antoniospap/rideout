<?php 
/* sköter utlogningen, när man trycker på knappen logga ut
    så dirigeras man till denna sida som sätter SESSION till unset
    därmed är man utloggad. Sedan dirigeras man till första sidan*/
session_start();
unset($_SESSION["name"]);
session_destroy();
header("location:../index.php");
?>