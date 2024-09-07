const gridX = 16;
const gridY = 16;
const grid = document.getElementById("grid-container");



function createGrid(){
    for(let i = 0; i<gridX;i++){
        let column = document.createElement('div');
        column.classList.add('column')
        column.style.width = 400/gridX+"px";
        column.style.height = "500px"
        grid.appendChild(column);
        for(let j = 0;j<gridY;j++){
            let cell = document.createElement('div');
            cell.classList.add("grid-cell");
            cell.style.width = 400/gridX+"px";
            cell.style.height = 500/gridY+"px";
            column.appendChild(cell) 
        }
    }
}

createGrid();