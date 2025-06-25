<?php
  $name=$_POST["name"];
  $age=$_POST["age"];

  $conn=mysqli_connect("localhost","root","","crud") or die("connection failed");

  $sql="INSERT INTO student(name,age) VALUES('{$name}','{$age}')";
  
  $result=mysqli_query($conn,$sql) or die("ouery failed");




mysqli_close($conn);


?>
