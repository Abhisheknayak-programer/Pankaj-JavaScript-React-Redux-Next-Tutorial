// ABSOLUTE PATH
const image = document.querySelector(".image");
console.log(image.src); // Absolute Path
// HTTP : Hyper Text Transform Protocol
// HTTPS : Hyper Text Transform Protocol Secure

// RELATIVE PATH
console.log(image.getAttribute("src"));

// GET ATTRIBUTE
const p = document.querySelector(".pankajClass");
console.log(p.getAttribute("pankaj"));
console.log(p.getAttribute("href"));

// SET ATTRIBUTE
const a = document.querySelector(".a");
console.log(a.getAttribute("id"));
a.id = "Simple text";
console.log(a.getAttribute("id"));

// DATA ATTRIBUTE
console.log(a.dataset.kuchbhi);

// DOM (DOCUMENT OBJECT MODAL) TRAVERSING
const box = document.querySelector(".box");
const name = document.querySelector(".name");
const title = document.querySelector(".title");
const work = document.querySelector(".work");
const desc = document.querySelector(".desc");

console.log(box.childNodes); // Used to check Children of a particular tag (Along with empty spaces and text)
console.log(box.children); // Used to check Children of a particular tag
console.log(name.children);
console.log(title.children);
box.firstElementChild.style.color = "red";
box.lastElementChild.style.color = "blue";

console.log(work.parentNode);
console.log(work.parentNode.parentElement);
console.log(work.parentNode.parentElement.parentNode);
console.log(work.parentNode.parentElement.parentNode.parentNode);
console.log(work.parentNode.parentElement.parentNode.parentNode.parentNode);
console.log(
  work.parentNode.parentElement.parentNode.parentNode.parentNode.parentNode
);
console.log(
  work.parentNode.parentElement.parentNode.parentNode.parentNode.parentNode
    .parentNode
);

console.log(name.nextElementSibling);
console.log(desc.previousElementSibling);

// ALERT
const btn1 = document.querySelector(".btn1");

const myMessage = (name) => {
  alert(`Hello ${name} Sir! How Are You :)`);
};

// PROMPT IN JAVASCRIPT
btn1.addEventListener("click", () => {
  const nam = prompt("Enter your name : ");
  console.log(nam);
  myMessage(nam);
});
