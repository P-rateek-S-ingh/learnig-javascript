// const userEmail = "pra@gmail.com"   --> ture
// const userEmail = ""                --> false
const userEmail = []               // -->true

// if(userEmail){
//     console.log(`user has user Email`);
// }else{
//     console.log(`Don't have user email`);
// }


// Falsy values --->   false , 0 , -0 , "" , BigInt 0n , null , undefined , NaN(not a number)    <<<<_____>>>>

// Truthy values --->  ture , "0" , "false" , " " , [] , {} , function(){}


// //checking array is empty or not
// if(userEmail.length == 0){
//     console.log(`Array is empty`);
// }

//checking object is empty

// const userObj = {}

// if(Object.keys(userObj).length == 0){
//     console.log(`onject is empty`);
// }


//Nullish coalescing operator(??) :  null   undefined

// let val;

// // val = 5 ?? 4
// // val = null ?? 10
// // val = undefined ?? 45
// val = undefined ?? 40 ?? 20

// console.log(val);


//Terniary Operator

//  condition ? true : false

const coffeePrice = 200

coffeePrice >= 250 ? console.log(`StarBucks coffee`) : console.log(`Tim Hottins coffee`);;
