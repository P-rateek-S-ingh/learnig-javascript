// for of

// ['','','','']
// [{},{},{},{}]

const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
  // console.log(value);
}

const greeting = "Hello world";
for (const greet of greeting) {
  if (greet == " ") {
    continue;
  }
  // console.log(`Each character of greeting: ${greet}`)
}

//Maps

const map = new Map();
map.set("IN" , "India")
map.set("USA" , "United States of America")
map.set("FR" , "France")
map.set("UAE" , "United Arab Emirates")
map.set("IN" , "India")

// console.log(map)

for(const [key, val] of map){
    // console.log(key , ":-)" , val);
}


const Games ={
    name:'God of War',
    Type:'Story & Action',
    Lead_Character:'Kratos'

}

for(const [key,value] of Games){
    console.log(key,"->", value);
}