function createNav() {
    const nav = document.createElement("nav");

    const logoButton = document.createElement("button");
    logoButton.classList.add("logo");
    logoButton.setAttribute("type", "button");
    logoButton.textContent = "SteakHouse";
    nav.appendChild(logoButton);

    const navList = document.createElement("ul");
    navList.classList.add("nav-list");
    navList.appendChild(createNavListElement("Home"));
    navList.appendChild(createNavListElement("Menu"));
    navList.appendChild(createNavListElement("Contact"));
    nav.appendChild(navList);
    return nav;
}

function createNavListElement(buttonName) {
    const listItem = document.createElement("li");
    const navButton = document.createElement("button");
    navButton.classList.add("nav-button");
    navButton.textContent = buttonName;
    listItem.appendChild(navButton);
    return listItem;
}

export default createNav;