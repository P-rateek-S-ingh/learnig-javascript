//functions

// function MyName(){
//     console.log("P")
//     console.log("R")
//     console.log("A")
//     console.log("T")
//     console.log("E")
//     console.log("E")
//     console.log("K")
// }

// MyName()

// functions to add two numbers

// function AddTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

function AddTwoNumbers(num1, num2) {
  return num1 + num2;
}

// console.log(`Result:`, AddTwoNumbers(13 , 12));

function UserLoginMessage(UserName) {
  return `${UserName}, just logged in...`;
}
// console.log(UserLoginMessage("Aditya"));

function instaUser(Username = "sam") {
  if (!Username) {
    return `Please enter the name`;
  }
  return `${Username}, just loggeg in...`;
}

// console.log(instaUser("Prateek"));

// calculate the the  cost of shopping cart

// function calculateCart(...num1) {
//   let Total = 0
//   for (let i = 0; i < num1.length; i++) {
//     Total = Total + num1[i];
//   }
//   return Total;
// }

// console.log(calculateCart(100, 200, 400));


// function calculateCart(...num1) {
//     return num1
// }

// console.log(calculateCart(100,200, 300));


function calculateCart(val1 ,val2 ,...num1) {
  return num1
}

// console.log(calculateCart(100,200, 300, 500));

//handleing objects   ---> 1 way

const user ={
  usernAme:'Parv',
  price:349
}

function handleObject(anyobject){
  // console.log(`The user name is '${anyobject.usernAme}' and the price of course is '${anyobject.price} INR'`);

}
// handleObject(user)


  // ----->   2nd Way

function handleObject(anyobject){
  console.log(`The user name is '${anyobject.username}' and the price of course is '${anyobject.coursePrice} INR'`);

}
// handleObject({
//   username:'Ashish',
//   coursePrice:1299
// })


//hadeling Arrays

const newArray = [100 , 200, 800, 200]

function returnThirdvalue(Getvalue){
  return Getvalue[2]
}

// console.log(returnThirdvalue(newArray));
console.log(returnThirdvalue([100 , 200, 600, 200]));