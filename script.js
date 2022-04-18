

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

createGrid(16);

