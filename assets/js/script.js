import showMenu from "./showMenu.js";
import removeMenu from "./removeMenu.js";

const menuHamburger = document.querySelector(".menu-hamburger");
let i = 0;

menuHamburger.addEventListener("click", () => {
    if(i == 0) {
        showMenu();
        i = 1;
    } else {
        removeMenu();
        i = 0;
    } 
});