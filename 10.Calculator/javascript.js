const numberButtons = document.querySelectorAll(".key.number");
const errorMessage = document.querySelector(".error");
const operatorButtons = document.querySelectorAll(".key.operator");
const currentOperation = document.getElementById('currentTextBox');

numberButtons.forEach(btn => btn.addEventListener('click', () => currentOperation.value += btn.dataset.key));

operatorButtons.forEach(btn => btn.addEventListener('click', () => operation(btn.dataset.key)));

function operation(opName) {
    errorMessage.textContent = "";
    if (!/[*/ \-+]/.test(currentOperation.value.slice(-1))) {
        currentOperation.value += opName;
        return;
    }
    errorMessage.textContent = `Malformed Expression "${currentOperation.value.slice(-1)} ${opName}"`;
}

function clearOperation() {
    currentOperation.value = "";
}

function getResult() {
    if (/[*/ \-+]/.test(currentOperation.value.slice(-1))){
        errorMessage.textContent = "Last Character Cannot be an Operation";
        return false;
    }
    debugger;
    const m = [...currentOperation.value.matchAll(/(-?[\d.]+)([*\/+-])?/g)].flat().filter((x, i) => x && i % 3);

    [/[*\/]/, /[+-]/].forEach(expr => {
        for (let i = 0; i < m.length; i += 2) {
          let [a, x, b] = [m[i], m[i + 1], m[i + 2]];
          x = expr.exec(x);
          if (!x) continue;
          m[i] = calc[x.input](parseFloat(a), parseFloat(b)); // calculate and insert
          m.splice(i + 1, 2);                                 // remove operator and operand
          i -= 2;                                             // rewind loop
        }
      });
      currentOperation.value = m[0]; 
}

const calc = {
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

document.addEventListener('keydown', e => {
    if (/[0-9/*\-+]|Backspace|Enter/.test(e.key)) handleNumber(e.key);
});

document.addEventListener('keyup', e => {
    if (/[0-9/*\-+]|Backspace|Enter/.test(e.key)) {
        let keyElement = document.querySelector(`[data-key='${e.key}']`);
        keyElement.classList.remove("active");
    }
});

function handleNumber(key) {
    let keyElement = document.querySelector(`[data-key='${key}']`);
    keyElement.classList.add("active");
    keyElement.click();
}