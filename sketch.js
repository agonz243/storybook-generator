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

function setup() {
  username = "Unknown";
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
  console.log(username);
  character = new StoryCharacter("white", "white", "white");
  user = new Character(width/2, height/2);

  isSetup = false;
}

function draw() {
  switch(state){
    case("character"):
    
      push();
      fill('white');
      text("Character Maker", width/2 - 40, 10);
      pop();
      user.show();
      
      push();
      // Head Buttons
      leftHeadButton = new Button(110, 146, 15, "white");
      leftHeadButton.hover("grey");
      leftHeadButton.show();
      rightHeadButton = new Button(275, 146, 15, "white");
      rightHeadButton.hover("grey");
      rightHeadButton.show();
      
      // Body Buttons
      leftBodyButton = new Button(110, 190, 15, "white");
      leftBodyButton.hover("grey");
      leftBodyButton.show();
      rightBodyButton = new Button(275, 190, 15, "white");
      rightBodyButton.hover("grey");
      rightBodyButton.show();
      
      // Leg Buttons
      leftLegButton = new Button(110, 230, 15, "white");
      leftLegButton.hover("grey");
      leftLegButton.show();
      rightLegButton = new Button(275, 230, 15, "white");
      rightLegButton.hover("grey");
      rightLegButton.show();
      
      // Randomize Button
      randButton = new Button(width/2, (height * 4)/5, 30, "white");
      randButton.hover("grey");
      randButton.show();
      pop();
      break;
    case("story"):
      if(!isSetup) {
        // check inputs before loading grammar
        words.story.name = [username];

        words.story.setPronouns = [];
        if (heButton.checked()) {
          words.story.setPronouns.push("[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]");
        }
        if (sheButton.checked()) {
          words.story.setPronouns.push("[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]");
        }
        if (theyButton.checked()) {
          words.story.setPronouns.push("[heroThey:they][heroThem:them][heroTheir:their][heroTheirs:theirs]");
        }
        if(!heButton.checked() && !sheButton.checked() && !theyButton.checked()) {
          words.story.setPronouns.push("[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]");
          words.story.setPronouns.push("[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]");
          words.story.setPronouns.push("[heroThey:they][heroThem:them][heroTheir:their][heroTheirs:theirs]");
        }
        
        
        loadGrammar();

        // hide buttons
        nameInput.hide();
        nameButton.hide();
        heButton.hide();
        sheButton.hide();
        theyButton.hide();
  
        // pick background for story
        pickBackground(data["setting"]);
        isSetup = true;
      }
      
      // draw background
      image(bg, 0,0);
      
      // draw story text based on index
      textAlign(CENTER);
      textSize(24);
      fill("white");
      text(sentences[index], width/2, height - 50);
      
      character.draw(positions[index], 3*height/4);
      break;
  }
  
}

function mousePressed() {
  characterClicked();
}



class Character{
  constructor(x, y){
    this.x = x;
    this.y = y;
    
    // character parts
    this.head = heads[curHead];
    this.torso = bodies[curBody];
    this.legs = legs[curLegs];
  }
  show(){
    this.head = heads[curHead];
    this.torso = bodies[curBody];
    this.legs = legs[curLegs];
    
    switch(this.legs){
      case("red"):
        fill('red');
        break;
      case("blue"):
        fill('blue');
        break;
      case("green"):
        fill('green');
        break;
    }
    // draw the legs
    ellipse(this.x - 10, this.y + 80 - 50, 10, 30);
    ellipse(this.x + 10, this.y + 80 - 50, 10, 30);
    
    switch(this.torso){
      case("red"):
        fill('red');
        break;
      case("blue"):
        fill('blue');
        break;
      case("green"):
        fill('green');
        break;
    }
    // draw the torse
    ellipse(this.x, this.y + 40 - 50, 30, 70); 
    
    switch(this.head){
      case("red"):
        fill('red');
        break;
      case("blue"):
        fill('blue');
        break;
      case("green"):
        fill('green');
        break;
    }
    // draw the head
    ellipse(this.x, this.y - 50, 40);
  }
}

class Button{
  constructor(x, y, w, c){
    // x & y coords or position
    this.x = x;
    this.y = y;
    
    // radius for circle
    this.w = w;
    this.c = c;
  }
  
  // drawing the button on screen
  show(){
    ellipse(this.x, this.y, this.w);
  }
  
  // when clicked function
  clicked(val, newScreen){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d < this.w / 2){
      if(newScreen == "start"){
        setup();
      }

      switch(val){
          
        case("hi"):
          screen = newScreen;
          if(curHead == 2){
            curHead = 0;
            break;
          } else{
            curHead ++;
            break;
          }
          // console.log("hi");
          break;
        case("hd"):
          screen = newScreen;
          if(curHead == 0){
            curHead = 2;
            break;
          } else{
            curHead --;
            break;
          }
          break;
        case("bi"):
          screen = newScreen;
          if(curBody == 2){
            curBody = 0;
            break;
          } else{
            curBody ++;
            break;
          }
          break;
        case("bd"):
          screen = newScreen;
          if(curBody == 0){
            curBody = 2;
            break;
          } else{
            curBody --;
            break;
          }
          break;
        case("li"):
          if(curLegs == 2){
            curLegs = 0;
            break;
          } else{
            curLegs ++;
            break;
          }
          break;
        case("ld"):
          screen = newScreen;
          screen = newScreen;
          if(curLegs == 0){
            curLegs = 2;
            break;
          } else{
            curLegs --;
            break;
          }
          break;
        case("rand"):
          curHead = floor(random(0, 3));
          curBody = floor(random(0, 3));
          curLegs = floor(random(0, 3));
          break
      }
    }
  }
  
  // when mouse is over the button
  hover(color){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d < this.w / 2){
      fill(color);
    } else{
      fill(this.c);
    }
  }
}


function greet() {
  const name = nameInput.value();
  greeting.html("Hello " + name + "!");
  nameInput.value("");

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}