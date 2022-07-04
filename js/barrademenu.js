document.querySelector(".bars__menu").addEventListener("click", animateBars);

let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
let container__menu = document.querySelector(".navigation");

function animateBars() {
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
}

const toggle = document.querySelector(".bars__menu");
const menuVisible = document.querySelector(".barra-navigation");

toggle.addEventListener("click", () => {
  menuVisible.classList.toggle("lef_navigation");
});