const container = document.querySelector('.container');



// Create 16 squares
for(let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.setAttribute("class", "square");
    div.addEventListener("mouseenter", (event) => {
        div.style.backgroundColor = "blue";
    })
    container.appendChild(div);
}