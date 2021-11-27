function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.display = false;
}

Book.prototype.info = function () {
    let infoRead = ``;
    if (!this.read) {
        infoRead = "not read yet";
    } else {
        infoRead = "already read";
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${infoRead}`
}