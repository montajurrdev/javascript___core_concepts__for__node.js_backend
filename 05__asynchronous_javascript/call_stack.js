// Call Stack
// executes functions one by one (keep mind the place and order of functions)
function a() {
  console.log("A");
}
a();
// call a(), The function a() is pushed into the Call Stack, inside a()
// console.log("A") runs, so it added to the stack
// Call Stack: first console.log("A"),  then a()
// print A, After printing, console.log("A") is removed from the stack
// Call Stack: a(), Now the function a() also completes, so it is removed
// Call Stack: (empty)
// after finishing, the stack becomes empty (it means: All functions have finished executing and nothing is left to run)

// Keep track of multiple function calls. it operates on the Last-In, First-Out (LIFO) principle
// Js runs one function at a time, first runs current function,
// if found another function inside the current function, then stop current function execution and runs that new function (It means LIFO)
// AFter finishing that new function execution, runs the current function. Continuing this process
function start() {
  console.log("Start");
  firstF();
  console.log("Middle Point");
  secondF();
  console.log("End");
}
start();

function firstF() {
  console.log("firstF");
}

function secondF() {
  childF();

  console.log("secondF");
}

function childF() {
  console.log("CHildF");
}
// Call start(), call stack: line by line explain
// start(),  inside found console.log("Start")
// Now console.log("Start"), start()      after print Start, console.log removed from stack
// now start()    then inside found firstF()
// firstF(), start()    inside firstF() found console.log("firstF")
// console.log("firstF"), firstF(), start()       print firstF, removed console.log
// firstF(), start()      firstF() complete, removed firstF
// start()    inside found  console.log("Middle Point")
//  console.log("Middle Point"), start()       print "Middle Point", remove console.log
// start()        inside found secondF()
// secondF(), start()     inside secondF found childF()
// childF(), secondF(), start()     inside childF found console.log("CHildF")
// console.log("CHildF"), childF(), secondF(), start()       print CHildF, removed console.log
// childF(), secondF(), start()       completed childF(), remove childF()
// secondF(), start()       inside secondF() found console.log("secondF")
// console.log("secondF"), secondF(), start()    print secondF, removed console.log
// secondF(), start()      completed secondF(), removed from stack
// start()         inside found console.log("End")
// console.log("End"), start()      print End, remove console.log
// start()    completed start(), removed it from call stack
// Call Stack: (empty)

// Function Calls: that function's information is pushed onto the top of the call stack
// Execution Order: if that function calls another function, the new funtion is pushed onto the top. and it is the first one to be executed. the previous function waits for the new one to return
// Funtion Return: When a function finishes executing, its frame is popped off the top of the stack, execution resumes where it left off in the previous function
