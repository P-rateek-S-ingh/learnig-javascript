//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log(`5 is the best number`);
        continue;
    }

    // console.log(element);
    
}


for(let i = 1 ; i <= 10 ; i++){
    // console.log(`Table of ${i}`);
    for(let j = 1 ; j <= 10 ; j++){
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let arr = [11,12,13,14,15,16,17]

// console.log('length of array :' , arr.length);
for (let i = 0; i < arr.length; i++) {
    
    // console.log(arr[i]);
    
}


// keywords
//break and continue
for (let i = 0; i < 5; i++) {
    if(i == 4){
        console.log(`${4} detected`);break
    }
    if(i==3){console.log(`3 fav no.`);continue}
    console.log(i);
    
}
