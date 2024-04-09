//4(Варіант-1)
//генерування рандомного масиву
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const array = [];
for (let i = 0; i < 20; i++) {
    array.push(getRandomInt(1, 100));
}
//Відсортування масиву
let sortedArray = array.slice().sort((a, b) => b - a);
let sortedArrayElement = document.getElementById('sortedArray');

sortedArrayElement.innerHTML = sortedArray.join(', ');

document.getElementById('widthSelect').addEventListener('change', function () {
    let selectedWidth = this.value;
    sortedArrayElement.style.width = selectedWidth + 'px';
});

//5 
function generateDiv() {
    let selectedWidth = document.getElementById('widthSelect').value;
    let generatedDiv = document.createElement('div');
    generatedDiv.style.backgroundColor = 'red';
    generatedDiv.style.width = selectedWidth + 'px';
    generatedDiv.style.height = '30px';
    generatedDiv.style.position = 'relative';
    generatedDiv.style.top = '0';

    document.getElementById('generatedDiv').appendChild(generatedDiv);
}

document.getElementById('generateButton').addEventListener('click', generateDiv);

//6
let moveUpButton = document.createElement('button');
    moveUpButton.textContent = 'Посунути уверх';
    moveUpButton.id = 'moveUpButton';
    let moveDownButton = document.createElement('button');
    moveDownButton.textContent = 'Посунути вниз';
    moveDownButton.id = 'moveDownButton';

    moveUpButton.addEventListener('click', function () {
        let currentTop = parseInt(generatedDiv.style.top) || 0;
        generatedDiv.style.top = (currentTop - 20) + 'px';
    });

    moveDownButton.addEventListener('click', function () {
        let currentTop = parseInt(generatedDiv.style.top) || 0;
        generatedDiv.style.top = (currentTop + 20) + 'px';
    });

    let generateButton = document.getElementById('generateButton');
    generateButton.insertAdjacentElement('afterend', moveUpButton);
    generateButton.insertAdjacentElement('afterend', moveDownButton);

document.getElementById('generateButton').addEventListener('click', generateDiv);
