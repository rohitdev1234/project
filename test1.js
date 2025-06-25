
 //function//
//  function sum(a,b){
//  return a+b;
//  }

//  function substraction(a,b){
//  return a-b;
//  }

//  function multiplication(a,b){
//  return a*b;
//  }

//  function division(a,b){
//     return a/b;
//  }

// let number = parseInt(prompt('select any number',));
// alert(`you selected ${number} go ahead`);

// let number1 = parseInt(prompt('select any number',));
//  alert(`you selected ${number1} go ahead`);
//  let result;
//  let operators = prompt('you selected(either +-->1,--->2,*-->3,/-->4):',1);
//   alert(typeof(operators));

// switch(operators){
//    case '1':
//     result= sum(number,number1)
//  alert(result)
//      break;
//    case '2':
//     result = substraction(number,number1)
//         break;
//   case '3':
//       result = multiplication(number,number1)
//      break;
//   case '4':
//      result = division(number,number1)
//      break;    
//  default:
//      alert('incorrect entry');
//      break;
//      }
// alert(result)



// let a=parseInt(prompt("what kind of (coffee) he wants cappcinno--250 press 1,mocha -->350 press2 ,americano-->450 press 3",));
// alert(`you selected ${a} size of coffee`);

// switch(a){
//     case 1:
//         result=250-((250*10)/100)
//         alert(`your total= ${result}`);
//         break;
//      case 2:
//          result=350-((350*10)/100) ;
//          alert(`your total= ${result}`);
//          break; 
//     case 3 :
//         result=450-((450*10)/100) ;
//         alert(`your total= ${result}`)
//         break;
//   default:
//     alert('incorrect entry');
//     break;
// }
// console.log(result)
// 16/30


// let n = 30;
// let prime = true

// for (let i=2; i<n;i++){
//     if(n%i===0){
//         prime= false;
//         break;
//     }
// }

// if(prime && n>1){
//     console.log(`${n} is prime`);
// }else {
//     console.log(`${n} is not prime`);
// }

// // let x=18;
// // let piee=3.14;
// // console.log(piee*x*x);
// // alert(piee*x*x);

// let x=20;
// let piee=3.14;
// let AreaOfCircle=piee*x*x;
// console.log (AreaOfCircle)

// let l=10;
// let w=5;
// let AreaOfRectangle=l*w;
// console.log (AreaOfRectangle)

// let b=40;
// let h=21;
// let AreaOfTriangle=1.5*b*h;
// console.log (AreaOfTriangle);

let sum=0;
// let i=0;
// while (i<=10){
//      sum=sum+i
  
//     i++;
// }
// console.log(sum);

// var myName = "michel";
// let i=0
// while (i<=myName.length){
    

// if(myName.charAt(i)==='i')
//     {

//         console.log("m is present")
//         break;
//     }

//     i=i+1
// }

// let i=1;

// while(i<=10){
//     let product=5*i
//     console.log(product)
//     i=i+1
// }

let p= parseInt(prompt("enter value"))
i=1
while(i<=10){
    let product=p*i
    console.log(product)
    i=i+1
}
let fact=1;
let num= parseInt(prompt("enter the number"))
for (let i=num; i>=1; i=i-1)
    fact=fact*i
console.log(fact)