export default function showMenu() {
    const menu = document.querySelector(".menu");
    const menuLi = document.querySelectorAll(".li-menu");
    const menuLogin = document.querySelectorAll(".menu-link");
    const login = menuLogin[menuLogin.length - 1];
   
    menu.classList.add("menu-mobile");
    menuLi.forEach(li => li.classList.add("li-menu-mobile"));
    login.classList.add("menu-link-mobile");
}