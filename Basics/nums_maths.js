const score = 3488
// console.log(score);

const variable = new Number(345)
// console.log(variable)

// console.log( variable.toString())

// console.log(variable.toString().length)
// console.log(variable.toFixed(2))

const value = 345.897
// console.log(value.toPrecision(5))

const zeroCount = 100000000
// console.log(zeroCount.toLocaleString('en-IN'))


//+++++++++++++++++++Maths+++++++++++++++++++++++++++

// console.log(Math.abs(-4));
// console.log(Math.pow(2,3))
// console.log(Math.round(4.4))
// console.log(Math.ceil(4.1)) //=> It always take the next value after decimal
// console.log(Math.floor(4.9))  // =>  It always takes the value before decimal
// console.log(Math.min(4 ,5,7,8,9))
// console.log(Math.max(4 , 5, 7, 9, 8))


console.log(Math.random())  //=>  it give random no. between 0 and 1
console.log(Math.random() * 10)  //=> It give random no. between 0 and 9 with decimals
console.log(Math.floor(Math.random()*10)) //=> It give random no. between 0 and 9 without decimals
console.log(Math.floor(Math.random()*10)+1)  //=> It give random no. between 1 and 10 without decimals

// Random no. for given range of numbers is calculated as:-
const min = 1
const max = 200
console.log(Math.floor(Math.random()*(max - min + 1) + min))