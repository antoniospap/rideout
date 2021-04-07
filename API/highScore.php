<?php
// Create connection
$conn = new mysqli("localhost","root","mysql","rideout");
$orderBy;
if (isset($_GET["orderby"])){
    $orderBy = $_GET["orderby"];
} else {
    $orderBy = "highScore";
}
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}else {
    $result = $conn->query("SELECT id, user_id, highScore,date FROM highscores ORDER BY $orderBy DESC");
    $response = array();
    if ($result) {
        $counter = 0;
        while($row = mysqli_fetch_assoc($result)){
            $response[$counter]["id"] = $row["id"];
            $response[$counter]["user_id"] = $row["user_id"];
            $response[$counter]["highScore"] = $row["highScore"];
            $response[$counter]["date"] = $row["date"];
            $counter++;
        }
        echo json_encode($response);


    }else {
        die("FATAL ERROR");
    }

    $rows = $result->num_rows;

    json_encode($rows);
}
?>