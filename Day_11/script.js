const person = {
  name: "Pankaj",
  age: 30,
  salary: 523040,
  marks: [12345, 46543, 76543],
  food: ["Pizza", "Burger"],
};

console.log(person.food);

// Object Destructuring
let { name, age, ...rest } = person;

console.log(name);
console.log(age);
console.log(rest);

// Sets
let nums = [1, 2, 3, 4, 2, 3, 1, 2, 3, 2, 1, 3, 5, 2, 85, 1, 2];
let ans2 = new Set(nums);
console.log(ans2);

let names = ["Pankaj", "Abhishek", "Abhishek", "Pankaj"];
let ans3 = new Set(names);
console.log(ans3);

// Array Index Accessing
let food = ["Pizza", "Burger", "Chapati", "Petis", "Samosha", "Gupchup"];
console.log(food[4]);
console.log(food[0]);

// Array Index Accessing And Changing Values
food[5] = "Pasta";
console.log(food);

// String : Combinations of Letters makes a string.
let a = "Abhishek Nayak";

// String Index Accessing
console.log(a[0]);
console.log(a[3]);

// String Length
console.log(a.length);

// Slice Method
let myname = "pankaj nandwani";
const ans = myname.slice(3);
console.log(ans);

const ans4 = myname.slice(3, 6);
console.log(ans4);

const ans5 = myname.slice(-5);
console.log(ans5);

const ans6 = myname.slice(0);
console.log(ans6);

// Split Method
let str = "Abhishek Nayak is a 5 Star Coder At Leetcode";

let ans7 = str.split(" ");
console.log(ans7);

let word = "934234@9234jJjaj@asnd345@snxhcn63728@sbdnm@nsdmcv$2893@";
let ans8 = word.split("@");
console.log(ans8);

let sen = "abc and bcd and dce";
let ans9 = sen.split("and");
console.log(ans9);

// Uppercase Method
let s = "asjdvhgs bdfguvsghb dvuvs duygs dysvg dydihjks";
console.log(s.toUpperCase());

// Lowercase Method
let d = "ASJDVHGS BDFGUVSGHB DVUVS DUYGS DYSVG DYDIHJKS";
console.log(d.toLowerCase());

// Trim Method
let chor = "                   Raja            ";
console.log(chor);
let newChor = chor.trim();
console.log(newChor);

// Replace Method
let number = "7077358291";
const val1 = number.replace("1", "One");
console.log(val1);

const val2 = number.replace("7", "Seven");
console.log(val2);

const message = "Pankaj and raja and rahul are friends";
const val3 = message.replace("and", ",");
console.log(val3);

// Replace All Method
const message2 = "Pankaj and raja and rahul are friends";
const val4 = message2.replaceAll("and", "kuchaur");
console.log(val4);

let number2 = "7077358291";
const val5 = number2.replaceAll("7", "8");
console.log(val5);

// Repeat Method
let animal = "Meow";
console.log("cat sound ", animal.repeat(5));
console.log(animal.repeat(10));

// Includes Method
let sentence = "Pankaj ne khana khaya ya nahi!";
const present = sentence.includes("ya");
console.log(present);

// StartsWith Method
let sentence2 = "My name is Abhishek Nayak";
const yesOrNo1 = sentence2.startsWith("is");
console.log(yesOrNo1);

const yesOrNo2 = sentence2.startsWith("My name");
console.log(yesOrNo2);

// EndWith Method
const yesOrNo3 = sentence2.endsWith("Nayak");
console.log(yesOrNo3);

const yesOrNo4 = sentence2.endsWith("NayakJi");
console.log(yesOrNo4);