let numSquares = 6;
let colors = [];
let pickedColor;

const squares = document.querySelectorAll('.square');
const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const modeButtons = document.querySelectorAll('.mode');

const generateRandomColors = num => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
};

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

const pickColor = () => {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

const reset = () => {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = '';
  resetButton.textContent = 'New Colors';
  squares.forEach((square, i) => {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  });
  h1.style.backgroundColor = 'steelblue';
};

setUpSquares = () => {
  squares.forEach((square, i) => {
    squares[i].addEventListener('click', function() {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        messageDisplay.style.color = clickedColor;
        resetButton.textContent = 'Play Again?';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again!';
        messageDisplay.style.color = 'red';
      }
    });
  });
};

changeColors = colors => {
  squares.forEach((square, i) => {
    squares[i].style.backgroundColor = colors;
  });
};

setUpModeButtons = () => {
  modeButtons.forEach((button, i) => {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      modeButtons[2].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy'
        ? (numSquares = 3)
        : this.textContent === 'Medium'
        ? (numSquares = 6)
        : (numSquares = 9);
      reset();
    });
  });
};

resetButton.addEventListener('click', function() {
  reset();
});

init = () => {
  setUpModeButtons();
  setUpSquares();
  reset();
};

init();
