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
    <h1 id="${WELCOME_TITLE_ID}">Welcome</h1>
    <p id="${WELCOME_PAGE_PARAGRAPH_ID}">Take this quick 10-question quiz to find out ...!</p>
    <input type="text" id="${WELCOME_PAGE_INPUT}" name="name" required placeholder="Enter your Name">
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};
