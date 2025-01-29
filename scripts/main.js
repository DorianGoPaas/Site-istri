// main.js
const burgerMenu = document.getElementById("burger-menu");
const navbar = document.getElementById("navbar");

burgerMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".partners-scroll");
    const clones = scrollContainer.innerHTML;
    scrollContainer.innerHTML += clones; 
});
