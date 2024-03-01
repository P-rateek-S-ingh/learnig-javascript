// Immediatley Invoked Function Expression (IIFE)


(function show(){
    // Named IIFE
    console.log(`DataBase connected`);
})();

((num1,num2,name) => {                                 //Whenever you want to put two iife next to each other then always use semi-colon(;)
    //Unnamed IIFE
    console.log(`${name} is ${num1+num2} years old`);
})(5,6, 'Darsh');