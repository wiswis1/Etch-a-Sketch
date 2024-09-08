const gridX = 16;
const gridY = 16;

var isBlack = true; //default color
var isCustom = false; //custom color picked by the user
var isRainbow = false; //random rgb
var isEraser = false; //eraser

var currentColor;


function createGrid() {
  const grid = document.getElementById("grid-container");

  for (var i = 0; i < gridX; i++) {
    var column = document.createElement("div");
    column.classList.add("column");
    column.style.width = 400 / gridX + "px";
    column.style.height = "400px";
    grid.appendChild(column);
    for (var j = 0; j < gridY; j++) {
      var gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      gridCell.style.width = 400 / gridX + "px";
      gridCell.style.height = 400 / gridY + "px";

      gridCell.addEventListener("mouseover", changeColor);

      column.appendChild(gridCell);
    }
  }
}














function changeColor(e) {
  if (isBlack) {
    e.target.style.backgroundColor = "black";
  } else if (isRainbow) {
    const R = Math.floor(Math.random()*256);
    const G = Math.floor(Math.random()*256);
    const B = Math.floor(Math.random()*256);
    e.target.style.backgroundColor = `rgb(${R},${G},${B})`
  }else if(isCustom){
    e.target.style.backgroundColor = currentColor;
  } 
  else if (isEraser){
    e.target.style.backgroundColor = "rgb(218, 214, 214)";
  }
}





createGrid();
