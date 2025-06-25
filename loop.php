<?php

//  while   loop

//   $x = 1;
//   while($x>=10){
//     echo $x."<br>";
//     $x++;

//   }

// do while

// $x = 1;
// do{
//     echo $x."<br>";
//     $x++;
// }while($x>=10)


// for loop

// for( $x = 1; $x<=10; $x++ ){
//    echo $x;
// }


// while loop

// $a = 10;
// while($a<=20){
//     echo $a."<br>";
//      $a++;

// }


// do while

//  $a = 10;
//   do{
//     echo $a."<br>";
//    $a++;
//   }while($a<=20)


//  for loop

//  for( $a = 10; $a<=20; $a++ ){
//    echo $a;
// }


// for($x=1; $x<=10; $x++){
 
//     echo $x*2 . "<br>";
  
// }


// function table($y){
    
// for($x=1; $x<=10; $x++){
 
//     echo $x*$y . "<br>";
  
// }
// }

// table(2);
// table(3);
// table(4);
// table(8);
// table(30);


// $x = Array(10,20,30,40);
// echo var_dump($x);

// indexing array

// $x = Array(10,20,30,40);
// echo $x[0];
// echo $x[1];

// foreach($x as $y){
//     echo $y;
// }


// $d = Array("NAME"=>"PRIYA","AGE"=>30,"CLASS"=>12);
// echo $d["NAME"];


// $e = Array(
//              Array(10,20,30),
//              Array(40,50,60),
//              Array(70,80,90)
//           );

// echo $e[0][0];          

// $e = Array("FRUITSNAME"=>"APPLE");
//  echo $e["FRUITSNAME"];


// $DD = array(
       
//          array("name"=>"pooja","age"=>49),
         
//          array("name"=>"pooja","age"=>49),
         
//          array("name"=>"pooja","age"=>49),



//           );

// echo $DD[0]["name"];


// foreach($DD as $t=>$d){
//   foreach($d as $key=>$value){
//       echo $value;
//   }

$DD = array(
       
         array("name"=>"sneha","age"=>21,"roll no "=>17 ,"dob"=> "4/03/2004" ),
         
         array("name"=>"mayank","age"=>22,"roll no "=>14,"dob"=> "10/07/2003"),
         
         array("name"=>"tanu","age"=>22,"roll no "=>17 ,"dob"=> "9/06/2003")
  );

// echo $DD[0]["name"] ;

foreach($DD as $key=>$value){
   foreach($value as $key1=>$value1){
         echo $value1;
   }
}

?>