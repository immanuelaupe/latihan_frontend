// IIFE (Immediately Invoked Function Expression)
// Anonymous Function

// (function (){
//     console.log("Hello IIFE");
//     return "Hello IIFE" ;
// })();

// const output = (function (){
//     return "Hello IIFE" ;
// })();
// console.log(output);

// Callback Function : fungsi yang dikirim sebagai argumen ke fungsi yang lain

function logGreetings(greetings) {
    console.log(greetings);
}

function createGreetings(name, callback) {
    const greetings = "Hello" + name ;
    callback(greetings);
}

createGreetings("John", logGreetings);