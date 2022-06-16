const container = document.querySelector('.container');
const options = document.querySelector('.options');
let gridSize = 16; //by default


//creating the grids :
function addGrids(){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
}
for (let i = 0; i < (gridSize*gridSize); i++) {
    addGrids();  
}



const option1 = document.createElement('div');
option1.classList.add('button');
option1.id = 'small';
options.appendChild(option1);
option1.textContent = "small"

option1.onclick = function(){
    // console.log("Small grid size");
    gridSize = 16; //by default
    
    //reverting back to the default CSS
    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;

    // Usage: 
    addCSS(".container{ grid-template-columns: repeat(16, 1fr);}")
    addGrids();
}


const option2 = document.createElement('div');
option2.classList.add('button');
option2.id = 'medium';
options.appendChild(option2);
option2.textContent = "Medium";
//if option2 is clicked
option2.onclick = function() {
    gridSize = 36;

    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;

    // changing the CSS: 
    addCSS(".container{ grid-template-columns:repeat(36, 1fr);");
    addGrids();

}






const option3 = document.createElement('div');
option3.classList.add('button');
option3.id = 'large';
options.appendChild(option3);
option3.textContent = "LARGE";
//if option3 is clicked
option3.onclick = function() {
    gridSize = 64;
    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;

    // change the CSS
    addCSS(".container{ grid-template-columns:repeat(64, 1fr);");
    addGrids();
    console.log(`Present grid size is ${gridSize}`)
}


const color = Array.from(document.querySelectorAll('.grid'));
// console.log(typeof(color))

color.forEach(color => color.addEventListener('mouseover', (changeColor => color.classList.add('black')), false));


