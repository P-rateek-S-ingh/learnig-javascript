const name = "Prateek"   //first type to initialize the string

const heyy = new String("Yash")   //Second type to initialize the string
const GameLevel = 104;
console.log(`Hello my name is ${name} and my game level is ${GameLevel}`)
console.log(name.length)
let hello = "Prateek"
// console.log(hello.charAt(4))
// console.log(name == hello)

// console.log(name.indexOf('k'));
// console.log(heyy.toUpperCase())

/*
    There are different types of methods which can help in string operations
    some are:-
    charAt(), indexOf(), toUpperCase(), toLowerCase() and so on, find more of google
*/

let url = "https://prateek.com/prateek%20singh"
console.log(url.replace('%20','-'))
console.log(name.substring(0,4))

console.log(name.slice(-9,3));

const newstring = "   HelloWorld     "
console.log(newstring);
console.log(newstring.trim());


//Converting the stirng to array
const currentString = "prateek-singh"
console.log(currentString.split(''))


console.log(currentString.split('-'))