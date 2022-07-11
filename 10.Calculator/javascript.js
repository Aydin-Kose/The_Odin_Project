const currentTextBox = document.getElementById('currentTextBox');
const error = document.querySelector('.error');

const TRANSACTION_ALLOWED_CHARS_REGEX = /[0-9/*+-]/;

currentTextBox.innerHTML = "*Please enter a username*";

currentTextBox.addEventListener("keypress", e => {
    error.textContent="";
    if (!TRANSACTION_ALLOWED_CHARS_REGEX.test(e.key) && e.key != 'Enter') {
        e.preventDefault();
        error.textContent=`'Unknown Variable: {${e.key}}'`;
        return false;
    }
});

currentTextBox.addEventListener("keyup", e => {
    if (/[/+*-]+[/+*-]/g.test(e.target.value)) {
        error.textContent="'Malformed Expression'";
    }
});