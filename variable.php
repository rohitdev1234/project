<?php

   $fname = "priya";
   $lname = "goswami";
   $clss = "12th";
   $rollno = 2;
   $hin = 50;
   $eng = 50;
   $math = 60;
   $sci = 70;
   $sst = 80;
   $total = $hin+$eng+$math+$sci+$sst;
   $per = $total/5;
   $grade=80;


   echo "First Name :".$fname."<br>"."Last Name :".$lname."<br>"."Class Name :".$clss."<br>"."roll no:".$rollno."<br>"."hindi marks:".$hin."<br>"."english marks:".$eng."<br>"."maths marks:".$math."<br>"."science marks:".$sci."<br>"."sst marks:".$sst."<br>"."Total sum :".$total."<br>"."Percentage :".$per."<br>"."Grade:".$grade."<br>";
   
   if($per >= 33){
      echo "Result : Pass <br>";
   }else{
     echo "Result : Fail <br>";
   }

if($grade>=90){
    echo  "grade: A+";
}else if($grade>=80){
    echo  "grade: B+";
}else if($grade>=70){
    echo  "grade: C";
}else if($grade>=60){
    echo "grade: D";
}else if($grade>=50){
    echo "grade:  E";
}else if($grade>=40){
    echo "grade: F";
}
    


?>