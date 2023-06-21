/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  const optionButton = document.createElement('button');
  optionButton.type = 'button';
  optionButton.id = key;
  optionButton.innerHTML = String.raw`${key} : ${answerText}`;
  element.appendChild(optionButton);

  return element;
};
