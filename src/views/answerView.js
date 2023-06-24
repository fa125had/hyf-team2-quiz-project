/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.classList.add('answer-container');
  const optionButton = document.createElement('button');
  optionButton.type = 'button';
  optionButton.classList.add('answer-btn');
  optionButton.id = key;
  optionButton.innerHTML = String.raw`${key} : ${answerText}`;
  element.appendChild(optionButton);

  return element;
};
