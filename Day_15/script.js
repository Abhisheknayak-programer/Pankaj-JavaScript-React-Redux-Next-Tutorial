// FOR LOOP
let arr = [123, "124", 543, 876, 67, 23, 2];

console.log("WAY--1");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// arr[0]
// arr[1]
// arr[2]
// arr[3]
// arr[4]
// arr[5]

console.log("WAY--2");

// FOREACH LOOP
arr.forEach((el, ind, arr) => {
  console.log(`Element : ${el} <<<< Index :  ${ind} <<<< Array : ${arr}`);
});

// MAP METHOD [Returns a Array]
let arr1 = [2, 3, 5, 1];
let ans1 = arr1.map((el, ind, arr) => {
  return el * 2;
});

console.log(ans1);

// FITER METHOD [Returns a Array]
let arr2 = [7654, 43, 2345, 234, 23, 42, 3];
let ans2 = arr2.filter((el, ind, arr) => {
  return el > 2000;
});

console.log(ans2);

// EVERY METHOD [Returns a Boolean]
let arr3 = [4, 345, 234, 12, 65, 265, 4, 872, 82];
let ans3 = arr3.every((el, ind, arr) => {
  return el < 1000;
});

console.log(ans3);

// SOME METHOD [Returns a Boolean]
let arr4 = [4, 345, 234, 12, 65, 1265, 4, 872, 82];
let ans4 = arr4.some((el, ind, arr) => {
  return el > 1000;
});

console.log(ans4);

// FIND METHOD [Returns a single value]
let arr5 = ["Pankaj", "Abhishek", "Radha", "Aditya", "Dharmesh"];
let ans5 = arr5.find((el, ind, arr) => {
  return el === "Abhishek";
});

console.log(ans5);

// FINDINDEX METHOD [Returns a Number]
let arr6 = ["Pankaj", "Abhishek", "Radha", "Aditya", "Dharmesh"];
let ans6 = arr6.findIndex((el, ind, arr) => {
  return el === "Abhishek";
});

console.log(ans6);

// REDUCE METHOD [Returns a single Value]
let arr7 = [1, 2, 3, 6, 7, 6];
let ans7 = arr7.reduce((acc, el, ind, arr) => {
  return (acc = acc + el);
}, 10);

console.log(ans7);
// acc = accumulator
