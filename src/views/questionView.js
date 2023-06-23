import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  TIMER_ID,
  POINTS_ID,
  SKIP_BUTTON_ID,
  ALERT_IF_ANSWERED,
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

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>
    <div>
      <span id='${TIMER_ID}'>${timer}</span>
    </div>
    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
    <button id="${SKIP_BUTTON_ID}">
      Skip
    </button>
    
  `;
  const score = document.createElement('p');
  score.innerHTML = `${playerName[0]}, your score is <span id ="${POINTS_ID}">${points.points}</span>`;
  element.appendChild(score);

  const alertIfAnswered = document.createElement('p');
  alertIfAnswered.innerHTML = `You already answered this question`;
  alertIfAnswered.style.display = 'none';
  alertIfAnswered.id = ALERT_IF_ANSWERED;
  element.appendChild(alertIfAnswered);

  const intervalID = setInterval(() => {
    if (timer === 0) {
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
