const container = document.querySelector('.container');
const button = document.querySelector('.sizeChange');

button.addEventListener('click', changeGridSize);

function drawGrid(size) {
    container.style.setProperty('--size', size);
    for (let i = 0; i < size * size; i++) {
        let cell = document. createElement('div');;
        cell.classList.add('grid-item');
        /*row.innerText = `${i+1},${j+1}`;*/
        container.appendChild(cell).className = "grid-item";
    }
    const gridItems = document.querySelectorAll('.grid-item');
    let isOn = false;
    gridItems.forEach(item => {
    item.addEventListener('click', function startDrawing(event) {
        isOn = !isOn;
    })
    item.addEventListener('mouseout', function changeColor(event) {
        if (isOn) {item.setAttribute('style', 'background-color:black;')};
    });
});
}

let size = 84;
drawGrid(size);

function changeGridSize() {
    let newSize = 0;
    newSize = prompt("Input new grid size: ");
    if (newSize > 128) {
        alert("Size is too big, maximum is 128! Try again.");
        return;
    };
    container.innerHTML = "";
    drawGrid(newSize);
}