// FUNCTIONS
// TYPE - I (Function Declaration)
function add(a, b, c) {
  console.log(`The First Number is ${a}`);
  console.log(`The Second Number is ${b}`);
  console.log(`The Third Number is ${c}`);
  console.log(`The ans is : ${a + b + c}`);
  console.log("\n");
}

add(1, 2, 3);
add(11, 12, 13);
add(10, 20, 30);

function TellGoodMorning(name) {
  console.log(`Good Morning ${name} sir`);
}

TellGoodMorning("Pankaj");
TellGoodMorning("Abhishek");
TellGoodMorning("Rahul");
TellGoodMorning("Ravi");

// TYPE - II (Function Expression)
const output = function (a, b) {
  return a * b;
};

let ans = output(5, 6);
console.log(ans);

// TYPE - III (Arrow Function)
const divFunction = (a, b) => {
  return a / b;
};

let val = divFunction(60, 5);
console.log(val);

// DIFFRENCE IN ABOVE THREE TYPES
function sub1(a, b) {
  return a - b;
}

const sub2 = function (a, b) {
  return a - b;
};

const sub3 = (a, b) => {
  return a - b;
};

// TYPES OF SCOPING IN JAVASCRIPT
let a = 12; //Global Scope
console.log(a);

//Block Scope
if (a > 10) {
  let c = "Pankaj";
  console.log(a);
  console.log(c);
}

// console.log(c);

{
  console.log(a + 2);
}

//Function Scope
function add() {
  let ans5 = 6;
  console.log(ans5);
}

add();

// console.log(ans5);

// TERNARY OPERATOR
let age = 18;
age === 18 ? console.log("I am adult") : console.log("I am a child");

// if (age === 18) {
//   console.log("I am adult");
// } else {
//   console.log("I am child");
// }

// OBJECTS IN JAVASCRIPT
const obj = {
  name: "pankaj",
  rollNum: 1234,
  pass: true,
  marks: [90, 95, 80, 100],
};

// KEY : VALUE

console.log(obj);
console.log(obj.name);
console.log(obj.rollNum);
console.log(obj.pass);
console.log(obj.marks);
