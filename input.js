function setUpInput() {
    textSize(20);
    fill("white");
    text("What's your name?: ", 2*width/4, height/5);
    nameInput = createInput();
    nameInput.position(2*width/4 + 180, height/5 - 18);

    nameButton = createButton("submit");
    nameButton.position(nameInput.x + nameInput.width, height/5 - 18);
    nameButton.mousePressed(nameChange);

    text("What are your pronouns?: ", 2*width/4, height/5 + 50);

    heButton = createCheckbox("he/him");
    heButton.position(2*width/4 + 220 + 20, height/5 + 35);

    sheButton = createCheckbox("she/her");
    sheButton.position(2*width/4 + 220 + 85, height/5 + 35);

    theyButton = createCheckbox("they/them");
    theyButton.position(2*width/4 + 220 + 153, height/5 + 35);
}

function nameChange() {
    username = nameInput.value();
}