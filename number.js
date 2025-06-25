// let sum=0;
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

// let p= parseInt(prompt("enter value"))
// i=1
// while(i<=10){
//     let product=p*i
//     console.log(product)
//     i=i+1
// }
// let fact=1;
// let num= parseInt(prompt("enter the number"))
// for (let i=num; i>=1; i=i-1)
//     fact=fact*i
// console.log(fact)

// let n =parseInt(prompt("enter the number for series "))
//     f1=0
//     f2=1
//    let i=1
//     while(i<=n)
//         {

//             fn = f1+f2
//     f1=f2
//     f2=fn
//   console.log(fn)
//     i=i+1
//         }

// let str="hello everyone"

// let i=0
// while(i<=str.length)
//      {
// console.log(str.charAt(i))
// i=i+1
// }

// let str="hello everyone"

// let i=str.length
// while(i>=0)
//      {
// console.log(str.charAt(i))
// i=i-1
// }

// str="hello everyone"

// str=str.replace('hello','hi')
// console.log(str);

// str="hi everybody how are you"

// newstr= str.split('')
// console.log(newstr)

// str="hi everybody how are you"

// newstr= str.split('b')
// console.log(newstr)


// str="hi everybody how are you all"

// newstr= str.slice(3,12)
// console.log(newstr)

// concat
// str1="hello"
// str2="world"
// console.log(str1.concat(str2))

//  let str="hi everybody how are you all"

// console.log(str.slice[-1])

// let str="hi everybody how are you all"
// newStr=str.slice(0,-1)
// console.log(newStr)

// let newStr=" "
// str="hi everybody how are you all"
// i=str.length
// while(i>=0){
//     newStr=newStr+str.charAt(i)

//     i=i-1
//     }

//     console.log(newStr)

// let str1="first string"
// let str2="second string"
// let str1length=str1.length
// let str2length=str2.length
//   if(str1length > str2length){
//     NoofCharacter=str1length - str2length
//     console.log(`string is longer by ${NoofCharacter} character`)
//   }
//     else{
//         NoofCharacter=str2length-str1length
//         console.log(`string 2 is longer by ${NoofCharacter} character`) 
//     }


// let str="i am going to be a good student"
// let newstr=str.toLowerCase()
// let i=0
// let vowel=0
// while(i<=newstr.length-1){
// if(newstr[i].includes('a')||newstr[i].includes('e')||
// newstr[i].includes('i')||newstr[i].includes('o')||newstr[i].includes('u'))
// {
//  vowel=vowel+1
// }
// i=i+1
// }
// console.log(`No of vowel in string are${vowel}`)

// let action = "Go to shop and buy candy";
// console.log(action);

// let str="go to shop and buy candy"
// let check=str.includes('candy')
//     if(check){
//     console.log('candy is here')
//     }
//     else{
//         console.log('sorry!candy is not here')
//     }
    
// let str="go to shop and buy candy"
// let condition=str.includes('candy')?'candy is here':'candy is not here'
// console.log(condition)

// str="palindrome"
// let newstr=" "
// let i=str.length-1
// while(i>=0)
// {
// newstr=newstr+str[i]
// i=i-1
// }
// if(newstr===str)
// {
//     console.log("string is palindrome")
// }
// else{
//     console.log("string is not palindrome")
// }

// str="abba"
// let newstr=" "
// let i=str.length-1
// while(i>=0)
// {
// newstr=newstr+str[i]
// i=i-1
// }
// if(newstr===str)
// {
//     console.log("string is abba")
// }
// else{
//     console.log("string is not abba")
// }


//  Str="flower"
//  console.log(Str.indexOf('w'))

// str='personal@email.com'
// console.log(str.slice(0,str.indexOf('@')))



// function//

// function getUSerName(emailId){
// return(emailId.slice(0,emailId.indexOf('@')))
// }
// let UserName= getUSerName('person1@email.com')
// console.log(UserName)

//  function SumOfTwoNumber(a,b){
//     return(a+b)
// }
// let SumOfTwoNumber=SumOfTwoNumber(3,6)
// console.log(SumOfTwoNumber)

// let x=20;
// let piee=3.14;
// let AreaOfCircle=piee*x*x;
// console.log (AreaOfCircle)

// function areaOfCircle (radius){
//     return(3.14*radius*radius)
//   }
//   let result = areaOfCircle(4)
//   console.log(result)

// function properCase(name){
// return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()
// }
// let result=properCase('DELHI')
// console.log(result)

// function ShowMovie(age){
// if(age>18){
//     console.log("access granted")
// }
// else{
//     let check=confirm('Do you have parent permission')
//     if (check)
//         console.log('access granted')
//     else
//     console.log('access denied')
// }
// }
// let result=ShowMovie(16)
// console.log(result)

// str="insert quote within sentence"
// let firstindex=7
// let secondindex=11
//  console.log(str.indexOf('e'))
 
// console.log(str.indexOf('q'))


// function greet() {
//     console.log("Hi Sneha");
// }

// function sayGoodBye() {
//     console.log("Bye Sneha");
// }

// setTimeout(greet, 2000);
// sayGoodBye();

// function greet(callback) {
//     console.log("Hi Sneha");
//     callback();
// }

// function sayBye() {
//     console.log("Bye Sneha");
// }

// setTimeout(() => greet(sayBye), 2000);




