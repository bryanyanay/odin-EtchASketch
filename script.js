

function createGrid() {
    let grid = document.getElementById("grid");

    for (let i = 0; i < 16*16; i++) {
        grid.appendChild(document.createElement("div"));
    }

    for (let cell of grid.children) {
        cell.classList.add("grid-cell");
    }
}

createGrid();