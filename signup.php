<?php
require_once "PHP/signup.php";
?>

<html>
<head>
    <link rel="stylesheet" href="style/style.css">
</head>

<body>
    <form action="" method="post">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" name="username" required>
        <br>
        <input type="password" placeholder="Password" name="password" required>
        <button type="submit" name="submit-login">Sign Up</button>
        <a href="index.php">Login</a>
    </form>
</body>

</html>