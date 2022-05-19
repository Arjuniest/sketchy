const container = document.querySelector('.container');
const options = document.querySelector('.options');

//options for the number of squares per side for the new grid.

const option1 = document.createElement('div');
option1.classList.add('button');
options.appendChild(option1);
option1.textContent = "small"

const option2 = document.createElement('div');
option2.classList.add('button');
options.appendChild(option2);
option2.textContent = "Medium";

const option3 = document.createElement('div');
option3.classList.add('button');
options.appendChild(option3);
option3.textContent = "LARGE";
//creating the grids :

function addGrids(){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
}

for (let i = 1; i <= 16*16; i++) {
    addGrids();
}

const color = Array.from(document.querySelectorAll('.grid'));
// console.log(typeof(color))

color.forEach(color => color.addEventListener('mouseover', (changeColor => color.classList.add('black')), false));
