let library = [];

function updateLibrary() {
    library.forEach(element => {
        if (!element.display) {
            createCard(element);
        }
    });
}

function addBookToLibrary(book) {
    library.push(book);
    console.log(`new book added: ${book.info()}`);
    createCard(book);
}

const harryPotter = new Book("Harry Potter", "J. K. Rowling", 223, false); // test
const theHobbit = new Book("The Hobbit","J. R. R. Tolkien", 310, true); // test
addBookToLibrary(harryPotter);
addBookToLibrary(theHobbit);