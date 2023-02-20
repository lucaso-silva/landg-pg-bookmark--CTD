import showMenu from "./showMenu.js";
import removeMenu from "./removeMenu.js";
import showCard from "./showCard.js";
import showFaqAnswer from "./showFaqAnswer.js";
import inputValidation from "./inputValidation.js";

const menuHamburger = document.querySelector(".menu-hamburger");
const featureSelection = document.querySelectorAll(".content-title");
const arrowsAnswer = document.querySelectorAll(".arrow");
const questions = document.querySelectorAll(".faq-title");
const formInput = document.querySelector(".form-input");

let i = 0;

menuHamburger.addEventListener("click", () => {
  if (i == 0) {
    showMenu();
    i = 1;
  } else {
    removeMenu();
    i = 0;
  }
});

featureSelection.forEach((feature) => {
  feature.addEventListener("click", () => {
    let indexFeature = feature.id;
    showCard(indexFeature);
  });
});

arrowsAnswer.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    let indexQuestion = arrow.id;
    showFaqAnswer(indexQuestion);
  });
});

questions.forEach((question) => {
  question.addEventListener("click", () => {
    let indexQuestion = question.id;
    showFaqAnswer(indexQuestion);
  });
});

formInput.addEventListener("blur", inputValidation);