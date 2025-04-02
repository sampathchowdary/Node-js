

class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }

    toString() {
        return `Title : ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
}

class User {
    constructor(name, userId){
        this.name = name;
        this.userId = userId;
        this.issueBooks = [];
    }

    issueBook(book){
        if(book.isIssued){
            console.log("Book is already issued");
        } else {
            book.isIssued = true;
            this.issueBooks.push(book);
            console.log('book issued '+ book.title);
        }
    }

    returnBook(book){
        if(book.isIssued){ // NEED TO BE UPDATE TO CHEKC FOR USER - NOT FOR BOOK
            book.isIssued = false;
            this.issueBooks.splice(this.issueBooks.indexOf(book), 1);
        } else {
            console.log('book not issued');
        }
    }
}

class Library {
    constructor(){
        this.books = [];
        this.users = [];
    }

    addBook(book){
        this.books.push(book);

    }

    registerUser(user){
        this.users.push(user);
    }

    displayBooks(){
        if(this.books.length === 0){
            console.log('No books in the library');
        } else {
            this.books.forEach(book => {
                const status = book.isIssued ? 'Issued' : 'Available';
                console.log(`Title: ${book.title}, Author: ${book.author}, Status: ${status}`)
            });
        }

    }
}

const library = new Library();

const b1 = new Book('111', 'Sam', '98989898');
const b2 = new Book('222', 'pop', '000000000');

library.addBook(b1);

library.displayBooks();
console.log('before book 2');
library.addBook(b2);

library.displayBooks();

const u1 = new User('Sam', 123);
const u2 = new User('aldo', 23);

library.registerUser(u2);

u2.issueBook(b1);
library.displayBooks();


