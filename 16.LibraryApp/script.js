let myLibrary = [];
const libraryDiv = document.querySelector('div.library');

class Book {
    constructor(title, author, pages, read) {
        this.id = myLibrary.length + 1;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info = function () {
        console.log(`${this.title} by ${author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`);
    }
}

addBookToLibrary("WHERE THE CRAWDADS SING", "Delia Owens", "333", false);
addBookToLibrary("IT ENDS WITH US", "Colleen Hoover", "666", false);
addBookToLibrary("I'M GLAD MY MOM DIED", "Jennette McCurdy", "333", false);
addBookToLibrary("THE BODY KEEPS THE SCORE", "Bessel van der Kolk", "333", true);

function visualizeBook(book) {
    libraryDiv.innerHTML +=
        `<div class="book-card" id="book${book.id}">
        <h3 class="title">${book.title}</h3>
        <div>
        <div class="element">${book.author}</div>
        <div class="element">${book.pages}</div>
        <button class="${book.read ? "read" : "not-read"}" onclick="onClickDelete()></button>
        </div>
        <div class="buttons">
        <button type="button" class="delete-book" onclick="onClickDelete(${book.id})">Delete</button>
        </div>
    </div>`;
}


function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(new Book(title, author, pages, read));
    visualizeBook(book);
}

function onClickAddNew() {
    let newBookForm = document.querySelector('form.new-book-form');
    if (!(newBookForm.style.display !== 'none')) {
        newBookForm.style.display = 'grid';
    } else {
        let formElements = document.querySelector('form.new-book-form').elements;
        newBookForm.style.display = 'none'
        addBookToLibrary(formElements.title.value, formElements.author.value, formElements.pages.value, formElements.isRead.checked);
    }
}

function onClickDelete(id) {
    debugger;
    myLibrary = myLibrary.filter(book => book.id !== id);
    document.getElementById(`book${id}`).remove();
}