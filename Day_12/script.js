// PadStart Method
let name = "1234893293451890";
let store = name.slice(-4);
let ans = store.padStart(16, "X");
console.log(ans);

// PadEnd Method
let name2 = "1234893293451890";
let store2 = name2.slice(0, 4);
let ans2 = store2.padEnd(16, "*");
console.log(ans2);

// Join Method
let arr = ["Abhishek", "nayak", "is", "a", "coder"];

console.log(arr.join(""));
console.log(arr.join(" "));
console.log(arr.join("____"));
console.log(arr.join("$___$"));

// INDEXOF METHOD
let str = "ShbJHVG$Hbs$h$bdv$kvbm";
let ind = str.indexOf("$");
console.log(ind);

// LASTINDEXOF METHOD
let ind2 = str.lastIndexOf("$");
console.log(ind2);

// SOME OF THE ARRAY METHODS
// SLICE
let arr2 = [1234, 234, 76543, 8765, 87654];
let ans5 = arr2.slice(1);
console.log(ans5);

let ans6 = arr2.slice(arr2.length - 1);
console.log(ans6);

let ans7 = arr2.slice(3);
console.log(ans7);

// REVERSE
let num = [1234567, 6543212, 3456543, 2347654, 3345, 43356];
let rev = num.reverse();
console.log(rev);

let names = ["Pankaj", "Abhishek"];
let namesChanged = names.reverse();
console.log(namesChanged);

let nam = "Panku Sharma";
let rev2 = nam.split("").reverse().join(""); //Chaning Method
console.log(rev2);

// CONCAT
let arr1 = [1, 2, 3, 4, 5];
let arr4 = [4, 32, 345, 234, 32];
let ans9 = arr1.concat(arr4);
console.log(ans9);

// FLAT METHOD
let nums = [[123, 567, 234], "Abhishek", "Pankaj", ["Nayak", "Nandwami"]];
console.log(nums);
console.log(nums.flat());

let nums2 = [
  [123, [567, [234]]],
  "Abhishek",
  "Pankaj",
  ["Nayak", ["Nandwami"]],
];

console.log(nums2.flat(4));
