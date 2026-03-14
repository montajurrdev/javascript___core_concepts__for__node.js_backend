// Scope: where a variable can accessed
// scope = accessibility / accessibility of variables, functions, and objects 
let a = 10;

function test(){
    console.log(a)
}

test()   // output: 10 
// a is in global scope, so the function can access it


//
// Global Scope: variables defined outside any function or block are accessible throughout the entire program

//
// Local Scope:  declaired inside a function and cannot be accessed from outside
// Local Scope/ Function Scope
// for all keyword let, const, var
function local(){
    let b = 20;
    var c = 30;
}

// console.log(b);
// console.log(c);
// Error: b and c is not defined. 
// Because b and c exists only inside the function



//
// Block Scope: 


// 
// Lexical Scope: JavaScript decide scope where the function is written, not where it is called
let d = 30;

function first(){
    function second(){
        console.log(d);
        
    }
    second()
    
}
first()
// second() can access variables from its parent scope

// Lexical Scope: ability of a function to access varibles from its parent scope
// it like a one-way mirror:
// Inner can see outer: A nested function has access to varibles declared in its parent functions.
// Outer cannot see Inner: A parent function does not have access to variables declared inside its child functions.
const globalVar = "I am global";

function outerFunction(){
    const outerVar = "I am outside";
    function innerFunction() {
        const innerVar = "I am inside";
        
        console.log(globalVar); // access global
        console.log(outerVar); // accesses parent
        console.log(innerVar); // accesses local
        // this is work because of lexical scope
    }
    innerFunction()
 // console.log(innerVar); // error: outer function can't see inside innerFunction

    
}
// outerFunction()

// Scope Chain: if the engine can't find a varibale in the immediate scope, it looks up to the next outer scope, continuing util it reaches the global scope.


//
// Closure is a function
// A closure happens when a function remembers variables from its outer scope 
// even after the outer function has finished executing
function outer(){
    let count = 0;
    function inner(){
        count++
        console.log(count);
    }
   return inner
    
}
const counter = outer()
counter()
counter()
counter()

//
// details:
// creates a function outer 
// creates a variable count = 0
// creates a function inner
// returns the function inner


// outer() is executed  // when run:   const counter = outer()
// outer() returns a Function  // so   counter = inner function
//Conceotually
// counter = function inner(){
//     count++
//     console.log(count);
// }
// although outer executed, inner still remembers count

//
// return inner means
// does not run the function
// it only returns the function itself (giving back the function)
// return tell: give the inner function to whoever called outer()
// so now   counter = inner ; both are function


// when we call counter(), it runs
// count++;
// console.log(count);

// first call: count = 0  after increment count = 1

// Normally when a function finishes, its variables disappear(অদৃশ্য হওয়া)
// But here something special happens. Value Doesn't Reset

// Because inner uses count, JavaScript keeps count in memory
// Since count born in outer() and outer() finished executing
// but inner still using it
// that's why js remember it in memory

// so even after outer() finished, count is still remembered
// This is called a closure


// second call: count = 1  after increment count = 2
// Third call : count = 2  after increment count = 3

// key thing:  inner remembers count
// that remembering = closure


// This is usefull when we need access variables out of function
function database(){
    let connection = 'connected';
    return function(){
     console.log(connection);
        
    }

}
const result = database()
result()



// console.log(connection);
// connection can't be accessed directly   // because local scope  
// that's why we uses closure

function createUser(){
    let pass = "1234";  // pass will be string
    return function showPass(){
        console.log(pass);
        
    }

}
// createUser()  // no output  Because it just runs the function and return inner()
// it doesn't run inner()
const passResult = createUser()  //  for executes inner(), we need to catch it through variable
passResult()  // run inner() and executes



// Practice
function outerr(){
    let name = "Montajur";
    function innerr(){
        console.log(name);

    }
    return innerr

}
outerr()  // we got innerr()
// we need to execute innerr. but we don't have exact innerr(). that's why 
const testR = outerr()
testR()




