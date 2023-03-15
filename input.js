function setUpInput() {
    textSize(20);
    fill("white");
    text("What's your name?: ", 2 * width / 4, height / 5);
    nameInput = createInput();
    nameInput.position(2 * width / 4 + 180, height / 5 - 18);

    nameButton = createButton("submit");
    nameButton.position(nameInput.x + nameInput.width, height / 5 - 18);
    nameButton.mousePressed(nameChange);

    text("What are your pronouns?: ", 2 * width / 4, height / 5 + 50);

    heButton = createCheckbox("he/him");
    heButton.position(2 * width / 4 + 220 + 20, height / 5 + 35);

    sheButton = createCheckbox("she/her");
    sheButton.position(2 * width / 4 + 220 + 85, height / 5 + 35);

    theyButton = createCheckbox("they/them");
    theyButton.position(2 * width / 4 + 220 + 153, height / 5 + 35);
}

function nameChange() {
    username = nameInput.value();
}

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
    if (!heButton.checked() && !sheButton.checked() && !theyButton.checked()) {
        words.story.setPronouns.push("[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]");
        words.story.setPronouns.push("[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]");
        words.story.setPronouns.push("[heroThey:they][heroThem:them][heroTheir:their][heroTheirs:theirs]");
    }
}

function hideInput() {
    nameInput.hide();
    nameButton.hide();
    heButton.hide();
    sheButton.hide();
    theyButton.hide();
}