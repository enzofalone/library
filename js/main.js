let library = [];

function updateLibrary() {
    library.forEach(element => {
        if(!element.display) {
            createCard(element);
        } 
    });
}

function addBookToLibrary(book) {
    library.push(book);
    console.log(`new book added: ${book.info()}`);
    createCard(book);
}

theHobbit = new Book("Harry Potter", "J.R.R. Tolkien",295,false); // test
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);

