// 169 Group Project
// Personalized Input for Name and Prounouns
// To Do:
//     Store pronouns somewhere ?
//     Button to start the story
//     Button to start music
//     Resolution sentence
//     Character

function setup() {
  createCanvas(800, 800);

  nameInput = createInput();
  nameInput.position(20, 65);

  nameButton = createButton("submit");
  nameButton.position(nameInput.x + nameInput.width, 65);
  nameButton.mousePressed(greet);

  greeting = createElement("h1", "What is your name?");
  greeting.position(20, 2);

  textAlign(CENTER);
  textSize(50);

  pronounsQ = createElement("h1", "What are your pronouns?");
  pronounsQ.position(20, 80);

  heButton = createButton("he/him", " he/him ");
  heButton.position(20, 143);
  heButton.mousePressed(heText);

  sheButton = createButton("she/her", "she/her ");
  sheButton.position(85, 143);
  sheButton.mousePressed(sheText);

  theyButton = createButton("they/them", "they/them ");
  theyButton.position(153, 143);
  theyButton.mousePressed(theyText);
  
  pNouns = createElement("h2", "Pronouns: ");
  pNouns.position(20, 155);
  
  pN = "Pronouns: ";
}

function draw() {
  background(220);
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

function heText() {
  let p = heButton.value();
  pNouns.html(pN + p);
  pN = pN + p;
  print(pN);
}

function sheText() {
  let s = sheButton.value();
  pNouns.html(pN + s);
  pN = pN + s;
}

function theyText() {
  let t = theyButton.value();
  pNouns.html(pN + t);
  pN = pN + t;
}
