

function createGrid(dim) {
    let grid = document.getElementById("grid");

    grid.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
    for (let i = 0; i < dim*dim; i++) {
        grid.appendChild(document.createElement("div"));
    }

    for (let cell of grid.children) {
        cell.classList.add("grid-cell"); // add the class for styling
        cell.addEventListener("mouseenter", (e) => { // add colouring effect
            e.target.style.backgroundColor = "black";
        });
    }
}

function getDimensions() {
    let dim = +prompt("Enter new grid dimensions (<= 100):");
    while (dim > 100) {
        dim = prompt("That number was too big. Enter a number <= 100:");
    } 
    return dim;
}

function resetGrid() {
    let grid = document.getElementById("grid");
    grid.textContent = ""; // removes all children, repalces with an empty text node

    createGrid(getDimensions());
}

document.getElementById("create-grid").addEventListener("click", resetGrid);

