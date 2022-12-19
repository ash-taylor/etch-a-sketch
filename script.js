const sizeButton = document.querySelector('#grid-size');
const gridContainer = document.querySelector('.grid-container');
let pixel = null;

setSize(100);

const pixels = document.querySelectorAll('.pixel');

sizeButton.addEventListener('click', () => {
  let n = 0;

  do {
    n = parseInt(prompt('Grid size: '));
  }
  while (n < 1 || n > 100)

  setSize(n);
})

function setSize (n) {
  gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${n}, 1fr)`;

  for (let i = 0; i < (n ** 2); i++) {
    pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.setAttribute('id', `pixel-${i}`);
    pixel.style.backgroundColor = '#EEEEEE';
    gridContainer.appendChild(pixel);
  }
}

pixels.forEach((pixel) => {
  pixel.addEventListener('mouseover', () => pixel.style.backgroundColor = 'black')
})