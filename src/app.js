import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import {
  WELCOME_PAGE_INPUT,
  POINTS_ID,
  ANSWERS_LIST_ID,
  ALERT_IF_ANSWERED,
  SKIP_BUTTON_ID,
  NEXT_QUESTION_BUTTON_ID,
  ALERT_IF_SKIP,
} from './constants.js';
import { initQuestionPage } from './pages/questionPage.js';
import { playerName } from './pages/welcomePage.js';
import { points } from './pages/questionPage.js';

export const SS = sessionStorage;
export const LS = localStorage;
export let userName = {};
export let userPoints = {};
export let userCurrentQuestion = {};

export const save = () => {
  const winnersData = {
    name: SS.getItem('userName'),
    score: SS.getItem('userPoints'),
  };
  LS.setItem(LS.length + 1, JSON.stringify(winnersData));
};

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();

  const name = document.getElementById(WELCOME_PAGE_INPUT);

  name.addEventListener('input', function (event) {
    userName = event.target.value;
    SS.setItem('userName', userName);
  });

  if (SS.getItem('userName')) {
    userName = SS.getItem('userName');
    name.value = userName;
    playerName[0] = userName;
  }

  if (SS.getItem('userCurrentQuestion')) {
    userCurrentQuestion = JSON.parse(SS.getItem('userCurrentQuestion'));
    quizData.currentQuestionIndex = userCurrentQuestion;
    initQuestionPage();
  }

  if (SS.getItem('alreadyAnswered') === 'false') {
    if (SS.getItem('userPoints')) {
      dataSaver();
    }
  }
  if (SS.getItem('alreadyAnswered') === 'true') {
    if (SS.getItem('userPoints')) {
      dataSaver();
      document.getElementById(ALERT_IF_ANSWERED).style.display = 'block';
      document.getElementById(SKIP_BUTTON_ID).disabled = 'true';
      buttonDisable();
      hideButton();
    }
  }
  if (SS.getItem('alreadyAnswered') === 'skip') {
    if (SS.getItem('userPoints')) {
      document.getElementById(ALERT_IF_SKIP).style.display = 'block';
      buttonDisable();
      hideButton();
      dataSaver();
    }
  }
};

window.addEventListener('load', loadApp);

const dataSaver = () => {
  userPoints = SS.getItem('userPoints');
  points.points = userPoints;
  document.getElementById(POINTS_ID).textContent = `${points.points}`;
};

const buttonDisable = () => {
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  for (let item of answersListElement.children) {
    item.style.pointerEvents = 'none';
  }
};

const hideButton = () => {
  const showAnswerButton = document.getElementById(SKIP_BUTTON_ID);
  showAnswerButton.style.display = 'none';
  const nextQuestionButton = document.getElementsByClassName('navigation');
  Array.from(nextQuestionButton).forEach(
    (element) => (element.style.justifyContent = 'center')
  );
};
