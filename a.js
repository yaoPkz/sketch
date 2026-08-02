
const board = document.querySelector('.board');
const sizeInput = document.getElementById('size');


sizeInput.addEventListener("input", function () {
    let size = Number(sizeInput.value);
    createBoard(size);
});

function colorSquare(e) {
    e.target.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}




function createBoard(size) {
    board.innerHTML = "";

    const squareSize = 600 / size; // board width / number of squares

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");

            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            row.appendChild(square);
            square.addEventListener("mouseover",colorSquare);
        }

        board.appendChild(row);
    }
}


document.addEventListener("DOMContentLoaded",createBoard(10));
document.getElementById("borrar").addEventListener("click", function() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
});



