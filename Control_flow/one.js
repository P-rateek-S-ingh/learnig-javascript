// const userLoggegin = true;
// const temprature = 49.9;



// if (temprature < 50) {
//   console.log(`temprature is less than 50 that is ${temprature}`);
// } else {
//   console.log(`temprature is greater than 50 that is ${temprature}`);
// }

// < , > , <= , >= , == , === , != , !==



// const value = 400
// if(value < 500){
//     // const status = "you are fail"
//     var status = 'you are fail'             //   this is problem of scope the "var" keyword scope is outside the give scope which should not be allowed so we don't use it
//     console.log(`student status -> ${status}`);
// }
// console.log(`student status -> ${status}`);



// const amt = 10000
// if(amt > 5000) console.log(`paisa hi paisa`),
// console.log(`paisa khatam`);                  //implicet scope it should be in single line also can write in second line by applying a ',' comma at last of statement but it is not a good thing to do dont write code like this


// if(amt < 5000){
//     console.log(`amt less than 5000`);
// }else if(amt < 6000){
//     console.log(`amt less than 6000`);
// }else if(amt < 7000){
//     console.log(`amt less than 7000`);
// }else{
//     console.log(`amt is ${amt}`);
// }


const loggedin = true
const debitCard = true
const loggedinFromgoogle = false
const loggedinFromEmail = true
if(loggedin && debitCard){
    console.log(`user can buy books`);
}

if(loggedinFromgoogle || loggedinFromEmail){
    console.log(`user loggin just now`);
}