// types of DataTypes
//Basically there are 2 types of datatypes
//primative datatypes:-

// There are 7 types of primative datatypes are:-

// String, number, Boolean, symbol, null,  undefined, bigInt

let stringexample  = "hello world"

const value  = 3000;
const scorevalue = 343.67;

let statement = true;
const outsideTemp = null;
let emailofPerson;

const bigNumber = 3354656565463645435n;
console.log(typeof bigNumber);


const id = Symbol('1234')
const newId  = Symbol( '1234');
console.log(id === newId)

//Non-primative datatypes
//Types of non-primative dataTypes are-
// Object, Funtions, Arrays

//object
/* let myobj{
    name:'Arjuna',
    age: 34,
    City:Delhi,
   }

   Arrays
   const heros = ["IronMan", "CaptainAmerica", "Hulk", "Spideman"];


   Functions
   
   let hello = function(n){
    let c  = n+1;
    console.log(c);
   }
*/


// DataTypes           =>              ReturnTypes
// String              =>                "String"
// Number              =>                "Number"
// Boolean             =>                "Boolean"
// Null                =>               "Object"
// undefined           =>                "Undefined"
// Symbol              =>                "Symbol"
// BigInt              =>                "BigInt"
// Object              =>                "Object"
//Arrays               =>                "Object"
//Functions            =>                "functions"(object-functions)


const heros = ["IronMan", "CaptainAmerica", "Hulk", "Spideman"];
console.log(typeof heros);




//+++++++++++++++++++++++++++++++Memory+++++++++++++++++++++++++++++++++++++++++++++++++++
            //Stack(primative)  ,   Heap(non-primative)

    let myName = "prateek";
    
    let anotherName = myName;
    anotherName = "Yash"
    console.log(myName)
    console.log(anotherName)

   let userOne = {
    name:'Ram',
    age:34,
    Email: "ram@google.com",

   }
    
   let userTwo = userOne;
   console.log(userTwo)
   console.log(userOne)
   userTwo.Email= "prateek@google.com"
   console.log(userTwo)
   console.log(userOne)
