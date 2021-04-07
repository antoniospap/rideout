<?php
require_once "PHP/login.php";
?>
<html>
<head>
    <link rel="stylesheet" href="style/style.css">
</head>

<body>
    <form action="" method="post">
        <h2>Login</h2>
        <input type="text" placeholder="Username" name="username" required>
        <br>
        <input type="password" placeholder="Password" name="password" required>
        <button type="submit" name="submit-login">Login</button>
        <a href="signup.php">Sign Up</a>
    </form>
</body>

</html>