const gridContainer = document.querySelector('.grid-container');
let slider = document.getElementById('grid-size');
let sliderOutput = document.getElementById('slider-output');
let pixels = document.querySelectorAll('.pixel');

sliderOutput.innerHTML = slider.value;
let size = slider.value;

let pixel = null;

setSize(size);

slider.oninput = function() {
  sliderOutput.innerHTML = this.value;
}

slider.onchange = function() {
  setSize(this.value);
}

function setSize (size) {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }

  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < (size ** 2); i++) {
    pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.setAttribute('id', `pixel-${i}`);
    pixel.style.opacity = "0.1";
    pixel.style.backgroundColor = 'black';
    gridContainer.appendChild(pixel);
  }

  pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => pixel.style.opacity = (parseFloat(pixel.style.opacity) + 0.1).toString())
  })
}
