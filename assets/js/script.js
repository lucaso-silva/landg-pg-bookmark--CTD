import showMenu from "./showMenu.js";
import removeMenu from "./removeMenu.js";
import showCard from "./showCard.js";

const menuHamburger = document.querySelector(".menu-hamburger");
const featureSelection = document.querySelectorAll(".content-title");
// console.log(featureSelection)

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

featureSelection.forEach(feature => {
    feature.addEventListener("click", ()=>{
        let indexFeature = feature.id;
        showCard(indexFeature);
    });
});
// featureSelection.forEach(feature => {
//     feature.addEventListener("click", ()=> {
//         console.log(feature);
//     });
// })

