const container = document.querySelector('.container');
const options = document.querySelector('.options');
let gridSize = 16; //by default

//options for the number of squares per side for the new grid.

const option1 = document.createElement('div');
option1.classList.add('button');
option1.id = 'small';
options.appendChild(option1);
option1.textContent = "small"
//if option1 is clicked
option1.addEventListener("click", () => {
	// console.log(option1.textContent);
    gridSize = 16;
});

const option2 = document.createElement('div');
option2.classList.add('button');
option2.id = 'medium';
options.appendChild(option2);
option2.textContent = "Medium";
//if option2 is clicked
option2.addEventListener("click", () => {
	// console.log(option2.textContent);
    gridSize = 36;
});

const option3 = document.createElement('div');
option3.classList.add('button');
option3.id = 'large';
options.appendChild(option3);
option3.textContent = "LARGE";
//if option3 is clicked
option3.addEventListener("click", () => {
	// console.log(option3.textContent);
    gridSize = 64;
});

//creating the grids :

function addGrids(){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
}

for (let i = 1; i <= (gridSize*gridSize); i++) {
    addGrids();
}

const color = Array.from(document.querySelectorAll('.grid'));
// console.log(typeof(color))

color.forEach(color => color.addEventListener('mouseover', (changeColor => color.classList.add('black')), false));



// function updateGrids() {
//     if(document.getElementById('small').clicked == true)
//     {
//         gridSize = 36;
//     }
//     console.log('im working');

//     for (let i = 1; i <= (gridSize*gridSize); i++) {
//         addGrids();
//     }
// }