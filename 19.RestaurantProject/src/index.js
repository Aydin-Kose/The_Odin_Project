import './style.css'
import createNav from './pages/Nav'
import { createHomePage } from './pages/Home'
import createMenuPage from './pages/Menu'
import createContactPage from './pages/Contact'

const content = document.getElementById("content");
document.body.insertBefore(createNav(), content);
content.appendChild(createHomePage());

const varButtons = document.querySelectorAll('.nav-button');
varButtons[0].addEventListener('click', () => {
    content.innerHTML = "";
    content.appendChild(createHomePage());
});

varButtons[1].addEventListener('click', () => {
    content.innerHTML = "";
    content.appendChild(createMenuPage());
});

varButtons[2].addEventListener('click', () => {
    content.innerHTML = "";
    content.appendChild(createContactPage());
});

document.querySelector("button.logo").addEventListener('click', () => {
    content.innerHTML = "";
    content.appendChild(createHomePage());
});