let formDiv = document.querySelector(".form");
formDiv.style.display = "none";

function popupForm() {
    if(formDiv.style.display === "none") {
        formDiv.style.display = "flex";
    } else {
        formDiv.style.display = "none";
    }
}

function submitNewBook(){

}