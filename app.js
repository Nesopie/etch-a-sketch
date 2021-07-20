const grid = document.querySelector(".grid");

function deleteChild() {
    let lastChild = grid.lastElementChild;
    while(lastChild) {
        grid.removeChild(lastChild);
        lastChild = grid.lastElementChild;
    }
}

const button = document.querySelector(".size");

let rainbowClicked = false;
let eraserClicked = false;

const rainbow = document.querySelector(".rainbow");
let hue = 100;

rainbow.addEventListener("click", () => {
    rainbowClicked = true;
    eraserClicked = false;
});

const eraser = document.querySelector(".eraser");

eraser.addEventListener("click", () => {
    rainbowClicked = false;
    eraserClicked = true;
});

for(let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", () => {
        if(rainbowClicked) {
            div.style.backgroundColor = "hsl(" + hue + ",100%,50%)";
            console.log("hsl(" + hue + ",100%,100%)");
            hue += 10;
            hue %= 360;
        }else if(eraserClicked) {
            div.style.backgroundColor = "#ffffff";
        }else {
            let r = (Math.floor(Math.random() * 256)).toString(16);
            let g = (Math.floor(Math.random() * 256)).toString(16);
            let b = (Math.floor(Math.random() * 256)).toString(16);
            div.style.backgroundColor = '#' + r + g + b;
        }
    });
    grid.appendChild(div);
};

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
                if(rainbowClicked) {
                    div.style.backgroundColor = "hsl(" + hue + ",100%,50%)";
                    hue += 10;
                    hue %= 360;
                }else if(eraserClicked) {
                    div.style.backgroundColor = "#ffffff";
                }else {
                    let r = (Math.floor(Math.random() * 256)).toString(16);
                    let g = (Math.floor(Math.random() * 256)).toString(16);
                    let b = (Math.floor(Math.random() * 256)).toString(16);
                    div.style.backgroundColor = '#' + r + g + b;
                }
            });
            grid.appendChild(div);
        };
    };
    grid.style.gridTemplateColumns = "repeat(" + size + ",1fr)";
    grid.style.gridTemplateRows = "repeat(" + size + ",1fr)";
});
