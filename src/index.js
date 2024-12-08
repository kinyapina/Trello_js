import './style.css';

const list = document.querySelectorAll('.list');

console.log(list);

const listCards = document.querySelector('.list-cards');
const listFooter = document.querySelector('.list-footer');

let actualCard;

const onMouseOver = (e) => {
  console.log(e);

  actualCard.style.top = e.clientY  + 'px';
  actualCard.style.left = e.clientX  + 'px';
};

const onMouseUp = (e) => {
  const mouseUpCard = e.target;
  console.log(mouseUpCard);

  list.insertBefore(actualCard, mouseUpCard);

  actualCard.classList.remove('dragged');

  document.documentElement.removeEventListener('mouseup', onMouseUp);
  document.documentElement.removeEventListener('mouseover', onMouseOver);
}

list.addEventListener('mousedown', (e) => {
  e.preventDefault();
  actualCard = e.target;

})



/* listFooter.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click');
}) */
