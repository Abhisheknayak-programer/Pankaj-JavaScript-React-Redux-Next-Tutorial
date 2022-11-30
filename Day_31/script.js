// NAVIGATION FUNCTIONALITY
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav__links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("navBarActive");
  burger.classList.toggle("toggle");
});

