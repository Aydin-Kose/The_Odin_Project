export default function createMenuPage(){
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    const section = document.createElement("section");
    section.classList.add("container");
    menuContainer.appendChild(section);

    section.appendChild(createMenuItem("appetizer", "Appetizer", "Succulent large shrimp, lightly fried and tossed in spicy cream sauce"));
    section.appendChild(createMenuItem("salad", "Salad", "Romaine hearts, parmesan & romano, creamy caesar"));
    section.appendChild(createMenuItem("steak", "Main Dish", "Incredibly tender 16 oz bone-in cut, aged to the peak of flavor"));
    section.appendChild(createMenuItem("cheesecake", "Desert", "Fresh berries, mint"));
    return menuContainer;
}

function createMenuItem(imageName, heading, ingredients){
    const card = document.createElement("div");
    card.classList.add("card");

    const menuImage = document.createElement("img");
    menuImage.classList.add("card-image");
    menuImage.classList.add(imageName);
    card.appendChild(menuImage);

    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card-description");
    card.appendChild(cardDescription);

    const menuHeading = document.createElement("h2");
    menuHeading.textContent = heading;
    cardDescription.appendChild(menuHeading);

    const menuIngredients = document.createElement("p");
    menuIngredients.textContent = ingredients;
    cardDescription.appendChild(menuIngredients);

    return card;
}