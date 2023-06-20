/**
 * Create an Answer element
 * @returns {Element}
 */
import { quizData } from '../data.js';

export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  let isSelected = false;

  const handleClick = ({ target }) => {
    const selectedElement = document.querySelector('.selected');
    const correctAnswer =
      quizData.questions[quizData.currentQuestionIndex].correct;

    if (selectedElement) {
      selectedElement.classList.remove('selected');
      selectedElement.style.backgroundColor = 'transparent';
    }
    if (key === correctAnswer) {
      target.style.backgroundColor = 'green';
    } else {
      target.style.backgroundColor = 'red';
    }
    target.classList.add('selected');
  };

  element.addEventListener('click', (event) => {
    handleClick(event);
  });

  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};
