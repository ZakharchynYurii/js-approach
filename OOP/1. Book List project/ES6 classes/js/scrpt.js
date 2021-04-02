class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static addBookToList(book){
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

    static removeBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
            UI.showFields('Book removed', 'success');
        }
    }

    static showFields(message, className){
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

    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

class LocalStorage {
    static getBooksFromLocalStorage(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooksFromLocalStorage(){
        let books = LocalStorage.getBooksFromLocalStorage();

        books.forEach(book => {
            UI.addBookToList(book);
        });
    }

    static addBookToLocalStorage(book){
        let books = LocalStorage.getBooksFromLocalStorage();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBookFromLocalStorage(isbn){
        let books = LocalStorage.getBooksFromLocalStorage();

        books.forEach((book, index) => {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        })

        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', LocalStorage.displayBooksFromLocalStorage);

document.querySelector('.book-form').addEventListener('submit', function (e) {
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn);

    if(title === '' || author === '' || isbn === ''){
        UI.showFields('Please fill in all fields', 'error')
    }else{
        UI.addBookToList(book)

        LocalStorage.addBookToLocalStorage(book);

        UI.showFields('Book added', 'success');

        UI.clearFields();
    }

    e.preventDefault();
});

document.querySelector('.book-list').addEventListener('click', function (e) {
    UI.removeBook(e.target);

    LocalStorage.removeBookFromLocalStorage(e.target.parentElement.previousElementSibling.textContent);

    e.preventDefault();
})