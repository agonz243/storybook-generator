function setUpInput() {
    // sets up name area
    textSize(20);
    fill("white");
    text("What's your name?: ", 2 * width / 4, height / 2);
    nameInput = createInput();
    nameInput.position(2 * width / 4 + 200, height / 2 - 18);

    nameButton = createButton("submit");
    nameButton.position(nameInput.x + nameInput.width, height / 2 - 18);
    nameButton.mousePressed(nameChange);

    // sets up pronoun area
    text("What are your pronouns?: ", 2 * width / 4, height / 2 + 50);

    // sets up checkboxes and styles them
    heButton = createCheckbox("he/him");
    styleCheckbox(heButton);
    heButton.position(2 * width / 4 + 220 + 50, height / 2 + 35);

    sheButton = createCheckbox("she/her");
    styleCheckbox(sheButton);
    sheButton.position(2 * width / 4 + 220 + 123, height / 2 + 35);

    theyButton = createCheckbox("they/them");
    styleCheckbox(theyButton);
    theyButton.position(2 * width / 4 + 220 + 203, height / 2 + 35);
}

function styleCheckbox(b){
    b.style("color: white");
    b.style("font-family: sans-serif");
}

function nameChange() {
    // save new name input when user presses submit button
    username = nameInput.value();
}

// saves pronouns from checkboxes
function pronounInput() {
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
    // base case for pronouns
    if (!heButton.checked() && !sheButton.checked() && !theyButton.checked()) {
        words.story.setPronouns.push("[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]");
        words.story.setPronouns.push("[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]");
        words.story.setPronouns.push("[heroThey:they][heroThem:them][heroTheir:their][heroTheirs:theirs]");
    }
}

// hide all buttons
function hideInput() {
    nameInput.hide();
    nameButton.hide();
    heButton.hide();
    sheButton.hide();
    theyButton.hide();
}