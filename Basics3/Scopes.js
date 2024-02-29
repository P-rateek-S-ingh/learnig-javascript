let a = 200  //---\-->  global scope variables can be
var b = 300  //---/-->  access from any statement and functions

if(true){

    let a = 234
    var b = 345
    // console.log(a);
    // console.log(b)
}

// console.log(a);
// console.log(b); //  ---> here the problem arises that "var" variable can be accessed outside the scope which is not a good practice


function one(){
    const name  = "Prateek"

    function two(){
        const website = "Github"
        // console.log(name);
    }
    // console.log(website);//   In short we can say that, child funtion or class can access data from parent function or class
                            //   but parrent class or function can't

    two()
}

one()


if(true){
    const owner = "Prateek"
    if(owner === "Prateek"){
        const website = "google.com"
        // console.log(`${owner} ${website}`);
    }
    // console.log(website);   //  Similarly scope are defined for conditional statements, loops, and functions
}
// console.log(owner);



//++++++++++Intresting++++++++++++


console.log(addone(5));    // it can be access before initialization
function addone(num){     // normal function
    return num + 1
}


console.log(addtwo(5));            //it cannot be aaccess before initialization of the variable // or in other word we can se if a variable is not declared at a moment of time then how it will be accessable. it is concept called hosting
const addtwo = function(num){   // sometime it also called as expression   it is a variable in js variable are very powerful they can store anything
    return num + 2
}