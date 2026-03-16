// An object stores related data using key-value pairs
// key/fundamentals - name, age, role etc
// value - Montajur, 23, Developer etc
// these are stored together


// {
//     name: "Montajur",
//     age: 23,
//     role: "Developer",
//     isLoggedIn: true
// }
// this is an object

// Now runs
const user = {
    name: "Montajur",
    age: 23,
    role: "Developer",
    isLoggedIn: true
}

// then use this or executes
// console.log(user);

// if we need just name or role 
// console.log(user.role);
// console.log(user.name, user.age);


// backend example
const request = {
    url: "/users",
    method: "GET"
}
// console.log(request.method);

// object can contain/store functions
const user1 = {
    name: "Monir",
    greet: function(){
        console.log("Hello " + this.name);  // this refers to the current object
        
    }
}
// console.log(user1); // output have a greet function
// user1.greet()  // Hello Monir

// This is called a method. (object method/ Greet Method)
// Because It is a function stored inside an object

// "this" refers to an object that calls the method
// this = user,  this.name = "Monir"
const user2 = {
    name: "Montajur",
    greetFunction(){
        console.log(this.name);
        
    }
}
// user2.greetFunction()  // Montajur
// This is Modern Shorter Syntex



// Prototype
// Every JavaScript object has something called a prototype
// Prototype allows objects to inherit properties from other objects
const userp = {
    name: "Montajur"
}
console.log(userp.toString());




