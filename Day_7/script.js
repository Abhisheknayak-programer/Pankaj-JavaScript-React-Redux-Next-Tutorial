// IF CONDITIONAL STATEMENT
let pankajAge = 19;
if (pankajAge > 18) {
  console.log("Can Vote and can Drive");
}

// IF ELSE CONDITION
pankajAge = 13;
if (pankajAge > 18) {
  console.log("Can Vote and can Drive");
} else {
  console.log("Wait for some more years");
}

console.log(typeof "20");
console.log(typeof +"20"); //Type Conversion

// IF ELSE LADDER
pankajAge = 18;
if (pankajAge > 18) {
  console.log("Can Vote and can Drive");
} else if (pankajAge < 18) {
  console.log("Wait for some more years");
} else {
  console.log("Your age is 18");
}

let favFood = "Dosa";
if (favFood === "Pizza") {
  console.log("Jaldi Mota ho jaogee");
} else if (favFood === "Burger") {
  console.log("Jaldi Chota ho jayega");
} else if (favFood === "Dosa") {
  console.log("Thick Thak Hai!");
} else {
  console.log("Nothing Favorite");
}

// Calculations in JavaScript
console.log(1 + 2);
console.log(3 * 2);
console.log(7 / 2);
console.log(10 - 2);

console.log(1 * 2 + 4 - (234 * 3) / 3);

console.log("8" + 2); //IMP
console.log("8" * 2);
console.log("8" / 2);
console.log("8" - 2);

console.log("81234567890" + "123452"); //IMP
console.log("8" - "2");
console.log("8" * "2");
console.log("8" / "2");

console.log(+"234" + 2);
console.log("d" * 5); //NAN (NOT A NUMBER)
console.log("d" - 5); //NAN (NOT A NUMBER)
console.log("d" / 5); //NAN (NOT A NUMBER)
console.log("d" + 5);

console.log(Number("45") + 45);
