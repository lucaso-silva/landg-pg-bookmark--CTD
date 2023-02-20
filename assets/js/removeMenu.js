export default function removeMenu() {

    const menuMobile = document.querySelector(".menu-mobile");
    const menuLi = document.querySelectorAll(".li-menu-mobile");
   
    menuMobile.classList.remove("menu-mobile");
    menuLi.forEach(li => li.classList.remove("li-menu-mobile"));
}