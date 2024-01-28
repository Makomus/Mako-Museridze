document.addEventListener("DOMContentLoaded", function () {
  const faqEntities = document.querySelectorAll(".faq-entity");
  
  faqEntities.forEach((faqEntity) => {
    const toggleButton = faqEntity.querySelector(".faq-toggle");
    const faqAnswers = faqEntity.querySelector(".faq-answer-holder");
    const targetId = toggleButton.dataset.target;
    const questionElement = document.getElementById(targetId);
    const answerContent = faqAnswers.querySelector("#"+targetId);
 
    [toggleButton, questionElement].forEach((element) => {
      element.addEventListener("click", () => {
        
        const allAnswers = document.querySelectorAll(".faq-answer");
        allAnswers.forEach((answer) => {
          if (answer !== answerContent) {
            answer.classList.remove("active");
          }
        });

        const allArrows = document.querySelectorAll(".faq-toggle")
        allArrows.forEach((arrow) => {
          if (arrow !== toggleButton) {
            arrow.classList.remove("active");
          }
        });

        answerContent.classList.toggle("active");
        toggleButton.classList.toggle("active");
       
      });
    });
  });
});







