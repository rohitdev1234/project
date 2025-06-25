<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $conn= mysqli_connect("localhost","root","","crud")or die ("connection failed");

    $sql="SELECT * FROM register_form";
    $result= mysqli_query($conn,$sql)or die("ouery failed");

    if(mysqli_num_rows($result) > 0){
        ?>
    <table>
        <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>PHONENO</th>
            <th>EMAIL</th>
            <th>FATHERS NAME</th>
            <th>FATHERS PHONENO</th>
            <th>NATIONALITY</th>
            <th>Action</th>
        </tr>
        <?php
    while($row= mysqli_fetch_assoc($result)){
        ?>
        <tr>
            <td>
                <?php echo $row["name"] ?>
            </td>
            <td>
                <?php echo $row["age"] ?>
            </td>
            <td>
                <?php echo $row["phone_no"] ?>
            </td>
            <td>
                <?php echo $row["email"] ?>
            </td>
            <td>
                <?php echo $row["fathers_name"] ?>
            </td>
             <td>
                <?php echo $row["fathers_phone_no"] ?>
            </td>
            <td>
                <?php echo $row["nationality"] ?>
            </td>
            <td><a href="delete.php?id=<?php echo $row ["id"]?>">delete </a></td>
            <td><a href="edit.php?id=<?php echo $row ["id"]?>">edit</a></td>
        </tr>
        <?php } ?>
    </table>
    <?php  } ?>
</body>

</html>