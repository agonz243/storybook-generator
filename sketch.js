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

// states on what to display
let states = ["character", "story"];
let state;

let user;
let heads = ["red", "blue", "green"];
let bodies = ["red", "blue", "green"];
let legs = ["red", "blue", "green"];
let curHead;
let curBody;
let curLegs;

let username;

let isSetup;

let alien;

function setup() {
  username = "Gooby";
  state = "character";
  createCanvas(1280, 720);
  background('#ECA869');
  // positions for character
  positions = [width/4, width/2, 3*width/4, width*2];
  
  // set story index
  index = 0;

  curHead = 0;
  curBody = 0;
  curLegs = 0;

  // create and style next button
  setUpButton();
  setUpInput();
  // console.log(username);
  // character = new StoryCharacter("white", "white", "white");
  // user = new Character(width/2, height/2);

  alien = loadImage(('assets/character/Alien.png'));

  isSetup = false;
}

function draw() {
  switch(state){
    case("character"):
      image(alien, 150, 50);
      
      textAlign(CENTER);
      textSize(80);
      fill('white');
      text("Character Maker", width/2 - 80, 80);
      break;
    case("story"):
      if(!isSetup) {
        // check inputs before loading grammar
        words.story.name = [username];
        pronounInput();
        loadGrammar();
        // hide buttons
        hideInput();
  
        // pick background for story
        pickBackground(data["setting"]);
        isSetup = true;
      }
      
      // draw background
      image(bg, 0,0);
      rectMode(CENTER);
      // Draw text box rectangle
      push()
      
      noStroke();
      fill(95, 97, 99, 200);
      rect(width/2, height - 50, width, height/5, 20, 20);
      pop();
      
      // draw story text based on index
      textAlign(CENTER);
      textSize(24);
      fill("white");
      text(sentences[index], width/2, height - 70, width * 0.9, height * 0.1);
      image(alien, 150, 2*height/4 - 50, alien.width / 2, alien.height / 2);
      
      // character.draw(positions[index], 3*height/4);
      break;
  }
  
}

function mousePressed() {
  characterClicked();
}
