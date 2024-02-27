//Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// // console.log(myDate.toISOString)
// // console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())


// let mydesignedDate = new Date(2034 , 5 , 24)
// let mydesignedDate = new Date(2034 , 5 , 24 , 18 , 34,5)
// console.log(mydesignedDate.toLocaleString());

let myCreatedDate = new Date(" 2024-07-29 ")
// let myCreatedDate = new Date(" 7-17-2002 ")
// console.log(myCreatedDate.toDateString())


// let myTimestamp = Date.now()
// console.log(myTimestamp)
// console.log(myCreatedDate.getTime())


console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));


let newmyDate = new Date()
console.log(newmyDate.toLocaleString('default',{
    weekday:"short",
    day:"numeric"
}))
console.log(newmyDate.toLocaleString('default',{
    weekday:"long",
    day:"2-digit",
    
}))
console.log(newmyDate.toLocaleString('default',{
   
    
    dateStyle:"full",
    timeStyle:"medium"
}))