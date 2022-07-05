const container = document.querySelector('.container');

let gridSize = 3;
createGrid();

function createGrid() {
    container.style.cssText = `grid-template-columns: repeat(${gridSize * 16}, 1fr);`;
    for (let i = 0; i < gridSize * gridSize * 16 * 5; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', paintDiv)
        container.appendChild(gridItem);
    }
}

function paintDiv(e) {
    e.target.style.backgroundColor = "#707070";
}

function changeGridSize() {
    gridSize = document.getElementById("gridRange").valueAsNumber;
    container.innerHTML = "";
    createGrid();
}

function clearGrid() {
    document.querySelectorAll('div.grid-item').forEach(element => element.style.backgroundColor = "#D8D8D8")
}