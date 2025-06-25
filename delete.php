<?php


$stud_id = $_GET["id"];
$conn = mysqli_connect("localhost", "root", "", "crud") or die("Connection failed");

$sql = "DELETE FROM register_form WHERE id = {$stud_id}";
$result = mysqli_query($conn, $sql) or die("Query failed");

mysqli_close($conn);


?>

