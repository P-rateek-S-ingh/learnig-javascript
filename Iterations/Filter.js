const lang = ['java', 'python', 'cpp', 'ruby','javaScript']

const progrmmiglanuages = lang.forEach((item)=>{
// console.log(item);
})

// console.log(progrmmiglanuages);        //--> So the forEach method does not return anything



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const val = nums.filter((items) => items>5) 
// console.log(val);

// const hello = nums.filter((val) => {
    // return val>4
// })
// console.log(hello);


const values = []

nums.forEach((items)=>{
    if(items > 4){
        values.push(items)
    }
    
})
console.log(values);