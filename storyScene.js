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

let index;

// background
let backgrounds = ["castle", "swamp", "futuristic city"];
let bg;

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
      return index++;
    } else {
      // insert code to change to end screen
    }
}

// sets background image based on background string
function pickBackground(bgName) {
    if(bgName === "victorian castle") {
      bg = loadImage('assets/background/castle.jpg');
    } else if (bgName === "prehistoric land") {
      bg = loadImage('assets/background/swamp.jpg');
    } else {
      bg = loadImage('assets/background/forest.jpg');
    }
  }

function characterClicked() {
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