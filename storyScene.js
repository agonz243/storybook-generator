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
        return index++;
      } else {
        // insert code to change to end screen
      }
      break;
  }

}

// sets background image based on background string
function pickBackground(bgName) {
  if (bgName === "victorian_castle") {
    bg = loadImage('assets/background/castle.jpg');
  } else if (bgName === "prehistoric_land") {
    bg = loadImage('assets/background/swamp.jpg');
  } else {
    bg = loadImage('assets/background/forest.jpg');
  }

  //bg = loadImage('assets/background/' + bgName +.jpg');
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
