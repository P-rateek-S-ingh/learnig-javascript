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

console.log(instaUser("Prateek"));
