// Author: Anika Mahajan
// Date: March 7, 2023
// Purpose: Story Prototype for CMPM 169 Team 7's Final Project

// Image Attributions
// castle background: https://wallpaperaccess.com/cartoon-castle
// swamp background: Carolina - https://www.pinterest.co.uk/pin/559994534901761192/
// forest background: https://www.youtube.com/watch?v=z-qr_fxv18o

// expression eyes mouth


// GLOBAL VARIABLES

// states on what to display
let states = ["character", "story"];
let state;

// variables for alien image
let colors = ["yellow", "red", "blue", "green"];
let colorIndex;
let currColor;

let currCostume;


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
  crayonFont = loadFont('assets/fonts/DK Cool Crayon.ttf');
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
      image(aliens[currColor][currCostume]["body"], 150, 50);
      image(aliens[currColor][currCostume]["head"], 150, 50);
      image(aliens[currColor][currCostume]["eyes"][currEye], 150, 50);
      image(aliens[currColor][currCostume]["mouths"][currMouth], 150, 50);

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

        // pick background for story
        setting = data["setting"].split(' ').join('_');
        pickBackground(setting);
        // currCostume = setting;
        loadAlien();
        isSetup = true;
      }

      // draw background
      image(bg, 0, 0);
      rectMode(CENTER);
      // Draw text box rectangle
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
      image(aliens[currColor][currCostume]["body"], 150, 2 * height / 4 - 50, aliens[currColor][currCostume]["body"].width / 2, aliens[currColor][currCostume]["body"].height / 2);
      image(aliens[currColor][currCostume]["head"], 150, 2 * height / 4 - 50, aliens[currColor][currCostume]["head"].width / 2, aliens[currColor][currCostume]["head"].height / 2);

      // character.draw(positions[index], 3*height/4);
      break;
  }
}