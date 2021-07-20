const grid = document.querySelector(".grid");

function deleteChild() {
    let lastChild = grid.lastElementChild;
    while(lastChild) {
        grid.removeChild(lastChild);
        lastChild = grid.lastElementChild;
    }
}

for(let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", () => {
        let r = (Math.floor(Math.random() * 256)).toString(16);
        let g = (Math.floor(Math.random() * 256)).toString(16);
        let b = (Math.floor(Math.random() * 256)).toString(16);
        div.style.backgroundColor = '#' + r + g + b;
    });
    grid.appendChild(div);
};

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let size = prompt("Enter the size");
    size = +size;
    if(size > 50 || size < 1) {
        alert("Enter any size from 1 to 50");
        return;
    }
    deleteChild();

    for(let i = 1; i <= size; i++) {
        for(let j = 1; j <= size; j++) {
            let div = document.createElement("div");
            div.addEventListener("mouseover", () => {
                let r = (Math.floor(Math.random() * 256)).toString(16);
                let g = (Math.floor(Math.random() * 256)).toString(16);
                let b = (Math.floor(Math.random() * 256)).toString(16);
                div.style.backgroundColor = '#' + r + g + b;
            });
            grid.appendChild(div);
        };
    };
    grid.style.gridTemplateColumns = "repeat(" + size + ",1fr)";
    grid.style.gridTemplateRows = "repeat(" + size + ",1fr)";
});
