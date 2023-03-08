// Author: Anika Mahajan
// Date: March 7, 2023
// Purpose: Story Prototype for CMPM 169 Team 7's Final Project

// Image Attributions
// castle background: https://wallpaperaccess.com/cartoon-castle
// swamp background: Carolina - https://www.pinterest.co.uk/pin/559994534901761192/
// forest background: https://www.youtube.com/watch?v=z-qr_fxv18o


// GLOBAL VARIABLES

// background
let backgrounds = ["castle", "swamp", "city"];
let bg;

// story text
let sentences = [
  "Once upon a time, there was a child, who went on vacation to a place", 
  "The child discovered a magic item that would bring peace",
  "But the item needed a key to be unlocked",
  "THE END"];
let index;

// character
let character;
let positions;
let colors = [
  "#FBF8CC",
  "#FDE4CF",
  "#FFCFD2",
  "#F1C0E8",
  "#CFBAF0",
  "#A3C4F3",
  "#90DBF4",
  "#8EECF5",
  "#98F5E1",
  "#B9FBC0",
  "#f8f9fa",
];

function setup() {
  createCanvas(1280, 720);
  // positions for character
  positions = [width/4, width/2, 3*width/4, width*2];
  
  // pick background for story
  pickBackground(random(backgrounds));
  // set story index
  index = 0;
  // create and style next button
  setUpButton();
  character = new Character("white", "white", "white");
}

function draw() {
  // draw background
  image(bg, 0,0);
  
  // draw story text based on index
  textAlign(CENTER);
  textSize(28);
  fill("white");
  text(sentences[index], width/2, height - 50);
  
  character.draw(positions[index], 3*height/4);
}

// sets background image based on background string
function pickBackground(bgName) {
  if(bgName === "castle") {
    bg = loadImage('assets/background/castle.jpg');
  } else if (bgName === "swamp") {
    bg = loadImage('assets/background/swamp.jpg');
  } else {
    bg = loadImage('assets/background/forest.jpg');
  }
}

function mousePressed() {
  // create click box for character
  if(mouseX < positions[index] + 20 && 
     mouseX > positions[index] - 20 &&
     mouseY > 3*height/4 - 70 &&
     mouseY < 3*height/4 + 45) {
    // change color of character if clicked
    character.head = random(colors);
    character.body = random(colors);
    character.legs = random(colors);
  }
}

// creates and styles button
function setUpButton() {
  button = createButton('→');
  
  // style button
  button.style("font-size: 32px");
  button.style("background: rgba(255, 165, 0, 0)");
  button.style("border: none");
  button.style("color: white");
  
  // change color on hover
  button.mouseOver(() => button.style("color: black"));
  button.mouseOut(() => button.style("color: white"));
  
  // set position
  button.position(width - 50 - button.width, height - 55 - button.height);
  
  // add function for on button click
  button.mousePressed(nextPage);
}

// increments the story to next page
function nextPage() {
  if(index < sentences.length - 1) {
    index++;
  } else {
    // insert code to change to end screen
  }
}

class Character {
  // currently takes in colors for head, body, and legs
  // will be changed to take in images
  constructor(head, body, legs) {
    this.head = head;
    this.body = body;
    this.legs = legs;
  }
  
  draw(x, y) {
    // draws legs with leg color
    fill(this.legs);
    ellipse(x - 10, y + 80 - 50, 10, 30);
    ellipse(x + 10, y + 80 - 50, 10, 30);
    
    // draws body with body color
    fill(this.body);
    ellipse(x, y + 40 - 50, 30, 70);
    
    // draws head with head color
    fill(this.head);
    ellipse(x, y - 50, 40);
  }
}

