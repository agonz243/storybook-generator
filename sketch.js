// Author: Anika Mahajan
// Date: March 7, 2023
// Purpose: Story Prototype for CMPM 169 Team 7's Final Project

// Image Attributions
// castle background: https://wallpaperaccess.com/cartoon-castle
// swamp background: Carolina - https://www.pinterest.co.uk/pin/559994534901761192/
// forest background: https://www.youtube.com/watch?v=z-qr_fxv18o


// GLOBAL VARIABLES

// character
let character;
let positions;


function setup() {
  createCanvas(1280, 720);
  // positions for character
  positions = [width/4, width/2, 3*width/4, width*2];
  
  // set story index
  index = 0;
  // create and style next button
  setUpButton();
  character = new Character("white", "white", "white");
  loadGrammar();
  
  
  // pick background for story
  pickBackground(data["setting"]);
}

function draw() {
  // draw background
  image(bg, 0,0);
  
  // draw story text based on index
  textAlign(CENTER);
  textSize(24);
  fill("white");
  text(sentences[index], width/2, height - 50);
  
  character.draw(positions[index], 3*height/4);
}

function mousePressed() {
  characterClicked();
}





