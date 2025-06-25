<?php
  $name=$_POST["name"];
  $age=$_POST["age"];
$phone_no=$_POST["phone_no"];
  $email=$_POST["email"];
  $fathers_name=$_POST["fathers_name"];
  $fathers_phone_no=$_POST["fathers_phone_no"];
  $nationality=$_POST["nationality"];

  $conn=mysqli_connect("localhost","root","","crud") or die("connection failed");

  $sql="INSERT INTO register_form(name,age,phone_no,email,fathers_name,fathers_phone_no,nationality) VALUES('{$name}','{$age}','{$phone_no}','{$email}','{$fathers_name}','{$fathers_phone_no}','{$nationality}')";
  
  $result=mysqli_query($conn,$sql) or die("ouery failed");

   header("Location: http://localhost/php/CRUD/index.php");




mysqli_close($conn);


?>