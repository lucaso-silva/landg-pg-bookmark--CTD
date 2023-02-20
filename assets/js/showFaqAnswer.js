export default function showFaqAnswer(indexQuestion) {
  const answersHidden = document.querySelectorAll(".faq-answer");
  const answerSelected = answersHidden[indexQuestion];

  answersHidden.forEach((answer) => {
    if (answer == answerSelected) {
      answer.classList.remove("faq-answer-hidden");
    } else {
      answer.classList.add("faq-answer-hidden");
    }
  });
}
