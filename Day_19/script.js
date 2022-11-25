// ADVANCED DOM MANIPULATION
// CREATE ELEMENT
const section1 = document.querySelector(".section_1");

const divEl = document.createElement("div");
divEl.classList.add("divStyle");
divEl.innerText = "Hello Abhishek!";

// PREPEND
section1.prepend(divEl);

// APPEND
section1.append(divEl);

// BEFORE
section1.before(divEl);

// AFTER
section1.after(divEl);

// REMOVE
const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => {
  divEl.remove();
});

// CHANGE IMAGE SRC AND ALT DYNAMICALLY ON BUTTON CLICK
const btn2 = document.querySelector(".btn2");
const myImage = document.querySelector(".myImage");

const imageArr = [
  "https://images.pexels.com/photos/13449836/pexels-photo-13449836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

btn2.addEventListener("click", () => {
  let randomNum = Math.trunc(Math.random() * 5);
  myImage.src = imageArr[randomNum];
  myImage.alt = "Something";
});
