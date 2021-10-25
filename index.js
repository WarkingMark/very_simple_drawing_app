const board = document.querySelector('#board');
const SQUARE_COUNT = 592 * 2;
const STANDART_COLOR = '#1d1d1d';
let clear_board = document.querySelector('#clear-board');
let colors = document.querySelectorAll('.color');
let active_color = '';

for (let i = 0; i < SQUARE_COUNT; i++) {
    let squere = document.createElement('div');
    squere.classList.add('square');
    board.append(squere);  
    squere.addEventListener('mouseover', () => {
        setColor(squere,active_color)
    })
    squere.addEventListener('click', () => {
        if(active_color === "") {
            alert('Выберите цвет');
        }
    })
}
clear_board.addEventListener('click', () => {
    let squeres = document.querySelectorAll('.square');
    squeres.forEach((e) => {
        e.style.backgroundColor = STANDART_COLOR;
    })
})
colors.forEach((e) => {
    let color = e.style.backgroundColor;
    e.addEventListener('click', () => {
        active_color = color;
    })
})
function setColor(element,color) {
    element.style.backgroundColor = color; 
}