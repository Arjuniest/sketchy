const container = document.querySelector('.container');

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
