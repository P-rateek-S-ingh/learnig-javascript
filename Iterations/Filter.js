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


// const values = []

// nums.forEach((items)=>{
//     if(items > 4){
//         values.push(items)
//     }
    
// })
// console.log(values);


const games = [{
    name:'God of war',
    launch_Date: 2019,
    price:999,
    type:'Story and action'
},
{
    name:'IGI',
    launch_Date: 2013,
    price:400,
    type:'Sceret missions and actions'
},
{
    name:'Resident Evil',
    launch_Date: 2018,
    price:4500,
    type:'Story and actions '
},
{
    name:'Counter-Strike',
    launch_Date: 2015,
    price: 3690,
    type:'Fps'
},
{
    name:'Subway surfers',
    launch_Date: 2011,
    price: 670,
    type:'Time killer'
},
{
    name:'Bgmi',
    launch_Date: 2019,
    price: 0,
    type:'Fps'
},
{
    name:'Free fire',
    launch_Date: 2020,
    price: 0,
    type:'Fps'
},
{
    name:'Call of duty',
    launch_Date: 2009,
    price: 1299,
    types:'Fps and openworld'
},
{
    name:'Among us',
    launch_Date: 2018,
    price:2000,
    type: 'Fun and brain '
}]

let expensive_games = games.filter((items) => items.type == 'Fps')
// console.log(expensive_games);

expensive_games = games.filter((val) => {
    return val.launch_Date >= 2018 && val.type == 'Fps'
})
console.log(expensive_games);