// Web APIs (Browser/Node APIs)
// a set of Application Programming Interfaces (APIs) provided by web browsers that allow developers to access a wide range of functionalities not included in the core JavaScript language itself.
// They act as a bridge, enabling JavaScript to interact with the browser and the broader web environment, such as the user's computer hardware or third-party services.
setTimeout(() => {
  console.log("Hello");
}, 2000);
// the timer runs outside the stack, In browser



// Call Stack → can do only one thing at a time (because Js single threaded)
// so if a task takes time, everything else must wait

// But tasks like: 
 // timers
 // network requests
 // file reading
// takes time, can be block the program.
// So JavaScript uses Web APIs/Node APIs to handle them outside the stack



// Imagine: JavaScript handled everything in the call stack. what will happen →
console.log("Start");

// pretend this takes 5 seconds
// const data = readFileSync("bigFile.txt");
// console.log(data);

console.log("End");


// result:
// Start
// (wait 5 seconds....)
// (file content)
// End

// During those 5 seconds:
// UI freeze
// Nothing else runs
// This is called blocking

// That's why JavaScript use Web APIs to make it Asynchronous (Non-blocking)
console.log("Start");

// readFile("bigFile.txt", (data) => {
//   console.log(data);
// });

console.log("End");

// output
// Start
// End
// (file content later)
// file reading goes outside (Node API), Js continues running, No waiting




// Web APIs are features provided by the environment, not JavaScript itself

// In Browser: setTimeout(), fetch(), DOM events 
// In Node.js: file reading, database calls, network requests, timers

// These are handled by APIs outside the call stack.
// Because These tasks would block the program 
console.log("Montajur");

// Example-01
// setTimeout
console.log("Start");

setTimeout(() => {
  console.log("Hello after 2sec");
}, 2000);

console.log("End");

// Call Stack:
// ---------
// console.log("Start") → runs
// setTimeout(...) → sent to Web API     // Timer runs outside the stack
// console.log("End") → runs

// after 2s
// Callback Queue → "Hello after 2sec"
// Event Loop → moves it to Call Stack

// Callback queue is a waiting area for functions that are ready to be executed
// Event Loop is the mechanism that continuously monitors program's state to move these waiting functions to the main execution thread when it is idle.

// Together, they allow Js to handle asynchronous operations efficiently despite being single-threaded


// output:
 // Start 
 // End
 // Hello after 2sec



// Ex-02   fetch(Network Request) Method
console.log("Start fetch");

fetch("https://jsonplaceholder.typicode.com/todos/1")   // fetch is a function, returns a promise
// fetch handles data in two distinct stages
.then(res => res.json())   // receive a response object. this isn't the data yet. it contain header, http status, and the raw body 
.then(data => console.log(data)    // to read what's inside the envelop. = usable data
)
console.log("End fetch");


// fetch goes to Web API
// Network request happens outside JS engine
// when response comes → callback goes to queue

// output:
 // Start fetch
 // End fetch
 // { id: 1, title: "...", ... }



// Ex-03    File Reading (Node.js)
import fs from "node:fs"

console.log("Start fs");

fs.readFile("file.txt", "utf-8", (err, data)=>{
  console.log(data);
  
})

console.log("End fs");

// readFile → Node API handles file reading outside js engine

// output:
 // Start fs
 // End fs
 // (file content later)



// Ex-04    Database Call
// console.log("Start DB");
 
// db.findUser(1, (user) => {
//   console.log(user);
  
// })

// console.log("End Db");



// Call Stack executes code
// Async task → sent to Web API
// Web API finishes task
// Callback → goes to Queue (Callback ready)
// Event Loop → sends it to Call Stack from Queue
