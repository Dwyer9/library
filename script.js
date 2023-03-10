const addBookBtn = document.querySelector('.add-book');
const container = document.querySelector('.container');
const newBookForm = document.querySelector('.new-book');
const header = document.querySelector('.header');
const libraryDisplay = document.querySelector('.library-display');

function showModal() {
  container.classList.add('is-blurred');
  newBookForm.classList.remove('hidden');
}

function hideModal() {
  container.classList.remove('is-blurred');
  newBookForm.classList.add('hidden');
}

function renderBook(title, author, pages, read) {
  const markup = `<div class="book-display ${read ? 'is-read' : 'is-not-read'}">
  <p class="book-title">${title}</p>
  <p class="book-author">${author}</p>
  <p class="book pages">${pages} pages</p>
  <div class="buttons">
    <button class="read book-btn">Read</button>
    <button class="remove book-btn">Remove</button>
  </div>
</div>`;

  libraryDisplay.insertAdjacentHTML('afterbegin', markup);
}

addBookBtn.addEventListener('click', showModal);
container.addEventListener('click', (e) => {
  if (
    !newBookForm.classList.contains('hidden') &&
    !e.target.classList.contains('add-book')
  )
    hideModal();
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('read')) {
    const target = e.target.closest('.book-display');
    if (target.classList.contains('is-not-read')) {
      target.classList.remove('is-not-read');
      target.classList.add('is-read');
    } else {
      target.classList.add('is-not-read');
      target.classList.remove('is-read');
    }
  } else return;
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const target = e.target.closest('.book-display');
    if (confirm('Are you sure you want to remove this book?')) {
      target.remove();
    } else return;
  } else return;
});

const books = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
