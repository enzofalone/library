function createCard(e) {
    let cardContainer = document.querySelector(".card-container");
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    //header section
    let cardHeaderDiv = document.createElement("div");
    cardHeaderDiv.classList.add("card-header")

    let title = document.createElement("h2")
    let titleText = document.createTextNode(e.title);
    title.appendChild(titleText);
    cardHeaderDiv.appendChild(title);
    
    //content
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

    //Add bottom section for buttons
    let cardBottomDiv = document.createElement("div");
    cardBottomDiv.classList.add("card-bottom");

    //Add elements for the cardDiv
    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(image);
    cardDiv.appendChild(author);
    cardDiv.appendChild(pages);
    cardDiv.appendChild(cardBottomDiv)

    cardContainer.appendChild(cardDiv);

    //cardDiv.addEventListener("click", setRead);
    cardDiv.addEventListener("mousemove", createCardBtns);
    cardDiv.addEventListener("mouseout", hideCardBtns);

    //if the book has been read, setRead will be called
    if(e.read){
        setRead(cardDiv);
    }    
}



//Create delete button when mouse goes in the range of the card
function createCardBtns(e) {
    let cardBottomDiv = e.currentTarget.querySelector(".card-bottom");
    let buttons = e.currentTarget.querySelectorAll("button");

    if(cardBottomDiv.querySelector("button") === null){ //create only if buttons do not exist
        //read button
        let readButton = document.createElement("button");
        readButton.classList.add("button-card")
        let textRead = document.createElement("i");
        textRead.classList.add("far");
        textRead.classList.add("fa-eye");
        readButton.appendChild(textRead);

        //delete button
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("button-card");
        let textDelete = document.createElement("i");
        textDelete.classList.add("fas");        //icon class
        textDelete.classList.add("fa-times");   //icon class
        deleteButton.appendChild(textDelete);

        //event listeners for buttons
        readButton.addEventListener("click", (e) => {
            e.currentTarget.parentNode.parentNode.classList.toggle("read");
        });
        deleteButton.addEventListener("click", deleteCard);
        
        //add buttons
        cardBottomDiv.appendChild(readButton);
        cardBottomDiv.appendChild(deleteButton);
    } else {
        buttons.forEach(e => {
            e.style.display = "block";
        });
    }
}

//Hide delete button when the mouse goes out of the range of the card
function hideCardBtns(e) {
    let buttons = e.currentTarget.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.display = "none";
    })
}

//Delete card on cross button click
function deleteCard(e) {
    const p = e.currentTarget.parentNode;
    p.parentNode.remove();
}

//Handle read status on read button click
function setRead(e,) {
    e.classList.toggle("read");
}