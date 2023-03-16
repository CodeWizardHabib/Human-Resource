
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const heading = document.querySelector(".hero-text-box");
const main=document.querySelector(".main");

hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
  heading.classList.toggle("heading-move-down");
  main.classList.toggle("main-move-down");
});
