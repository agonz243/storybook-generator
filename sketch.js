// Author: Anika Mahajan, Aaron Gonzales, Graham Miller, Justin Beedle, Julie Khou
// Date: March 20, 2023
// Purpose: Storybook Generator for CMPM 169 Team 7's Final Project

// GLOBAL VARIABLES

// states on what to display
let states = ["character", "story"];
let state;

// variables for alien image
let colors = ["yellow", "red", "blue", "green"];
let colorIndex;
let currColor;

let currCostume;

let expressions = ["happy", "happy", "happy", "shocked", "shocked", "shocked", "confused", "shocked", "shocked", "happy", "happy", "sad", "happy"];
let expressionIndex;
let currExpression;

let eyes = ["big", "small", "tight"];
let eyeIndex;
let currEye;

let mouths = ["crunch", "wide", "squiggle"];
let mouthIndex;
let currMouth;

// variables from tracery
let username;
let setting;

// checks if story scene is set up yet
let isSetup;

function preload() {
  // load font
  crayonFont = loadFont('assets/fonts/DK Cool Crayon.ttf');
  // load images
  loadAlienSelector();
}

function setup() {
  // set up canvas
  textFont(crayonFont);
  createCanvas(1280, 720);
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

function draw() {
  switch (state) {
    case ("character"):
      // draw parts of alien
      image(aliens[currColor][currCostume]["body"], 150, 50);
      image(aliens[currColor][currCostume]["head"], 150, 50);
      image(aliens[currColor][currCostume]["eyes"][currEye], 150, 50);
      image(aliens[currColor][currCostume]["mouths"][currMouth], 150, 50);

      // title text
      textAlign(CENTER);
      textSize(80);
      fill('white');
      text("Character Maker", width / 2 - 50, 80);
      break;
    case ("story"):
      if (!isSetup) {
        // check inputs before loading grammar
        words.story.name = [username];
        pronounInput();
        loadGrammar();

        // hide buttons
        hideInput();
        hideCharacterButtons();

        // pick background and costume for story
        setting = data["setting"].split(' ').join('_');
        pickBackground(setting);
        currCostume = setting;

        // set up expressions
        expressionIndex = 0;
        currExpression = expressions[expressionIndex];

        // load expressions and alien costume
        loadAlien();

        // finish set up
        isSetup = true;
      }

      // draw background
      image(bg, 0, 0);

      // Draw text box rectangle
      rectMode(CENTER);
      push()
      noStroke();
      fill(95, 97, 99, 200);
      rect(width / 2, height - 50, width, height / 5, 20, 20);
      pop();

      // draw story text based on index
      textAlign(CENTER);
      textSize(24);
      fill("white");
      text(sentences[index], width / 2, height - 20, width * 0.9, height * 0.2);

      // draw alien
      image(aliens[currColor][currCostume]["body"], width/2 - 50, 2 * height / 4 - 50, aliens[currColor][currCostume]["body"].width / 2, aliens[currColor][currCostume]["body"].height / 2);
      image(aliens[currColor][currCostume]["head"], width/2 - 50, 2 * height / 4 - 50, aliens[currColor][currCostume]["head"].width / 2, aliens[currColor][currCostume]["head"].height / 2);
      image(aliens[currColor][currCostume][currExpression][currEye][currMouth], width/2 - 50, 2 * height / 4 - 50, aliens[currColor][currCostume]["head"].width / 2, aliens[currColor][currCostume]["head"].height / 2);

      // character.draw(positions[index], 3*height/4);
      break;
  }
}