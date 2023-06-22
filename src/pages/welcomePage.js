import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  WELCOME_PAGE_INPUT,
} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { createWelcomePageCover } from '../views/welcomeView.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  const welcomeCover = createWelcomePageCover();
  document.body.appendChild(welcomeCover);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', getName);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const getName = () => {
  const inputValue = document.getElementById(WELCOME_PAGE_INPUT).value;
  return inputValue;
};

// Need to do - stop loading if input is empty

const startQuiz = () => {
  initQuestionPage();
};
