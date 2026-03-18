// In Node.js, functions are the most used thing. Almost everything is a function

// In JavaScript, functions are first-class citizens. That means a function can be:
// Stored in a variable   // passed to another function   // returned from a function

// So we must understand 4 importent function concepts.

// Function as a value

// function greet() {
//   console.log("Hello");
// }

// const sayHello = greet;

// sayHello();

function greet() {
  console.log("Hello");
}
// JavaScript creates a function named greet
greet(); // runs and executed

// But we can store this function in a variable.
const sayHello = greet; // just store this function in a variable. Since we did not write greet(), So Js does not execute or run the function
sayHello();
// Both variables(greet and sayHello) point the same function

// So functions behave like variables. this is functions are values

// if
const hello = greet(); // run the function.
// "hello" is not a function now. it just a variable
// console.log(hello);

// greet  = reference to function
// greet  = execute function

//
// Callback Functions
// A function passed into another function
function processUser() {
  console.log("Processing user...");
  
}
function done() {
  console.log("Finished");
}
// created two function. now runs
// processUser()
// done()
// we can run these function seperately. 
// if we want to run these function at the same time or 
// we want to connect them using link


// we can make it using callback parameter
//
function processUser(callback) {
  console.log("Processing user...");
callback()  // call done()// since we call "done" using callback, Now done() = callback()

  
}
function done() {
  console.log("Finished");
}

processUser(done)
// call done() into processUser. 
// 1. processUser() runs
// 2. prints "Processing user..."
// 3. callback() executes done()
// 4. prints "Finished"


// Node.js uses callback everywhere
setTimeout(function(){
console.log("Task finished");

},2000)
// A function into setTimeout.

// setTimeout is a JavaScript function that runs another function after a specified delay
// Syntex:   setTimeout(function, delay) 
// delay time in miliseconds.  1000ms = 1second
const myName = "Montajur"
setTimeout(function(){
    console.log("Hello " + myName);
    
},5000)
// 

//
// Higher-Order Function
// takes another function or return a function
function calculator(a, b, operation){
  return operation(a, b)
}

function add(x,y){
  return x + y
}


console.log(calculator(2, 3, add))
// it's look like callback function. but higher order chain


// 
// Arrow Functions
// Modern JavaScript uses arrow functions a lot. Because they are shorter and cleaner

// Normal function
function normal(){
  console.log("it's a normal function");  
}
normal()


function normal1(a,b){
  return a + b;
}


// Arrow version
const arrow = ()=>{
  console.log("This is an arrow function");
  

}
arrow()  // execute the function
console.log(arrow);  // since it's look like a variable, we can log this variable. 
// output: a function

const arrow1 = (a,b) =>{
  return a + b
}
arrow1(4, 5); // run the function. we can't see result. because didn't log
// that's why we need to catch a varible to run and execute next
const result =  arrow1(4,5)  // 
console.log(result);



// short version
const arrow3 =(a,b)=> a+b;  

arrow3(10,20)  // no output because didn't log
console.log(arrow3(10,20));


// Backend Developer use arrow functions. Because they are shorter and cleaner


// practice Task
function runTask(task){
  console.log("Start");
  task()
}
runTask(function(){
  console.log("Task running");
  
})


// Deference between Callback functions and Higher-Order functions
function calculator(a, b, operation) {
  return operation(a, b);
}   // it's a higher order function


function add(x, y) {
  return x + y;
}  // it's a callback function

console.log(calculator(2, 3, add));

// Higher-Order functions: Takes another function as a parameter, OR // Returns another function
// if a function does any one of these, it is called Higher-Order Function(HOF)

// Calculator = functions,  
// add = function = operation

// So, calculator(..., add)   // that means we pass a function into another function
// That makes calculator a Higher-Order Function

// add() is the callback function. calculator calls "add" later

// even calculator return a function inside "operation() = add()"


// Final 
// Calculator = Higher-Order Function
// add = callback Function


setTimeout(greet, 1000)
// setTimeout = Higher-Order Function   // Because pass a function(greet)
// greet = callback Function



const numbers = [1,2,3]

const resultt =  numbers.map(function(n){
  return n*2
})

console.log(resultt);  // [2,4,6]

// map = Higher-Order Function
// function(n){...} = callback Function
