// CLOSURES
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
let name = "Pankaj";

function Greet(a, b) {
  console.log(a, b);
  function GreetInner() {
    // let a = 5;
    a = 5;
    console.log(a, name);
    name = "Abhishek";
    console.log(name);
    let abc = "Ravi";
  }
  // console.log(abc); ////ERROR
  GreetInner();
  console.log(a);
}

Greet(1, 2);
console.log(name);

// HOISTING
// JavaScript Hoisting refers to the process to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

add(1, 2);
console.log(num1);
// console.log(num2);
// console.log(num3);

function add(a, b) {
  console.log(a + b);
}

var num1 = 123;
let num2 = 123;
const num3 = 123;

// IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
(function () {
  console.log("Abhishek Nayak");
})();

// SPLICE
let arr = [123, 654, 87, 98, 765, 5, 345, 543234, 7654, 345, 76543, 4, 876, 34];
// SPILCE(Index, Total elements)
arr.splice(2, 5);
console.log(arr);

