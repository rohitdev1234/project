<?php
if (isset($_POST['submit'])) {
    $sid = $_POST['id'];
    $name = $_POST['name'];
    $age = $_POST['age'];
    $phone_no=$_POST["phone_no"];
  $email=$_POST["email"];
  $fathers_name=$_POST["fathers_name"];
  $fathers_phone_no=$_POST["fathers_phone_no"];
  $nationality=$_POST["nationality"];

    $conn = mysqli_connect("localhost","root","","crud") or die("connection failed");

    $sql = "UPDATE student SET name = '{$name}', age = '{$age}', phone_no = '{$phone_no}', email = '{$email}', fathers_name ='{$fathers_name}',fathers_phone_no ='{$fathers_phone_no}',nationality ='{$nationality}' WHERE id = '{$sid}'";
    $result = mysqli_query($conn, $sql) or die("query failed");

    header('Location: http://localhost:8080/crud/index.php');
 

    mysqli_close($conn);
}
?>