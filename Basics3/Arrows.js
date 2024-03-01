const User = {
    name:'Raghav',
    age:45,
    WelcomeAlert: function(){
        // console.log(` ${this.name}, welcome to website.....`);
        // console.log(this);
    }
}

User.WelcomeAlert()
User.name = 'kartik'
User.WelcomeAlert()


// console.log(this);

// function learnjs(){
//     let userName = "Ramji"
//     console.log(`${this.userName}`);
// }

// learnjs()

// different ways to declare the functions


// const learn = function(){
//     let username = 'Radha'
//     console.log(this.username);
// }

const learn = () => {
    let companyName = 'microsoft'
    // console.log(this)
}
learn()

// const addTwonum = (num1,num2) => {
//     return num1 + num2            // Explicit return
// }

// const addTwonum = (num1,num2) =>  num1+num2  // implicit return
// const addTwonum = (num1,num2) =>  (num1+num2)
const addTwonum = (num1,num2) => ({username :'Raghav singh'})   //  To return a object it should be wrapped within parenthesses then only it returns value
console.log(addTwonum(10,35));


