import {
  SCORES_PAGE_ELEMENT,
  FINALE_SCORE,
  FINALE_GREET,
  POINTS_ID,
  SCORE_TABLE,
  RESULTS,
} from '../constants.js';
import { playerName } from '../pages/welcomePage.js';
import { points } from '../pages/questionPage.js';

export const createScoresElement = () => {
  const element = document.createElement('div');
  element.id = `${SCORES_PAGE_ELEMENT}`;
  element.innerHTML = String.raw`
  <h1 id="${FINALE_GREET}">Congratulations!</h1>
  <p id="${FINALE_SCORE}">${playerName[0]}, your score is <span id ="${POINTS_ID}">${points.points}</span></p>
  `;

  return element;
};

export const scoreTable = () => {
  const element = document.createElement('div');
  element.id = `${SCORE_TABLE}`;
  element.innerHTML = String.raw`
  <h2>Scores table<h2>
  <table id"${RESULTS}">
  <tr>
    <td>#</td>
    <td>Name</td>
    <td>Score</td>
  </tr>
  </table>
  `;

  return element;
};

export const winner = () => {
  const element = document.createElement('tr');
  element.innerHTML = String.raw`
  <td id="">#</td>
  <td id="">Name</td>
  <td id="">Score</td>
  `;

  return element;
};
