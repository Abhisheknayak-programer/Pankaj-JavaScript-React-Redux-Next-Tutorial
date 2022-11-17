// LOOPS
//Loop takes three things : Initial Value, Condition, Increment or Decrement

// Types of Loops
// 1. For Loop
// 2. Do while Loop
// 3. While Loop

for (let i = 0; i < 100; i++) {
  console.log(i, "Abhishek Nayak");
}

// for (let i = 100; i > 1; i--) {
//   console.log(i, "Abhishek Nayak");
// }

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

// sum = 0 + 1
// sum = 1 + 2
// sum = 3 + 3
// sum = 6 + 4
// sum = 10 + 5
// sum = 15 + 6
// sum = 21 + 7
// sum = 28 + 8
// sum = 36 + 9
// sum = 45 + 10
// sum = 55

// ARRAYS
// Q => Why we use array ?
let friend1 = "Abhishek";
let friend2 = "Mohit";
let friend3 = "Om";

console.log(friend1);
console.log(friend2);
console.log(friend3);

// Array is a linear datastructure used to store multiple values.
const friends = ["Abhishek", "Mohit", "Om"];
console.log(friends);

console.log(friends.length);
friends.push("Rabi");
friends.unshift("Pankaj");
console.log(friends);
console.log(friends.length);

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

// HOW TO ADD TWO ARRAY VALUES USING SPREAD OPERATOR
let food1 = ["pizza", "burger", "cutlet"];
let food2 = ["fried rice", "aloo paratha", "bread and butter", "lassi"];

let food = [...food1, ...food2, "gajar ka halwa"];

console.log(food);

// REST OPERATOR IN JAVASCRIPT
let nums = [91, 23426, 37654, 747, 55, 256, 766];

let [rollNumber, Money, ...bache] = nums;

console.log(bache);
console.log(rollNumber);
console.log(Money);
