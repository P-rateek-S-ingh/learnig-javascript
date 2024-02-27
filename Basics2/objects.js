// Objects can be initialized by two ways
//i.e. 1- constructor(singleton)  2- literals  

//Object literal

const sym = Symbol("value1")

const instaUser ={
    name:'Rohan',
    "fullName":"Rohan singh",
    [sym]: "value1",
    age:34,
    "location":'Jodhpur',
    email:'Rohan@micro.com',
    isLoggedin: false,
    lastLoggedIn: ['Monday','wednesday','friday']

}
// console.log(instaUser.name)
// console.log(instaUser['location'])
// console.log(instaUser.fullName)
// console.log( instaUser[sym])


instaUser.email = 'Rohan@google.com'
// Object.freeze(instaUser)  // =. it will freese the data no more change can be done
// console.log(instaUser)


instaUser.greeting = function(){
    console.log("hello insta user");
}

instaUser.greetingTwo = function(){
    console.log(`Hello insta user, ${this.name}`)
}

console.log(instaUser.greeting())
console.log(instaUser.greetingTwo())
