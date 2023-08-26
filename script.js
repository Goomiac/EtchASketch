const container = document.querySelector('.container');

function changeColor() {
    console.log("hover!");
}

for (let i = 0; i < 32; i++) {
    for (let j = 0; j < 32; j++) {
        const row = document.createElement('div');
        row.classList.add('grid-item');
        /*row.innerText = `${i+1},${j+1}`;*/
        container.appendChild(row);
    }
}


//TODO --> the code below doesn't work!
const gridItem = document.querySelector('.grid-item');
console.log(gridItem);
gridItem.addEventListener("hover", changeColor);

