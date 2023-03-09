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

function createBook(title, author, pages, read) {
  const markup = `<div class="book-display is-not-read">
  <p class="book-title">${title}</p>
  <p class="book-author">${author}</p>
  <p class="book pages">${pages} pages</p>
  <div class="buttons">
    <button class="read book-btn">Read</button>
    <button class="remove book-btn">Remove</button>
  </div>
</div>`;

  libraryDisplay.appendChild(markup);
}

addBookBtn.addEventListener('click', showModal);
container.addEventListener('click', (e) => {
  if (
    !newBookForm.classList.contains('hidden') &&
    !e.target.classList.contains('add-book')
  )
    hideModal();
});

const books = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
