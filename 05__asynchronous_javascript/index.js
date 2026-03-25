// Asynchronous JavaScript is the heart of Node.js 
// A programming technique that allows code to initiate potentially long tasks(like network requests or file operations) and continue executing other code without waiting for the task to finish.
// This Non-blocking behavior is crucial even though JavaScript itself is single threaded

// Methods for Handling Asynchronous Code: Callback, Promises, Async/Await

// Asynchronous
// console.log("Start");

// setTimeout(()=>{
//     console.log("Task finished");
    
// },2000)

// console.log("End");
// what expect: Start → Task finished → End
// but output: Start → End → Task finished   // because callback function make it asynchronous


// To understand this, we must learn 4 parts of the JavaScript runtime
// Call Stack
// Web APIs
// Callback Queue
// Event Loop
 


// Call Stack
// executes functions one by one (Keep track of multiple function calls)
// function a() {
//   console.log("A");
//   b()
// }
// a();

// function b(){
//     console.log("B");
    
// }
// call a(),  Call Stack: line by line ,  new function is pushed onto the top of stack
// a()       runs
// console.log("A"), a()       print A, log removed
// a()     runs
// b(), a()      a() freeze, wait for finishes b()
// console.log("B"), b(), a()         print B
// b(), a()       complete b(), and removed
// a()       a() completed and removed
// Call Stack: (empty)

// Call Sack works through Synchronous way (line by line execution)


// Web APIs (Browser/Node APIs)
// a set of Application Programming Interfaces (APIs) provided by web browsers that allow developers to access a wide range of functionalities not included in the core JavaScript language itself.
// They act as a bridge, enabling JavaScript to interact with the browser and the broader web environment, such as the user's computer hardware or third-party services.

// Call Stack → can do only one thing at a time
// Some tasks are not handled by the call stack.
// setTimeout()
// fetch()
// file reading
// database calls
// network requests
// These are handled by APIs outside the call stack.
// setTimeout(()=>{
//     console.log("Hello");
    
// },2000)
// the timer runs outside the stack

// Output: Hello  (after 2 sec)
// Because Async task → handle Web API


//
// Callback Queue
// a waiting area for functions that are ready to be executed

// When the async task finishes, the callback is placed in the callback queue

// example callback:
// () => {
//     console.log("Hello");
    
// }

// it waits in the queue until the stack becomes empty




// 
// Event Loop (The Brain)
// the core mechanism that manages the execution of code in the JavaScript runtime environment
// Its primary job is to monitor two main areas (The Call Stack, The Queues)

// Call Stack: where all the synchronous Js code is executed.  It operates in LIFO manner
// Queue: Where asynchronous callbacks wait. it operates in FIFO manner


// It constantly checks if the call stack is empty.
// the event loop picks up the first callback from the relevant queue and pushes it onto the call stack for execution
//  console.log("Start async");

//  setTimeout(() => {
//    console.log("Async Task");
//  }, 2000);

//  console.log("End async");


// Execution Flow:

// Call Stack → console.log("Start async")
// Output: Start async

// setTimeout → sent to Web API    // because its async task
// Timer starts

// JS does not wait for async task. next line executes immediately
// Call Stack → console.log("End async")   // End async


// After 2 sec  web API finishes task
// Callback → goes to callback queue   (for wait)


// Event Loop Checks: Is Call Stack empty?
// if YES
// Move Callback → Call Stack

// Call Stack: console.log("Async Task")
// Output: Async Task




// Code → Call Stack → Async Task → Web API → Callback Queue → Event Loop → Call Stack




// Practice
// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// console.log("3");

// Output: 1,3,2

// Async Task will obviously be sent to Web API even if its zero milisecond
// 0ms does not mean immediate execution



// There are actually two types of queues:
// Callback Queue (Macrotask)           
 //setTimeout, setInterval

// Microtask Queue → used by Promises, async/await
// microtasks run before callback queue



// Example
console.log("Start queue");

setTimeout(() => {
    console.log("Timeout");
    
},0)

Promise.resolve().then(() =>{
    console.log("Promise");
    
})

console.log("End");

// execution order Output:
// Start queue
// End 
// Promise    // microtask → higher priority
// Timeout  // Callback queue


