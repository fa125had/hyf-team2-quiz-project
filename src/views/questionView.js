import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  TIMER_ID,
  POINTS_ID,
  SKIP_BUTTON_ID,
  ALERT_IF_ANSWERED,
  ALERT_IF_SKIP,
} from '../constants.js';
import { playerName } from '../pages/welcomePage.js';
import { points } from '../pages/questionPage.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question, correctAnswer) => {
  const element = document.createElement('div');
  // Set timer in Second
  let timer = 10;

  console.log(points.points);
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <div class='question-data'>
    <h1 class='question-header'>${question}</h1>
    <ul class='answers-container' id="${ANSWERS_LIST_ID}">
    </ul>
    <div class='timer-container'>
      <span id='${TIMER_ID}'>${timer}</span>
      <span class='alert-container'>
      <p id=${ALERT_IF_ANSWERED} style='display: none'>You already answered this question</p>
      <p id=${ALERT_IF_SKIP} style='display: none'>You already skip this question</p>
    </span>

    </div>

    <div class='navigation'>
      <button id="${NEXT_QUESTION_BUTTON_ID}">
        Next question
      </button>
      <button id="${SKIP_BUTTON_ID}">
        Show Answer
      </button>
    </div>
    <p class="user-score">${playerName[0]}, your score: <span id='${POINTS_ID}'>${points.points}</span></p>
    </div>
  `;

  const intervalID = setInterval(() => {
    if (timer === 0) {
      document.getElementById(NEXT_QUESTION_BUTTON_ID).disabled = false;
      // Remove the timer from screen
      clearInterval(intervalID);
      document.getElementById('timer').style.display = 'none';

      // Show the correct answer
      const correctAnswerElement = document.getElementById(correctAnswer);
      correctAnswerElement.style.backgroundColor = 'green';

      // Disable click events for other answer elements
      const answers = document.getElementById(ANSWERS_LIST_ID);
      for (const answer of answers.children) {
        answer.style.pointerEvents = 'none';
      }
    } else {
      timer--;
      document.getElementById('timer').textContent = timer;
    }
  }, 1000);
  element.intervalID = intervalID;
  return element;
};
