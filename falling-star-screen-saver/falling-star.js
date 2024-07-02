// config
let starArray = [];
const maxStars = 10; // sets maximum number of stars drawn
const colourStepInc = 3;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight); // sets suze of canvas to fill window
  canvas.elt.style.position = 'absolute';
  canvas.elt.style.zIndex = '-1';
  // populates starArray with maxStars number of star objects
  for (let starCount = 0; starCount < maxStars; starCount++) {
    starArray.push(createRandomStar());
  }

  colorMode(HSB); // sets the color mode
  addBurgerMenuControls();
}

function draw() {
  let backgroundColor = canvasBackgroundColor.selected();
  background(backgroundColor);

  let outlineRedValue = outlineRedSlider.value();
  let outlineGreenValue = outlineGreenSlider.value();
  let outlineBlueValue = outlineBlueSlider.value();

  // enables or disables outlines
  if (outlineToggleCheckbox.checked()) {
    colorMode(RGB);
    stroke(outlineRedValue, outlineGreenValue, outlineBlueValue);
    strokeWeight(2);
    colorMode(HSB);
  } else {
    noStroke();
  }


  // draws each starObj and trail
  starArray = starArray.map((starObj) => {
      starTrail({
        centerX: starObj.centerX,
        centerY: starObj.centerY,
        innerRadius: starObj.innerRadius,
        colorOffset: starObj.colorOffset
      });
      star({
        centerX: starObj.centerX,
        centerY: starObj.centerY,
        innerRadius: starObj.innerRadius,
        outerRadius: starObj.outerRadius,
        numPoints: starObj.numPoints,
        rotation: starObj.rotation,
        colorOffset: starObj.colorOffset,
      });
    

    // update y-coordinate of star based on fall speed
    starObj.centerY += starObj.fallSpeed;

    // update the stars rotation
    starObj.rotation += starObj.rotationSpeed;

    starObj.colorOffset = starObj.colorOffset >= 360 ? 0 : starObj.colorOffset + colourStepInc;

    // re-randomizes stars when they reach the bottom of the window
    if (starObj.centerY - (starObj.outerRadius + windowHeight / 4) > windowHeight) {
      return createRandomStar();
    }
    return starObj;
  });
}

function star({
  centerX,
  centerY,
  innerRadius,
  outerRadius,
  numPoints,
  rotation,
  colorOffset,
}) {
  // cycling raindow effect
  fill(colorOffset, 100, 100);
  

  let angle = TWO_PI / numPoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = rotation; a < TWO_PI + rotation; a += angle) {
    let pointX = centerX + cos(a) * outerRadius;
    let pointY = centerY + sin(a) * outerRadius;
    vertex(pointX, pointY);
    pointX = centerX + cos(a + halfAngle) * innerRadius;
    pointY = centerY + sin(a + halfAngle) * innerRadius;
    vertex(pointX, pointY);
  }
  endShape(CLOSE);
}

function createStarObject(
  centerX,
  centerY,
  innerRadius,
  outerRadius,
  numPoints,
  fallSpeed,
  rotation,
  rotationSpeed,
  colorOffset,
) {
  return {
    centerX,
    centerY,
    innerRadius,
    outerRadius,
    numPoints,
    fallSpeed,
    rotation,
    rotationSpeed,
    colorOffset,
  };
}

function createRandomStar() {
  let centerX = random(windowWidth);
  let innerRadius = random(10, 30);
  let outerRadius = random(40, 80);
  let centerY = 0 - outerRadius;
  let numPoints = floor(random(5, 10));
  let fallSpeed = random(1, 3);
  let rotation = random(TWO_PI);
  let rotationSpeed = random(-0.05, 0.05);
  let colorOffset = random(360);

  return createStarObject(
    centerX,
    centerY,
    innerRadius,
    outerRadius,
    numPoints,
    fallSpeed,
    rotation,
    rotationSpeed,
    colorOffset,
  );
}

function starTrail({ centerX, centerY, innerRadius, colorOffset }) {
  let maxTrailLength;
  
  if (centerY < 0) {
    maxTrailLength = centerY * 2 + windowHeight / 4;
  } else {
    maxTrailLength = min(centerY * 2, windowHeight / 4);
  }
  
  fill((colorOffset + 180) % 360, 100, 100);
  triangle(centerX, centerY - maxTrailLength, centerX - innerRadius / 1.5, centerY, centerX + innerRadius / 1.5, centerY);
}

function addBurgerMenuControls () {
    // stroke toggle checkbox 
    outlineToggleCheckbox = createCheckbox('Outline', true);
    outlineToggleCheckbox.parent('sidebar');
    outlineToggleCheckbox.addClass('options-text');
  
    // stoke color selection sliders
    // red
    outlineRedSlider = createSlider(0, 255, random(0, 255));
    outlineRedSlider.parent('sidebar');
    outlineRedSlider.size(80);
    outlineRedSlider.addClass('red-slider outline-slider');
    // green
    outlineGreenSlider = createSlider(0, 255, random(0, 255));
    outlineGreenSlider.parent('sidebar');
    outlineGreenSlider.size(80);
    outlineGreenSlider.addClass('green-slider outline-slider');
    // blue
    outlineBlueSlider = createSlider(0, 255, random(0, 255));
    outlineBlueSlider.parent('sidebar');
    outlineBlueSlider.size(80);
    outlineBlueSlider.addClass('blue-slider outline-slider');

    // select background color from pre-determined list
    canvasBackgroundColor = createSelect();
    canvasBackgroundColor.parent('sidebar');
    canvasBackgroundColor.addClass('form-select');
    //add color options
    canvasBackgroundColor.option('black');
    canvasBackgroundColor.option('yellow');
    canvasBackgroundColor.option('purple');
    canvasBackgroundColor.option('pink');
    canvasBackgroundColor.option('teal');
    canvasBackgroundColor.option('maroon');
    // sets the default option
    canvasBackgroundColor.selected('black'); 

    // buttons to increment and decrement num of stars in starArray

    
}
