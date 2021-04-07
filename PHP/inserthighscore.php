<?
require_once "connect.php";
  

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
  //Receive the RAW post data.
  $content = trim(file_get_contents("php://input"));

  $decoded = json_decode($content, true);
}
$username = $decoded["username"];
$score = $decoded["score"];

$query = "INSERT INTO highscores (id, user_id, highScore, date)
VALUES (NULL, '$username','$score',NOW())";
$result  = $conn->query($query);
if (!$result) die("Database access failed". $result ->error);

?>