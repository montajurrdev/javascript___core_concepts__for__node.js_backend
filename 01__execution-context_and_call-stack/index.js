// JavaScript is single thread -- runs one task at a time

console.log("A")
console.log("B")
console.log("C")
//output
// A
// B
// C
// Because JS executes line by line

// Call Stack
// JavaScript keeps track of functions using somethings called the Call Stack
// functions er place -- kontir por konti mone rathe



function first(){
    second()
}
function second(){
    console.log("hello");

}
first()
// execution flow: Call Stack
// first() 
// second()
// console.log("hello")

// Then it pops out:
// Mechanism (LIFO): The call stack operates on a "Last In, First Out" (LIFO) principle.
// console.log removed
// second removed
// first removed


function one(){
    console.log("one");
    
}
function two(){
    one()
    console.log("two");
    
}
two()
// Execution order:
// two()
// one()
// console.log("one");
// console.log("two");


//
// Practice Task
function a(){
    console.log("A");
    
}
function b(){
    a()
    console.log("B");
    
}
function c(){
    b()
    console.log("C");
    
}
c()

// execution flow:
// c()
// b()
// a()
// console.log("A")
// console.log("B");
// console.log("C");

// This is called Call Stack - means, JavaScript keeps in mind(memory) place and order of functions  
// Mechanism (LIFO): "Last In, First Out"

// A printed
// a() removed
// console.log("B")
// b() removed
// console.log("C")
// c() removed
