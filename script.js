

function createGrid() {
    let grid = document.getElementById("grid");

    for (let i = 0; i < 16*16; i++) {
        grid.appendChild(document.createElement("div"));
    }

    for (let cell of grid.children) {
        cell.classList.add("grid-cell"); // add the class for styling
        cell.addEventListener("mouseenter", (e) => { // add colouring effect
            e.target.style.backgroundColor = "black";
        });
    }
}

createGrid();

