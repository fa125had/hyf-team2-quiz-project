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
import { LS } from '../app.js';

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
  <h2>Scores table</h2>
  <table id="${RESULTS}">
  <tr>
    <td>#</td>
    <td>Name</td>
    <td>Score</td>
  </tr>
  </table>
  `;

  return element;
};

export const winner = (i) => {
  const winnerName = JSON.parse(LS.getItem(i)).name;
  const winnerScore = JSON.parse(LS.getItem(i)).score;

  const element = document.createElement('tr');
  element.innerHTML = String.raw`
  <td>${i}</td>
  <td>${winnerName}</td>
  <td>${winnerScore}</td>
  `;
  return element;
};
