let screen = "char_maker";
let user;
let heads = [];
let bodies = [];
let legs = [];
let curHead;
let curBody;
let curLegs;
// ----------------------------------------

function setup() {
  createCanvas(400, 400);
  newGrammar();
  curHead = 0;
  curBody = 0;
  curLegs = 0;
  append(heads, "red");
  append(heads, "blue");
  append(heads, "green");
  append(bodies, "red");
  append(bodies, "blue");
  append(bodies, "green");
  append(legs, "red");
  append(legs, "blue");
  append(legs, "green");
  user = new Character(width/2, height/2);
}
// ------------------------------------------------------------------
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

// ------------------------------------------------------------------
function draw() {
  // background(220);
  switch(screen){
    case("start"):
      background('#FD8A8A');
      text("Start Screen", width/2 - 40, 10);
      startButton = new Button(width/2, height/2, 30);
      startButton.show(); 
      break;
      
    case("char_maker"):
      background('#ECA869');
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
  }
  // debugCords();
}
// ------------------------------------------------------------------
function createTraceryGrammar(grammar) {
  return tracery.createGrammar(grammar);
}

function flattenGrammar(myGrammar, phrase) {
  return myGrammar.flatten(phrase);
}

function mousePressed(){
  switch(screen){
    case("start"):
      startButton.clicked("char_maker");
      break;
    case("char_maker"):
      leftHeadButton.clicked("hi", "char_maker");
      rightHeadButton.clicked("hd", "char_maker");
      
      leftBodyButton.clicked("bi", "char_maker");
      rightBodyButton.clicked("bd", "char_maker");
      
      leftLegButton.clicked("li", "char_maker");
      rightLegButton.clicked("ld", "char_maker");
      
      randButton.clicked("rand", "char_maker");
      break;
  }
}

function debugCords(){
  push();
  fill('black');
  text(mouseX, mouseX + 15, mouseY);
  text(mouseY, mouseX + 15, mouseY + 25);
  pop();
}