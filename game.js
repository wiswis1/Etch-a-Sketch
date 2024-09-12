const GRID_SIZE = 16;

var currentMode = 'black';

var currentSize =  GRID_SIZE;



const blackBtn = document.getElementById('blackBtn');
const colorPickBtn = document.getElementById('colorPickBtn');
const rgbBtn = document.getElementById('rgbBtn');
const eraseBtn = document.getElementById('eraseBtn');
const clearBtn  = document.getElementById('clearBtn');
const grid = document.getElementById('grid-container');
// const sizeValue = document.getElementById('sizeValue')
// const sizeSlider = document.getElementById('sizeSlider')



blackBtn.onclick = () => setCurrentMode('black');
colorPickBtn.onclick = (e) => setCurrentMode(e.target.value);
rgbBtn.onclick = () => setCurrentMode('rgb');
eraseBtn.onclick = () => setCurrentMode('eraser');
clearBtn.onclick = () => resetGrid();


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

function changeSize(newSize){
    currentSize = newSize;
    resetGrid();
}




function setCurrentMode(newMode){
    currentMode = newMode;
}


//make a function to clear the grid(basically resets the game)
function resetGrid(){
    grid.innerHTML = '';
    createGrid(size);
}


function changeColor(e) {
  if (currentMode === 'black') {
    e.target.style.backgroundColor = 'black';
  } else if (currentMode === 'rgb') {
    const R = Math.floor(Math.random()*256);
    const G = Math.floor(Math.random()*256);
    const B = Math.floor(Math.random()*256);
    e.target.style.backgroundColor = `rgb(${R},${G},${B})`
  }
  else if (currentMode === 'eraser'){
    e.target.style.backgroundColor = null;
  }
  else if(isCustom){
    e.target.style.backgroundColor = currentColor;
  } 

}




window.onload = () =>{
    createGrid(currentSize);
    menu();
}
