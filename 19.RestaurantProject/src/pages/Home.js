function createHomePage() {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("main-container");
    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.innerHTML = "A Premium</br>And Authentic</br>Steakhouse";
    containerDiv.appendChild(heading);
    const primaryButton = document.createElement("button");
    primaryButton.classList.add("primary-button");
    primaryButton.textContent = "Book A Table";
    containerDiv.appendChild(primaryButton);
    return containerDiv;
}

export { createHomePage }