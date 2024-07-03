function setup() {
  let canvas = createCanvas(700, 700);
  canvas.parent(document.querySelector('.chess-board-container'));
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  boardSize = 8;
  let squareSize = height / boardSize;

  for (let x = squareSize / 2; x < height; x += squareSize) {
    for (let y = squareSize / 2; y < width; y += squareSize) {
      // calculate column index
      const col = Math.floor(x / squareSize);
      // calculate row index
      const row = Math.floor(y / squareSize);

      // sets colour for current square
      if ((row + col) % 2 === 0) {
        fill("white");
      } else {
        fill("blue");
      }

      // applies transformations and draws squares
      push();
      translate(x, y);
      rotate(mouseX / 2);
      scale(mouseY / height);
      rect(0, 0, squareSize, squareSize);
      pop();
    }
  }
}