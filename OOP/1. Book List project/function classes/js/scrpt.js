function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {}

UI.prototype.addBookToList = function (book) {
    const bookList = document.querySelector('.book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    bookList.appendChild(row);
}

UI.prototype.showAlert = function (message, className) {
    const div = document.createElement('div');

    div.className = `alert ${className}`;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const form = document.querySelector('.book-form');

    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.deleteBook = function (target) {
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
        const ui = new UI();
        ui.showAlert('Book removed', 'success')
    }
}

UI.prototype.clearFields = function () {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
}

function LocalStorage() {}

LocalStorage.prototype.getBooks = function (){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    }else{
        books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
}

LocalStorage.prototype.displayBooks = function (){
    const books = new LocalStorage().getBooks();

    books.forEach(book => {
        const ui = new UI();

        ui.addBookToList(book);
    })
}

LocalStorage.prototype.addBookToLocalStorage = function (book) {
    const books = new LocalStorage().getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
}

LocalStorage.prototype.deleteBookFromLocalStorage = function (isbn){
    const books = new LocalStorage().getBooks();

    books.forEach((book, index) => {
       if(book.isbn === isbn){
           books.splice(index, 1);
       }
    });

    localStorage.setItem('books', JSON.stringify(books));
}

document.addEventListener('DOMContentLoaded', function () {
    new LocalStorage().displayBooks();
})


document.querySelector('.book-form').addEventListener('submit', function (e) {
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new UI();

    if(title === '' || author === '' || isbn === ''){
        ui.showAlert('Please fill in all fields', 'error')
    }else{
        ui.addBookToList(book)

        new LocalStorage().addBookToLocalStorage(book);

        ui.showAlert('Book added', 'success');

        ui.clearFields();
    }

    e.preventDefault();
})

document.querySelector('.book-list').addEventListener('click', function (e) {
    const ui = new UI();

    new LocalStorage().deleteBookFromLocalStorage(e.target.parentElement.previousElementSibling.textContent);

    ui.deleteBook(e.target);

    e.preventDefault();
})