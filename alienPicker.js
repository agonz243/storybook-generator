function loadAlienSelector() {
    // loops through json object to add images
    for (const color in aliens) {
        aliens[color]["normal"]["body"] = loadImage('assets/character/body/' + color + '_normal_body.png');
        aliens[color]["normal"]["head"] = loadImage('assets/character/head/' + color + '_normal_head.png');
        for (const eye in aliens[color]["normal"]["eyes"]) {
            aliens[color]["normal"]["eyes"][eye] = loadImage('assets/character/eyes/' + eye + 'Eyes.png');
        }
        for (const mouth in aliens[color]["normal"]["mouths"]) {
            aliens[color]["normal"]["mouths"][mouth] = loadImage('assets/character/mouths/' + mouth + '.png');
        }
    }
}

function loadAlien() {
    for (const key in aliens[currColor][currCostume]) {
        // loads only necessary costume for head and body
        if (key === "head" || key === "body") {
            aliens[currColor][currCostume][key] = loadImage('assets/character/' + key + '/' + currColor + '_' + currCostume + '_' + key + '.png');
        // loads facial expressions based on eyes and mouth
        } else {
            aliens[currColor][currCostume][key][currEye][currMouth] = loadImage('assets/character/expressions/' + key + '_' + currEye + '_' + currMouth + '.png');
        }
    }
}

function setUpCharacterButtons() {
    // color next button
    button1 = createButton('→');
    // style button
    styleButton(button1);
    // set position
    button1.position(width / 2 - 150 - button1.width, height / 2 + 100 - button1.height);
    // add function for on button click
    button1.mousePressed(nextColor);

    // mouth next button
    button2 = createButton('→');
    // style button
    styleButton(button2);
    // set position
    button2.position(width / 2 - 150 - button2.width, height / 2 - 20 - button2.height);
    // add function for on button click
    button2.mousePressed(nextMouth);

    // eye next button
    button3 = createButton('→');
    // style button
    styleButton(button3);
    // set position
    button3.position(width / 2 - 150 - button3.width, height / 2 - 80 - button3.height);
    // add function for on button click
    button3.mousePressed(nextEye);

    // color prev button
    button4 = createButton('←');
    // style button
    styleButton(button4);
    // set position
    button4.position(120 - button4.width, height / 2 + 100 - button4.height);
    // add function for on button click
    button4.mousePressed(prevColor);

    // mouth prev button
    button5 = createButton('←');
    // style button
    styleButton(button5);
    // set position
    button5.position(120 - button5.width, height / 2 - 20 - button5.height);
    // add function for on button click
    button5.mousePressed(prevMouth);

    // eye prev button
    button6 = createButton('←');
    // style button
    styleButton(button6);
    // set position
    button6.position(120 - button6.width, height / 2 - 80 - button6.height);
    // add function for on button click
    button6.mousePressed(prevEye);
}

// remove buttons
function hideCharacterButtons() {
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    button5.remove();
    button6.remove();
}

function nextColor() {
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    currColor = colors[colorIndex];
}

function nextMouth() {
    mouthIndex++;
    if (mouthIndex >= mouths.length) {
        mouthIndex = 0;
    }
    currMouth = mouths[mouthIndex];
}

function nextEye() {
    eyeIndex++;
    if (eyeIndex >= eyes.length) {
        eyeIndex = 0;
    }
    currEye = eyes[eyeIndex];
}

function prevColor() {
    colorIndex--;
    if (colorIndex < 0) {
        colorIndex = colors.length - 1;
    }
    currColor = colors[colorIndex];
}

function prevMouth() {
    mouthIndex--;
    if (mouthIndex < 0) {
        mouthIndex = mouths.length - 1;
    }
    currMouth = mouths[mouthIndex];
}

function prevEye() {
    eyeIndex--;
    if (eyeIndex < 0) {
        eyeIndex = eyes.length - 1;
    }
    currEye = eyes[eyeIndex];
}