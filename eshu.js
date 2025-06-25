// document.getElementById("para").innerHTML = "Hello World! this is my project";
// document.getElementsByClassName("para1")[1].innerHTML = "this is class method";
// document.getElementsByTagName("p").innerHTML = "this is sign";

// const paraElements=document.getElementsByClassName("para1");
// for (let i=0; i<3; i++){
//     paraElements[i].innerHTML = "this is class method";
// }

// const paraElements=document.getElementsByTagName("p");
// for (let i=0; i<3; i++){
//     paraElements.innerHTML = "this is sign";
//  }

// function myfun(){
//    document.getElementById(
//     "para2").innerHTML="this is onclick event";
// }
//    function myfun2(){
//    document.getElementById(
//         "para3").innerHTML="mouse move over the para";
// }
//    function myfun2(){
//     alert("mouse move out");
// }
// document.getElementById("inputfield").addEventListener("keydown",myfun3);
// function myfun3(){
//     document.getElementById("inputfield").style.backgroundColor="yellow";
// }
// document.getElementById("inputfield").addEventListener("keydown",myfun3);
// function myfun3(){
//     document.getElementById("inputfield").style.backgroundColor="pink";
// }

// function showSubject(){
//     let SelectedSubject = document.getElementById("subjectSelect").value;
// document.getElementById("result").innerHTML="Selected Subject:" + SelectedSubject;
// }

// function myfun(){
//     document.getElementById(
//      "para2").innerHTML="this is onclick event";
//  }
//     function myfun2(){
//     document.getElementById(
//          "para3").innerHTML="mouse move over the para";
//  }
// //     function myfun2(){
// //      alert("mouse move out");
// //  }
//  document.getElementById("inputfield").addEventListener("keydown",myfun3);
//  function myfun3(){
//      document.getElementById("inputfield").style.backgroundColor="grren";
//  }
//  document.getElementById("inputfield").addEventListener("keyup",myfun3);
//  function myfun3(){
//      document.getElementById("inputfield").style.backgroundColor="pink";
//  }
 
//  function showSubject(){
//      let SelectedSubject = document.getElementById("subjectSelect").value;
//  document.getElementById("result").innerHTML="Selected Subject:" + SelectedSubject;
//  }


document.getElementById("formID").onsubmit=function(){fun()};
 function fun(){
  alert("form submitted");
}

// // form validation
 function validateForm(){
  const name = document.getElementById("name").value;
  const pass = document.getElementById("password").value;

  const nameErr = document.getElelementbyId("name-error");
  const passErr = document.getElementById("password-error");

  nameErr.textContent ="";
   passErr.textContent ="";

  let isValid = true;
if (name ===""|| /\d/.test(name)){
    nameErr.testContent = "please enter your name"
    isValid = false;
}
if(pass==="" || pass.length<6){
    passErr.textContent = "please enter a password with at least 6 characters.";
    isValid = false;
}
if(isValid){
    alert("form submitted successfully!");
    return true;
} else{
    return false;
}
 }

function resetErrors(){
    document.getElementById("name-error").textContent ="";
    document.getElementById("password-error").textContent="";
}