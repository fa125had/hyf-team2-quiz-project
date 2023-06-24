import { START_QUIZ_BUTTON_ID } from '../constants.js';
import { WELCOME_PAGE_PARAGRAPH_ID } from '../constants.js';
import { WELCOME_TITLE_ID } from '../constants.js';
import { WELCOME_PAGE_ELEMENT } from '../constants.js';
import { WELCOME_PAGE_INPUT } from '../constants.js';
import { WELCOME_PAGE_COVER_ID } from '../constants.js';
/**
 * Create the welcome screen
 * @returns {Element}
 */

export const createWelcomePageCover = () => {
  const cover = document.createElement('div');
  cover.id = `${WELCOME_PAGE_COVER_ID}`;

  return cover;
};

export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.id = `${WELCOME_PAGE_ELEMENT}`;
  element.innerHTML = String.raw`
    <h1 id="${WELCOME_TITLE_ID}">Test Your Art Knowledge!</h1>
    <p id="${WELCOME_PAGE_PARAGRAPH_ID}">Welcome to our Quiz App, where you can put your art expertise to the test!<br /><span>Are you up for the challenge?</span></p>
    <input type="text" id="${WELCOME_PAGE_INPUT}" name="name" required placeholder="Enter Your Name">
    <button id="${START_QUIZ_BUTTON_ID}">Start Quiz</button>
  `;
  return element;
};
