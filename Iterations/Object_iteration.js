const Games ={
    name:'God of War',
    Type:'Story & Action',
    Lead_Character:'Kratos'

}

for (const key in Games) {
//    console.log(`${key} of the game is "${Games[key]}"`);
}

const lang = ['java', 'python', 'javaScript', 'swift', 'ruby']

for(const key in lang){
    // console.log(lang[key]);
}

const map = new Map();
map.set("IN" , "India")
map.set("USA" , "United States of America")
map.set("FR" , "France")
map.set("UAE" , "United Arab Emirates")
map.set("IN" , "India")

for(const key in map){      // Map can't be itterated using for-in iteration
    // console.log(key);
}

