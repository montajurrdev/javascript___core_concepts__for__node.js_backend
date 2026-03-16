// JavaScript object has a special property called prototype that is either null or refereces another object 
// let a = {
//     name: "Montajur",
//     language: "JavaScript"
// }
// console.log(a)

// let p = {
//     run: ()=>{
//         alert("run")
//     }
// }
// p.run()  // alert run
// a.run()  // error: a.run is not a function

// Because We can't access another object property directly
// prototype make this process completed

// run() is not available in "a". but we need run() under a 
// that's why we can set prototype of "a" = property of p
// a.__proto__ = p
// a.run()
// Now we can access run()



// if run stayed in both object
let a = {
  name: "Montajur",
  language: "JavaScript",
  run: () => {
    alert("self run");
  },
};


let p = {
  run: () => {
    alert("run p as a proto");
  },
  role: "Developer"
};

a.__proto__ = p;
a.run()
// first, a.run() find run() at self property. if found, executed. 
// if not found, will look for its prototype
console.log(a.role);



//
// prototype of prototype
p.__proto__ = {
    name1: "Jackie"
}
console.log(a.name1);
// its chain of prototype
// if we ask an object for a property it doesn't have, it looks at its prototype to see if it's there. 
// it continues up the chain until it finds the property or hits null.



// Every JavaScript object has a private property that holds a link to another object called its prototype. 
