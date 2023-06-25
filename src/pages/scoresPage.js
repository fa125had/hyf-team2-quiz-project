import { USER_INTERFACE_ID, RESULTS } from '../constants.js';
import { createScoresElement } from '../views/scoresView.js';
import { scoreTable } from '../views/scoresView.js';
import { winner } from '../views/scoresView.js';
import { LS } from '../app.js';
import { SS } from '../app.js';
import { save } from '../app.js';

export const createScoresPage = () => {
  const buttons = document.querySelectorAll('button');

  Array.from(buttons).forEach((element) =>
    element.addEventListener('click', initScoresPage)
  );
};

const initScoresPage = () => {
  createScoresPage();
  const scorePage = createScoresElement();
  save();
  const questionView = document.getElementById('question-element');
  questionView.style.display = 'none';

  document.getElementById(USER_INTERFACE_ID).appendChild(scorePage);

  const winnersTable = scoreTable();
  document.getElementById(USER_INTERFACE_ID).appendChild(winnersTable);

  const tableRow = LS.length;
  for (let i = 1; i < tableRow + 1; i++) {
    const winnerItem = winner(i);
    document.getElementById(RESULTS).appendChild(winnerItem);
  }
  SS.clear();
};
