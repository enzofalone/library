let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

Book.prototype.info = function() {
    let infoRead = ``;
    if(!this.read) {
        infoRead = "not read yet";
    } else {
        infoRead = "already read";
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${infoRead}`
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(`new book added: ${book.info()}`);
    updateLibrary();
}

function updateLibrary() {
    myLibrary.forEach(e => {
        let cardContainer= document.querySelector(".card-container");
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        //Add title
        let title = document.createElement("h2")
        let titleText = document.createTextNode(e.title);
        title.appendChild(titleText);

        let author = document.createElement("h3")
        let authorText = document.createTextNode(e.author);
        author.appendChild(authorText);

        let pages = document.createElement("p")
        let pagesText = document.createTextNode(`${e.pages} pages`);
        pages.appendChild(pagesText);
        
        cardDiv.appendChild(title);
        cardDiv.appendChild(author);
        cardDiv.appendChild(pages);
        
        cardContainer.appendChild(cardDiv);
    });
}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien",295,false);
addBookToLibrary(theHobbit);