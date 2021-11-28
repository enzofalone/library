let formDiv = document.querySelector(".form-wrapper");
formDiv.style.display = "none";

function popupForm() {
    if (formDiv.style.display === "none") {
        formDiv.style.display = "flex";
    } else {
        formDiv.style.display = "none";
    }
}

const wrapper = document.querySelector(".form-wrapper");
const form = wrapper.querySelectorAll("form");
const submitBttn = form[0].querySelector('input[type="submit"]');

function getDataForm(e) {
    e.preventDefault();
    let formData = new FormData(form[0]);
    
    //form fields
    let title = formData.get("title");
    let author = formData.get("author");
    let pages = formData.get("pages");
    let read = formData.get("read");

    if((title !== '') || (author !== '') || (pages !== '')){
        let book = new Book(title,
            author,
            pages,
            read);

        addBookToLibrary(book);
        document.querySelector('form').reset(); //Reset library
    } else {
        alert("Please fill out all the fields");
    }
}

document.addEventListener("DOMContentLoaded", (e) => {

    submitBttn.addEventListener("click", getDataForm);

});