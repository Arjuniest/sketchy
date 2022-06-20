const container = document.querySelector('.container');
const options = document.querySelector('.options');
let gridSize = 16; //by default




//creating the grids :
function addGrids(){
    for (let i = 0; i < (gridSize*gridSize); i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');        
        container.appendChild(grid);
        console.log("adding grids");  
    }
    //changing color :
    const color = Array.from(document.querySelectorAll('.grid'));
    // console.log(typeof(color))

    color.forEach(color => color.addEventListener('mouseover', (changeColor => color.classList.add('black')), false));
}

addGrids();




const option1 = document.createElement('div');
option1.classList.add('button');
option1.id = 'small';
options.appendChild(option1);
option1.textContent = "small"

option1.onclick = function(){
    // console.log("Small grid size");
    // container.removeChild(grid); doesn't work
    container.innerHTML = '';

    gridSize = 16; //by default
    addGrids();
    //reverting back to the default CSS
    container.style.gridTemplateColumns = "repeat(16, 1fr)";
    
}


const option2 = document.createElement('div');
option2.classList.add('button');
option2.id = 'medium';
options.appendChild(option2);
option2.textContent = "Medium";
//if option2 is clicked
option2.onclick = function() {
    container.innerHTML = '';
    gridSize = 36;
    container.style.gridTemplateColumns = "repeat(36, 1fr)";
    addGrids();
}

const option3 = document.createElement('div');
option3.classList.add('button');
option3.id = 'large';
options.appendChild(option3);
option3.textContent = "LARGE";
//if option3 is clicked
option3.onclick = function() {
    container.innerHTML = '';
    gridSize = 64;
    container.style.gridTemplateColumns = "repeat(64, 1fr)";
    addGrids();
    console.log(`Present grid size is ${gridSize}`)
}



