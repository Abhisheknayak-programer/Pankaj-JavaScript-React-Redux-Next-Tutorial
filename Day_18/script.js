// TIMERS IN JAVASCRIPT
// There are two types of timers :
// a. setTimeout
// b. setInterval

// 1 min = 60 sec
// 1 sec = 1000ms

let val = false;
console.log(val);

// SET TIMEOUT METHOD
setTimeout(() => {
  console.log("Hogaya 10 sec");
  val = true;
  console.log(val);

  if (val === true) {
    clearTimeout(timer);
  }
}, 10000);

console.log("Kuchbhi!");

// CLEAR TIMEOUT METHOD
const timer = setTimeout(() => {
  console.log("Mera bhi hogaya 12 sec");
}, 12000);

// SET INTERVAL METHOD
setInterval(() => {
  console.log("Abhishek");
}, 10000000);

// CLEAR INTERVAL METHOD
const timer2 = setInterval(() => {
  console.log("ABCD");
  if (val === true) {
    clearInterval(timer2);
  }
}, 5000);

// DATE IN JAVASCRIPT
const d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getMonth()); // Counting starts from 0
console.log(d.getFullYear());
console.log(d.getDay()); // Counting starts from 0
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime());

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log(months[d.getMonth()]);

const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(Days[d.getDay()]);

// LOGICAL OPERATORS IN JAVASCRIPT
// AND OPERATIONS
// True and True = True
// True and False = False
// False and True = False
// False and False = False

// OR OPERATIONS
// True Or True = True
// True Or False = True
// False Or True = True
// False Or False = False

// AND SYMBOL = &&
// OR SYMBOL = ||

let age = 18;
let name = "Pankaj";

if (age >= 18 && name === "Pankaj") {
  console.log("You are allowed to drive car");
} else if (age < 18 && name === "Pankaj") {
  console.log("You are not allowed to drive car");
} else {
  console.log("Kon hai tu!");
}

if (age > 18 || name === "IPankaj") {
  console.log("You are allowed to drive car");
} else if (age < 18 || name === "Panookaj") {
  console.log("You are not allowed to drive car");
} else {
  console.log("Kon hai tu!");
}
