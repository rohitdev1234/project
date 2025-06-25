<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$id = $_GET["id"];
$conn = mysqli_connect("localhost","root","","crud") or die("connection failed");
$sql = "SELECT * FROM student WHERE id = {$id}";
$result = mysqli_query($conn, $sql) or die("query failed");
if (mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
?>
    <form action="update.php" method="POST">
        <label for="">Name :</label>
        <input type="hidden" name="id" value="<?php echo $row['id'] ?>">
        <input type="text" name="name" value="<?php echo $row['name'] ?>">
        <br><br>
        <label for="">Age</label>
        <input type="text" name="age" value="<?php echo $row['age'] ?>">
        <br><br>
         <br>
         age : <input type="number" name="age" >
       <br>
       <br>
         PHONE NO : <input type="number" name="phone_no" value="<?php echo $row['phone_no'] ?>">
       <br>
       <br>
       EMAIL: <input type="text" name="email" value="<?php echo $row['email'] ?>">
       <br>
       <br>
       fathers name:<input type="text" name="fathers_name" value="<?php echo $row['fathers_name'] ?>">
       <br>
       <br>
       fathers phoneno: <input type="number" name="fathers_phone_no" value="<?php echo $row['fathers_phone_no'] ?>">
       <br>
       <br>
       nationality: <input type="text" name="nationality" value="<?php echo $row['nationality'] ?>">
       <br>
       <br>
        <button type="submit" name="submit">submit</button>
    </form>
<?php
    }
}
?>
</body>
</html>