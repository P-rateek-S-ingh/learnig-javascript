// Arrays
//  Two ways to declare an array
//1st way
let arr = ['Ram' , 'Shyam' , 'Gopal' , 'Krishna' , 'Radha']
// console.log(arr[3])

//Second Way

// let arr2 = new Array( 'Ram' , 'Shyam' , 'Gopoal' , 'Krishna' , 'Radha')
// console.log(arr2[1])

//Array methods

// arr.push('Radhika', 'Vamika')
// console.log(arr)
// arr.pop()       // => just removes the last element of the array
//console.log(arr);

// arr.unshift('Rohan')  //==> It used to add elements in the starting of the array but it causes lack of optimization in the computer, because computer have to shift every element to next right position which slow down the computer.
// console.log(arr)
// arr.shift()  // ==> This method is just used for removing the element added by the unshift method
// console.log(arr)

// console.log(arr.includes('Yash'));
// console.log(arr.indexOf('Gopal'));

// const arr3 = arr.join()

// console.log(arr);
// console.log(arr3);
// console.log(typeof arr3);


//  Slice and splice

console.log(arr)

const newarr = arr.slice(1,3)
console.log(newarr);
console.log(arr)

const newarr2  = arr.splice(1,3)
console.log(newarr2)
console.log(arr)