// Javascript is a high level, object oriented, just in time compiled, dynamically typed programming language.

// pankaj.js
// mobile.js
// abc.js
// script.js

// "js" is the extention of the file

// 0101101010100101010101010100000101010101010100101010 (Low level language).
// hi i am here (english words/ combination of letters)
// let a = 5; (High level language).

// car website =>
// Rolls Royace
// Bolero
// Swift
// Audi
// Tata Nano
// Ferrari
// Maruti

// body, mirror, stearing, brake, door, window, wheel.

// basicCar =  new object(body, mirror, stearing, brake, door, window, wheel)
// advancedCar = basicCar + NewFeatures

// Compiler, Interpreter, Just in Time Compilation

// Work : let a = 5 ====> 010101001010010
// Compiler work is to check each and every line of the code and atlast submit the output or error if occured.

// Interpreter work is to check each line of the code and submit the output or error if occured on that line.

// Just in time compiled means it submits the output or error in each and every instance of time.

// Ex:
// let a = 6;
// console.log(a);

// let b = 6;
// console.log(a + b);

// Dynamically Typed Programming language is a type of a programming language where we do not need to define the datatype to store some values inside the variable.

// Ex: C
// int val = 19;
// char name = 'c';
// val = 'c'; //ERROR

// EX: JavaScript
// let val = 19;
// val = 'c';
// val = 'Abhishek Nayak';
// val = [13,4,6,26,2];

// What is the role of the javascript in web development?
// Ans = To add Dynamic effect to the website on Real Time upon user clicks or any other events.

// ES (ECMASCRIPT)
// 2010 - ECMA Internationals (Company)
// ES2015 - ES6 - (ECMASCRIPT-6) (Most Popular Version)
// let, const, object, classes and many more things.
// Every year after 2015 New ES Release occurs.

// ES2016 - ES7 - (ECMASCRIPT-7)
// ES2017 - ES8 - (ECMASCRIPT-8)
// ES2018 - ES9 - (ECMASCRIPT-9)
// ES2019 - ES10 - (ECMASCRIPT-10)
// ES2020 - ES11 - (ECMASCRIPT-11)
// ES2021 - ES12 - (ECMASCRIPT-12)
// ES2022 - ES13 - (ECMASCRIPT-13)

// How to print in JavaScript
console.log("Abhishek Nayak");
console.log("Pankaj Nandwani");
console.log(1293849);
console.log([23456, 4543, 6763, 654]);

// To store any kind of value we use let and const in javascript.
// const is used to store that values which would remain same throughout lifetime.
// let is used to store the values that may change in future according to the user needs.

const pi = 3.14;
const pankajAdharcard = "1010010101010";
console.log(pankajAdharcard);
// pankajAdharcard = "1234565432"; // {ERROR}
// console.log(pankajAdharcard);

const pankajDrivingLC = "92202048230";

let pankajMark2020 = 10; //Jan
console.log(pankajMark2020);

pankajMark2020 = 70; //April
console.log(pankajMark2020);

pankajMark2020 = 100; //Dec
console.log(pankajMark2020);

pankajMark2020 = "Hundred";
console.log(pankajMark2020);

// Combination of characters is called as string.

// Primitive DataType
// 1. Number (Ex - 23456)
// 2. String (Ex - 'Abhishek Nayak')
// 3. boolean (true or false)
// 4. undefined (declared a variable but not given value to that)
// 5. Null (No value is given or defined)
// 6. BigInt ES2020 (used to store large number values)

let a = BigInt(51114356789876564);
console.log(a + 1n);

let pankaj = "student";
let student = 10;
let friends = ["Manas", "Rohit", "Abhishek"]; //Array
let jhutMatBol = false;

console.log(typeof jhutMatBol);
console.log(typeof friends);
console.log(typeof student);
console.log(typeof pankaj);

// TEMPLATE LITERALS
// Template literals is used to combine some text along with the variables.
// variables means a container that helps to store certain values.
let name = "Abhishek Nayak";
console.log(`The MERN STACK Coder of the Year is ${name} and his id is ${a}`);

name = "Pankaj Nandwani";
console.log(`The MERN STACK Coder of the Year is ${name} and his id is ${a}`);

for (let i = 0; i < friends.length; i++) {
  console.log(`${i + 1}. Hello :-> ${friends[i]}`);
}

// {} = curley braces
// () = parenthesis
// [] = square braces
// "" = double quote
// '' = single quote
//  / = forward slash
//  \ = backward slash
// _  = underscore
// -  = highpen
// `` = tilda
// |  = pipe
// * = Astrix
// & = Ampsend
// $ = Dollar
// % = Modulo operator
// ^ = Exponent operator
// @ = at the rate
// ! = Exlamation
// # = Hash