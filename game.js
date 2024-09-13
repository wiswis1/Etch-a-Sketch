const GRID_SIZE = 16;
const COLOR = 'black';
var currentMode = "color";
var currentColor = "black";

var currentSize = GRID_SIZE;

const colorBtn = document.getElementById("colorBtn");
const colorPickBtn = document.getElementById("colorPickBtn");
const rgbBtn = document.getElementById("rgbBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const grid = document.getElementById("grid-container");
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');


colorPickBtn.oninput = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () => setCurrentMode('color');
rgbBtn.onclick = () => setCurrentMode('rgb');
eraserBtn.onclick = () => setCurrentMode('eraser');
clearBtn.onclick = () => resetGrid();
slider.oninput = (e) => changeSize(e.target.value);




function createGrid(size) {
  for (var i = 0; i < size; i++) {
    var column = document.createElement("div");
    column.classList.add("column");
    column.style.width = 700 / size + "px";
    column.style.height = "700px";
    grid.appendChild(column);
    for (var j = 0; j < size; j++) {
      var gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      gridCell.style.width = 700 / size + "px";
      gridCell.style.height = 700 / size + "px";

      gridCell.addEventListener("mouseover", changeColor);

      column.appendChild(gridCell);
    }
  }
}



function changeSize(newSize) {
  sliderValue.innerHTML = newSize+"x"+newSize;
  currentSize = newSize;
  resetGrid();
}

//make a function to clear the grid(basically resets the game)
function resetGrid() {
  grid.innerHTML = "";
  createGrid(currentSize);
}



function setCurrentColor(newColor){
  currentColor = newColor;
}

function setCurrentMode(newMode) {
  if (currentMode === "rgb") {
    rgbBtn.classList.remove("active");
  } else if (currentMode === "color") {
    colorBtn.classList.remove("active");
  } else if (currentMode === "eraser") {
    eraserBtn.classList.remove("active");
  }

  if (newMode === "rgb") {
    rgbBtn.classList.add("active");
  } else if (newMode == "color") {
    colorBtn.classList.add("active");
    
  } else if (newMode === "eraser") {
    eraserBtn.classList.add("active");
  }


  currentMode = newMode;
}



function changeColor(e) {
  if (currentMode === "color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "rgb") {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${R},${G},${B})`;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = null;
  }
}

window.onload = () => {
  createGrid(currentSize);
  menu();
};
