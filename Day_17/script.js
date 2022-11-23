// EVENTS IN JAVASCRIPT
// When some action is done on the website by the user we say that a event is occured.

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

// ClassList : ADD, REMOVE, TOGGLE, CONTAINS

// CLICK EVENT
btn1.addEventListener("click", () => {
  box1.classList.add("extra");
});

btn2.addEventListener("click", () => {
  box2.classList.remove("box");
  box2.classList.remove("box2");
});

btn3.addEventListener("click", () => {
  box3.classList.toggle("upAndDown");
});

btn4.addEventListener("click", () => {
  if (box4.classList.contains("box")) {
    box4.style.background = "black";
  } else {
    box4.style.background = "pink";
  }
});

// MOUSE EVENT
box4.addEventListener("mouseover", () => {
  box4.style.background = "black";
});

box4.addEventListener("mouseout", () => {
  box4.style.background = "red";
});

// LOAD EVENT
const image = document.querySelector(".image");

image.addEventListener("load", () => {
  console.log("Load hogaya bhaiya!");
});

console.log("Random Text"); //Loads first [Just to show which console is loading faster]

// KEY EVENT
window.addEventListener("keydown", (e) => {
  if (e.key === "y") {
    box1.style.background = "blue";
  } else if (e.key === "s") {
    box3.style.border = "10px solid green";
  } else {
    box2.style.width = "100px";
  }
});

// CHANGE EVENT
const myText = document.querySelector(".mytext");

myText.addEventListener("change", (e) => {
  console.log(e.target.value);
});
