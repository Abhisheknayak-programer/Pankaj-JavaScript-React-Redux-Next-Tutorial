// SELECTIONS IN HTML
// TYPES OF SELECTIONS IN JS
// 1.querySelector
// 2.getElementById
// 3.getElementsByClassName
// 4.getElementsByTagName
// 5.querySelectorAll

// querySelector
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const uniqueBox = document.querySelector("#uniqueBox");
const btn = document.querySelector(".btn");
console.log(box1);
console.log(box2);
console.log(uniqueBox);
console.log(btn);

// getElementsByTagName & getElementById
const newBox1 = document.getElementsByClassName("box1");
const newBox2 = document.getElementsByClassName("box2");
const newUniqueBox = document.getElementById("uniqueBox");
const btn2 = document.getElementsByClassName("btn");

console.log(newBox1);
console.log(newBox2);
console.log(newUniqueBox);
console.log(btn2);

// getElementsByTagName
const btn3 = document.getElementsByTagName("button");
console.log(btn3);

// querySelectorAll
const spanArr = document.querySelectorAll(".myspan");
console.log(spanArr);

spanArr.forEach((el, ind, arr) => {
  el.textContent = `${ind}`;
  el.style.background = "#888";
  el.style.padding = "10px";
  el.style.borderRadius = "10px";
  el.style.marginLeft = "15px";
});

// EVENT LISTENERS
// [EVENTS] :  Add, Remove, Toggle, Contains
btn.addEventListener("click", () => {
  console.log("Abhishek");
});

// CLASSLIST IN JAVASCRIPT
btn.addEventListener("click", () => {
  box1.classList.add("active1");
  box2.classList.add("active2");
});

// INSERTING ADJACENT HTML DYNAMICALLY IN A WEBPAGE
// afterbegin	After the beginning of the element (first child)
// afterend	After the element
// beforebegin	Before the element
// beforeend	Before the end of the element (last child)

// SYNTAX : element.insertAdjacentHTML(position, html);

const html = `<div class="box1">
                    <h1>My Heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, laudantium? Maxime officiis officia cupiditate
                        dolore id istemmodi, rem odio nam doloremque saepe consequatur, aperiam sapiente laudantium
                        aliquam distinctio debitis.</p>
                    <button>Click Me 2</button>
              </div>`;

btn.addEventListener("click", () => {
  box2.insertAdjacentHTML("afterend", html);
});

// DYNAMICALLY CHANGING THE STYLES
const box3 = document.querySelector(".box3");
const btn5 = document.querySelector(".btn2");

btn5.addEventListener("click", () => {
  box3.style.background = "black";
  box3.style.color = "white";
  box3.style.fontSize = "40px";
  box3.style.height = "auto";
  // box3.style.overflow = "scroll";
  box3.textContent = "I am Abhishek Nayak, A Web Coder";
  box3.innerHTML = `<p>"I am Abhishek Nayak, A Web Coder"</p>
  <p>5 Star Coder at Leetcode and Lv.4 Coder at Coding Nijas</p>
    <button>Naya Button</button>`;
});