// function operation(callback) {
//     console.log("Start of operation");

//     setTimeout(() => {
//         callback();
//     }, 2000);
// }

// function setOperation() {
//     console.log("Set operation done");
// }

// operation(setOperation);



// const printSum=(a,b)=>console.log(a+b)
// console.log(printSum(5,6))




// function language(callback) {
//     console.log("Gujarati");
//     setTimeout(() => {
//         callback();
//     }, 2000);
// }

// function languages() {
//     console.log("Marathi is best!");
// }

// language(languages);







// let num = parseInt(prompt("Enter number"));

// function factorial(num) {
//     if (num === 0) {
//         num=1
//     }
//  else {
//         console.log(num* factorial(num - 1);
//     }
// }




// let num = parseInt(prompt("Enter number"));

// function fibonacci(n) {
//     if (n === 0 || n === 1) {
//         return n;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// console.log(Fibonacci of ${num} is ${fibonacci(num)});



// let arr=[ ]
// let names = ["John", "Sheila", "Margaret", "Tom"];
// let numbers = [1, 2, 3, 4, 5, 6];

// console.log(arr); 
// console.log(names)
// console.log(numbers);





// let myArray = ["John", 42, true];
// console.log(myArray);


// let myArray = ["John", 42, true];
// myArray.unshift("Indian")
// console.log(myArray);               



// let ele = myArray.shift();           
// console.log(my Arr);



// let newArr= myArr.reverse()
//  console.log(newArr)



// let newArr=myArr.indexOf("rohit")
// console.log(newArr)
// console.log(myArr.at(2))
// let arr1 =['sneha','sharma',29,]
// let arr2=['mayank','sharma',23]
// console.log(arr1.concat(arr2))



// let arr =['sneha','sharma',29,]
// for(let i=0;i<=2;i++){
//   console.log(arr[i])
// }
// for (i in arr){
// console.log(arr[i])
// }





// let arr=["john",'johhny']
// console.log(arr.includes('john'))
// if(true){
//   console.log('john is present')
// }
// else{
//     console.log('john is not present')
// }





// const val=(x)=>x>50
// let myArr=[78,45,32,87]
// console.log(myArr.find(val))





// let newArray =['december','february','march','june']
// console.log(newArray.sort())



// let newArray =[8,3,5,3,7]
// console.log(newArray.sort())


// array=['2','3','5','6','8','7']

// name1=["john","david","elie","kater"]
// arrayname1.map((item))=(<ul>
//     <li>{item}</li></ul>)
//     array.map((item))=Sum(item)


// array= [12,3,5,34,8,8,12,6,]
//  let sum=0

// name1=['sneha','mayank','tanu','satvik']
// array.forEach(element => {sum=sum+element
    
// });
// console.log(sum)
// function greater(num)
// {
//     if(num>10)
//     {
//         console.log('greater than 10')
//     }
//     else
//     {
//         console.log('less than 10')
//     }
// }

// array.forEach((element)=>{greater(element)});


// newArr=[34,76,87,45,12,23,67]
// console.log(newArr.filter((item)=>item<45))



// let newArr = ['sneha', 'sweety', 'tanu', 'mayank'];
// console.log(newArr.filter((item) => item.startsWith('s')));



// newArr=[34,78,12,98,45,23,67]
// console.log(newArr.filter((item)=>item>45))
//  let person=[
//     'Helen',
//   'Fisher'
// ]
//  let nAme=""
//  person.map((item)=>console.log(nAme+item))



// numArr=[3,12,56,4]
// numArr.map((item)=>console.log(Math.sqrt(item)))




// const student = {
//    name : "sneha",
//      age: 21,
//     address: 'laxminagar',
//    subject:["javascript",'HTML','CSS','React']

// }
// console.log(student.name)
// console.log(student)
//  console.log(student.address)
//  for(let i=0;i>=3;i++){
//      console.log(student.subject[i])
//  }



// const school={
//     Schoolname:'dps school',
//     address:' gazipur ',
//     noOFTeachers:24,
//     approximateStudent:'2300',
//     subjectStream: ['arts','science','humanities'] 

// }
// console.log(school. noOFTeachers);
// console.log(school. Schoolname);
// for(let i=0;i<=3;i++){
//     console.log(school.subjectStream[i])
// } 
// console.log(${school.Schoolname} has ${school.approximateStudent} students with ${ school.noOFTeachers} teachers)
// console.log(${school.Schoolname} offers ${school.subjectStream} )




// const shop={
//     shopType:'generalstore',
//     items:['pens','snacks','toys',],
//     quantity:[2466,87487,72946],
//     prices: [20,40,60] ,
//     exchange: "only defective peice can be change"
// }
// console.log(${shop.shopType} has ${shop.items} and prices of items are ${shop.prices} rupees)



// const shop={
//     shopType:'generalstore',
//     items:['pens','snacks','toys',],
//     quantity:[2466,87487,72946],
//     prices: [20,40,60] ,
//     exchange: "only defective peice can be change"
// }
// console.log(${shop.shopType} has ${shop.items} and prices of items are ${shop.prices} rupees)
// console.log(${shop.items[1]} are offered at ${shop.prices[1]} rupees)

// let sum= 0;
// for(let i=0;i<3;i++){
//     sum=sum+shop.quantity[i];
// }
//     console.log(total quantity is ${sum})