const container = document.querySelector('.square-container');
const resetButton = document.querySelector("#reset");
const squareSetBtn = document.querySelector("#grid-size");


const gridWidth = 700;



// Initialize a 5x5 grid


// Create grid
function buildGrid(squares){
    const squareWidth = gridWidth / squares;
    const squareHeight = gridWidth / squares;
    for(let i = 0; i < (squares * squares); i++){
        const div = document.createElement("div");
        div.setAttribute("class", "square");
        div.style.width = `${squareWidth}px`;
        div.style.height = `${squareHeight}px`;
        div.addEventListener("mouseenter", (event) => {
            div.style.backgroundColor = "#3794DB";
        })
        container.appendChild(div);
    }
}

// Reset the squares
resetButton.addEventListener('click', (event) => {
    reset();
})

function reset(){
    for(let i = 0; i < container.children.length; i++){
        container.children[i].style.backgroundColor = "red";
    }
}

// Get Number of squares from user
squareSetBtn.addEventListener('click', (event) => {
    resetGrid();
    let squares = getSquares();
    buildGrid(squares);
})

function getSquares(){
    let squares = parseInt(prompt("Enter the amount of squares per side: "));
    if(squares <= 40){
        return squares;
    } else{
        alert("Can't be greater than 40!");
    }
}

// Reset the grid
function resetGrid(){
    while(container.children.length > 0){
        container.children[0].remove();
    }
}