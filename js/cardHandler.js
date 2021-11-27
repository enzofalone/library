function createCard(e) {
    let cardContainer = document.querySelector(".card-container");
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");


    //HEADER SECTION OF CARD
    let cardHeaderDiv = document.createElement("div");
    cardHeaderDiv.classList.add("card-header")

    let title = document.createElement("h2")
    let titleText = document.createTextNode(e.title);
    title.appendChild(titleText);
    cardHeaderDiv.appendChild(title);
    //Content of card
    let image = document.createElement("img")
    let imageSRC = `https://source.unsplash.com/300x300/?${e.title}`;
    image.src = imageSRC;
    image.style.width = "120px";
    image.draggable = false; //This prevents the user not being able to click the image while he is moving the mouse

    let author = document.createElement("h3")
    let authorText = document.createTextNode(e.author);
    author.appendChild(authorText);

    let pages = document.createElement("p")
    let pagesText = document.createTextNode(`${e.pages} pages`);
    pages.appendChild(pagesText);

    //Add elements for the cardDiv below
    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(image);
    cardDiv.appendChild(author);
    cardDiv.appendChild(pages);

    cardContainer.appendChild(cardDiv);

    cardDiv.addEventListener("click", setRead);
    cardDiv.addEventListener("mousemove", createCardBtns);
    cardDiv.addEventListener("mouseout", hideCardBtns);
}

//Handle read status
function setRead(e) {
    e.currentTarget.classList.toggle("read");
}

//Create delete button when mouse goes in the range of the card
function createCardBtns(e) {
    cardHeaderDiv = e.currentTarget.querySelector(".card-header")
    
    if(cardHeaderDiv.querySelector("button") === null){ //create only if buttons do not exist
        let button = document.createElement("button");
        button.classList.add("button-delete");
        let t = document.createTextNode("X");
        button.appendChild(t);

        button.addEventListener("click", deleteCard);

        cardHeaderDiv.appendChild(button);

        let readButton = document.create
    }
}

//Hide delete button when the mouse goes out of the range of the card
function hideCardBtns(e) {

}

//Delete card on cross button click
function deleteCard(e) {
    console.log("delete!");
}