/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  let isSelected = false;

  const handleClick = ({ target }) => {
    const selectedElement = document.querySelector('.selected');
    if (selectedElement) {
      selectedElement.classList.remove('selected');
      selectedElement.style.backgroundColor = 'transparent';
    }
    target.style.backgroundColor = '#fff';
    target.classList.add('selected');
  };

  element.addEventListener('click', handleClick);

  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};
