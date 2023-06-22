import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SKIP_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  // add images
  const currentImage = quizData.questions[quizData.currentQuestionIndex].image;

  const imageElement = document.createElement('img');
  imageElement.setAttribute('src', currentImage);

  questionElement.appendChild(imageElement);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

    answerElement.addEventListener('click', () => {
      const buttonColor = document.getElementById(key);
      if (key == currentQuestion.correct) {
        buttonColor.style.backgroundColor = 'green';
      } else {
        buttonColor.style.backgroundColor = 'red';
        const correctAnswer = document.getElementById(currentQuestion.correct);
        correctAnswer.style.backgroundColor = 'green';
      }
 
      for (let item of answersListElement.children) {
        item.style.pointerEvents = 'none';
      }
    });
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
    .getElementById(SKIP_BUTTON_ID)
    .addEventListener('click', () => {

    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
    const correctAnswer = document.getElementById(currentQuestion.correct);
    correctAnswer.style.backgroundColor = 'green';

    setTimeout(nextQuestion, 2000);

      for (let item of answersListElement.children) {
        item.style.pointerEvents = 'none';
      }
    });  
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
