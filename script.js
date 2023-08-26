const container = document.querySelector('.container');

let index = 0;
for (let i = 0; i < 32; i++) {
    for (let j = 0; j < 32; j++) {
        index++;
        const row = document.createElement('div');
        row.classList.add('grid-item');
        row.setAttribute("id",index);
        /*row.innerText = `${i+1},${j+1}`;*/
        container.appendChild(row);
    }
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