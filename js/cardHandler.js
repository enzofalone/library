

function createCard(e) {
    let cardContainer = document.querySelector(".card-container");
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    //Add title
    let title = document.createElement("h2")
    let titleText = document.createTextNode(e.title);
    title.appendChild(titleText);

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
    cardDiv.appendChild(title);
    cardDiv.appendChild(image);
    cardDiv.appendChild(author);
    cardDiv.appendChild(pages);

    cardContainer.appendChild(cardDiv);

    cardDiv.addEventListener("click", setRead);
    cardDiv.addEventListener("mousemove", createDeleteBtn);
    cardDiv.addEventListener("mouseout", hideDeleteBtn);
}

//Handle read status
function setRead(e) {
    e.currentTarget.classList.toggle("read");
}

//Create delete button when mouse goes in the range of the card
function createDeleteBtn() {
    
}

//Hide delete button when the mouse goes out of the range of the card
function hideDeleteBtn() {
    
}