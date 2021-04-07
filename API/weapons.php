<?php
// Create connection
$conn = new mysqli("localhost","root","mysql","rideout");

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}else {
    $result = $conn->query("SELECT wp_name, level, image_url FROM weapons ORDER BY level ASC");
    $response = array();
    if ($result) {
        $counter = 0;
        while($row = mysqli_fetch_assoc($result)){
            $response[$counter]["wp_name"] = $row["wp_name"];
            $response[$counter]["level"] = $row["level"];
            $response[$counter]["image_url"] = $row["image_url"];
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