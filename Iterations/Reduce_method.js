const arr = [123 , 334, 66, 777 , 890, 445, 2000]

// let Shopping_cart = arr.reduce((acc, currentval) => acc + currentval,0 )
// console.log(Shopping_cart)

let Shopping_cart = arr.reduce((acc, currentval) => {
    // console.log(`accumulator : ${acc} and currentval: ${currentval}`);
    return acc + currentval
}, 0 )
// console.log(Shopping_cart)



const physicsWallah = [
    {
        course: 'physics',
        price:8000
    },
    {
        course: 'chemistry',
        price:6000
    },
    {
        course: 'maths',
        price:9000
    },
    {
        course: 'biology',
        price:5000
    },
    {
        course: 'accounts',
        price:2000
    },
]

const total_Bill = physicsWallah.reduce((acc,items) => acc + items.price , 0)
console.log(total_Bill);