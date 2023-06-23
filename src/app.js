import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { WELCOME_PAGE_INPUT, POINTS_ID, ANSWERS_LIST_ID } from './constants.js';
import { initQuestionPage } from './pages/questionPage.js';
import { playerName } from './pages/welcomePage.js';
import { points } from './pages/questionPage.js';

export const LS = localStorage;
export let userName = {};
export let userPoints = {};
export let userCurrentQuestion = {};

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();

  const name = document.getElementById(WELCOME_PAGE_INPUT);

  name.addEventListener('input', function (event) {
    userName = event.target.value;
    LS.setItem('userName', JSON.stringify(userName));
  });

  if (LS.getItem('userName')) {
    userName = JSON.parse(LS.getItem('userName'));
    name.value = userName;
    playerName[0] = userName;
  }

  if (LS.getItem('userCurrentQuestion')) {
    userCurrentQuestion = JSON.parse(LS.getItem('userCurrentQuestion'));
    quizData.currentQuestionIndex = userCurrentQuestion;
    initQuestionPage();
  }

  if (LS.getItem('alreadyAnswered') === 'false') {
    if (LS.getItem('userPoints')) {
      userPoints = JSON.parse(LS.getItem('userPoints'));
      points.points = userPoints;
      document.getElementById(POINTS_ID).textContent = `${points.points}`;
    }
  }
  if (LS.getItem('alreadyAnswered') === 'true') {
    if (LS.getItem('userPoints')) {
      userPoints = JSON.parse(LS.getItem('userPoints'));
      points.points = userPoints;
      document.getElementById(POINTS_ID).textContent = `${points.points}`;
    }
    const answersListElement = document.getElementById(ANSWERS_LIST_ID);
    for (let item of answersListElement.children) {
      item.style.pointerEvents = 'none';
    }
  }
};

window.addEventListener('load', loadApp);
