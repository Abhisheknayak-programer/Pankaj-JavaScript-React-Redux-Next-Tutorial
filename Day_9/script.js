// MATH IN JAVASCRIPT
let val = 67.4567;
console.log(val);
console.log(Math.trunc(val));
console.log(Math.floor(val));
console.log(Math.ceil(val));
console.log(Math.round(val));
console.log(Math.PI);
console.log(Math.pow(2, 4));
console.log(Math.pow(4, 5));
console.log(Math.pow(7, 4));
console.log(Math.min(456, 23456));
console.log(Math.max(456, 23456));
console.log(Math.random() * 10);
console.log(Math.trunc(Math.random() * 101));

// SORTING
let arr = ["Abhishek", "pankaj", "rahul", "anuradha", "rakesh"];
arr.sort();
console.log(arr);

let nums = [1123, 5676, 987654, 1234, 76543, 9876, 98765, 8765, 23];
// Ascending
nums.sort((a, b) => a - b);
console.log(nums);

// Descending
nums.sort((a, b) => b - a);
console.log(nums);
