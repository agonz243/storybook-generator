let index;

// background
let backgrounds = ["castle", "swamp", "futuristic city"];
let bg;

// creates and styles button
function setUpNextButton() {
  button = createButton('→');

  styleButton(button);

  // set position
  button.position(width - 50 - button.width, height - 55 - button.height);

  // add function for on button click
  button.mousePressed(nextPage);
}

// increments the story to next page
function nextPage() {
  switch (state) {
    case ("character"):
      state = "story";
      break;
    case ("story"):
      if (index < sentences.length - 1) {
        index++;
        expressionIndex++;
        currExpression = expressions[expressionIndex];
      } else {
        // call initial setup again
        textAlign(LEFT);
        background('#ECA869');

        // initialize variables
        username = "Gooby";
        state = "character";

        // positions for character
        positions = [width / 4, width / 2, 3 * width / 4, width * 2];

        // set story index
        index = 0;

        // set current info for alien
        colorIndex = 0;
        currColor = colors[colorIndex];
        eyeIndex = 0;
        currEye = eyes[eyeIndex];
        mouthIndex = 0;
        currMouth = mouths[mouthIndex];
        currCostume = "normal";

        // create and style buttons and inputs
        setUpNextButton();
        setUpCharacterButtons();
        setUpInput();

        isSetup = false;
      }
      break;
  }

}

// sets background image based on background string
function pickBackground(bgName) {
  bg = loadImage('assets/background/' + bgName + '.png');
}

function styleButton(b) {
  // style button
  b.style("font-size: 40px");
  b.style("background: rgba(255, 165, 0, 0)");
  b.style("border: none");
  b.style("color: white");
  // change color on hover
  b.mouseOver(() => b.style("color: black"));
  b.mouseOut(() => b.style("color: white"));
}
