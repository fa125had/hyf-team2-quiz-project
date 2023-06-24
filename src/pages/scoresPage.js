import { quizData } from '../data.js';
import {
  SKIP_BUTTON_ID,
  NEXT_QUESTION_BUTTON_ID,
  ANSWERS_LIST_ID,
  USER_INTERFACE_ID,
  SCORE_TABLE,
} from '../constants.js';
import { createScoresElement } from '../views/scoresView.js';
import { scoreTable } from '../views/scoresView.js';
import { winner } from '../views/scoresView.js';
import { LS } from '../app.js';

export const createScoresPage = () => {
  const buttons = document.querySelectorAll('button');

  Array.from(buttons).forEach((element) =>
    element.addEventListener('click', initScoresPage)
  );
};

const initScoresPage = () => {
  createScoresPage();
  const scorePage = createScoresElement();
  const questionView = document.getElementById('question-element');
  questionView.style.display = 'none';

  document.getElementById(USER_INTERFACE_ID).appendChild(scorePage);

  // const winnersTable = scoreTable();
  // document.getElementById(USER_INTERFACE_ID).appendChild(winnersTable);

  // const winnerItem = winner();
  // document.getElementById(SCORE_TABLE).appendChild(winnerItem);
};
