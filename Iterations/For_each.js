const lang = ['java', 'python', 'cpp', 'ruby','javaScript']

lang.forEach(function (item){
    // console.log(item);
})

lang.forEach((values) => {
    // console.log(values);
})


function Printme(item){
    // console.log(item);
}
 lang.forEach(Printme)


 lang.forEach((item , index, arrList) => {
    // console.log(item, index, arrList)
 })
 



 const instaUser =[
    {
        name:'Saransh',
        age:34,
        Experience:'4 years'
    },
    {
        name:'Deepesh',
        age:74,
        Experience:'25 years'
    },
    {
        name:'Shikandar',
        age:25,
        Experience:'2 years'
    }
 ]

 instaUser.forEach((item) =>{
    console.log(`${item.name} | ${item.age} | ${item.Experience} | `);
 })