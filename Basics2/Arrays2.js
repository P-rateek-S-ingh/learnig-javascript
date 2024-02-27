const marvel_heros = ['Ironman' , 'Spiderman' , 'Black panther']

const DC_heros  = ['Flash' , 'Superman' , 'Batman']

// marvel_heros.push(DC_heros)
// console.log(marvel_heros)

// const All_heros = marvel_heros.concat(DC_heros)
// console.log(All_heros);

// const allHeros = [...marvel_heros , ...DC_heros]  // => concat spread operator
// console.log(allHeros)

const arr = [1, 2, 3, [4, 5, ,6 ], 7, 8, [4, 5 ,[ 6, 8, 9]]]
console.log(arr.flat(Infinity))

console.log(Array.isArray('Prateek'));
console.log(Array.from('Prateek'));
console.log(Array.from({name:'Prateek'})) //   intresting learn about it

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
let score5 = 500

console.log(Array.of(score1,score2,score3,score4,score5));