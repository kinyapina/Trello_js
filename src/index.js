import './style.css';

const list = document.querySelectorAll('.list');
const titles = document.querySelectorAll('.list-header');
const listCards = document.querySelectorAll('.list-cards');
const listCard = document.querySelectorAll('.list-card');

const btn = document.querySelectorAll('.add-btn');
const addCardBtn = document.querySelector('.add-card-btn');
const cancelCardBtn = document.querySelector('.cancel-card-btn');
const textarea = document.querySelector('.textarea');
const form = document.querySelector('.form');


let draggedCard = null;
let value;

function addCardToList() {
  btn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      form.style.display = 'block';
      btn.style.display = 'none';
      addCardBtn.style.display = 'none';
    
      textarea.addEventListener('input', (e) => {
        value = e.target.value;
    
        if (value) {
          addCardBtn.style.display = 'block';
        } else {
          addCardBtn.style.display = 'none';
        }
      });
    });
  });
};

addCardToList();

export function clearCard() {
  textarea.value = '';
  value = '';
  form.style.display = 'none';
  btn.style.display = 'block';
}

cancelCardBtn.addEventListener('click', () => {
  clearCard();
});

addCardBtn.addEventListener('click', (e) => {
  const newCard = document.createElement('li');
  newCard.classList.add('list-card');
  newCard.draggable = true;
  newCard.textContent = value;
  listCards[0].appendChild(newCard);

  dragAndDrop();
  clearCard();
});

function changeTitleCardList() {
  titles.forEach(title => {
    title.addEventListener('click', e => e.target.textContent = '');
  });
};


changeTitleCardList();

function dragAndDrop() {
  for (let i = 0; i < listCard.length; i++) {
    const card = listCard[i];

    card.addEventListener('dragstart', () => {
      draggedCard = card;
      setTimeout(() => {
        card.style.display = 'none';
      }, 0);
    });

    card.addEventListener('dragend', () => {
      setTimeout(() => {
        card.style.display = 'block';
        draggedCard = null;
      }, 0);
    });

    card.addEventListener('dblclick', () => {
      console.log('dblclick');
      card.remove();
    });

    for (let j = 0; j < listCards.length; j++) {
      const list = listCards[j];

      list.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      list.addEventListener('dragenter', function(e) {
        e.preventDefault();
        this.style.backgroundColor = 'rgba(0,0,0,0.3)';
      });

      list.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.style.backgroundColor = 'rgba(0,0,0,0)';
        this.style.borderRadius = '5px';
      });

      list.addEventListener('drop', function(e) {
        console.log('drop');
        e.preventDefault();
        this.style.backgroundColor = 'rgba(0,0,0,0)';
        this.appendChild(draggedCard);        
      });
    };
  };
};

dragAndDrop();