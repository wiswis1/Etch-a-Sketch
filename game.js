const GRID_SIZE = 16;

var currentMode = "black";

var currentSize = GRID_SIZE;

const blackBtn = document.getElementById("blackBtn");
const colorPickBtn = document.getElementById("colorPickBtn");
const rgbBtn = document.getElementById("rgbBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const grid = document.getElementById("grid-container");
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');

blackBtn.onclick = () => setCurrentMode("black");
colorPickBtn.onclick = (e) => setCurrentMode(e.target.value);
rgbBtn.onclick = () => setCurrentMode("rgb");
eraserBtn.onclick = () => setCurrentMode("eraser");
clearBtn.onclick = () => resetGrid();
slider.oninput = (e) => changeSize(e.target.value);

function createGrid(size) {
  for (var i = 0; i < size; i++) {
    var column = document.createElement("div");
    column.classList.add("column");
    column.style.width = 400 / size + "px";
    column.style.height = "400px";
    grid.appendChild(column);
    for (var j = 0; j < size; j++) {
      var gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      gridCell.style.width = 400 / size + "px";
      gridCell.style.height = 400 / size + "px";

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

function setCurrentMode(newMode) {
  if (newMode === "rgb") {
    rgbBtn.classList.add("active");
  } else if (newMode == "black") {
    blackBtn.classList.add("active");
  } else if (newMode === "eraser") {
    eraserBtn.classList.add("active");
  }

  if (currentMode === "rgb") {
    rgbBtn.classList.remove("active");
  } else if (currentMode === "black") {
    blackBtn.classList.remove("active");
  } else if (currentMode === "eraser") {
    eraserBtn.classList.remove("active");
  }
  currentMode = newMode;
}



function changeColor(e) {
  if (currentMode === "black") {
    e.target.style.backgroundColor = "black";
  } else if (currentMode === "rgb") {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${R},${G},${B})`;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = null;
  } else if (isCustom) {
    e.target.style.backgroundColor = currentColor;
  }
}

window.onload = () => {
  createGrid(currentSize);
  menu();
};
