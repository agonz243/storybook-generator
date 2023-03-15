// story text
let sentences = [
    "Once upon a time, there was a child, who went on vacation to a place", 
    "The child discovered a magic item that would bring peace",
    "But the item needed a key to be unlocked",
    "THE END"];
let data;

let beginningText = [`One fine, interstellar morning, #hero# waltzed into the control room of Galactic Enterprise T-Ship 0345.| 
#hero# was part of the cleaning crew for the ships Time-inator 9000 the galaxy's first working time machine!| 
As usual, #heroThey# went about #heroTheir# usual routine, completing boring tasks like sweeping up #objects#, #objects#, 
and #objects# from the Time-inator's platform|Suddenly, #hero# tripped over some #objects# and crashed into the Time-inator's controls!| 
With a loud BUZZZ and a few CLINKS and CLANGS, the machine turned on with a bright flash!`]

let words =
{
    story: {
        "origin": ["#[#setPronouns#][#setSetting#][hero:#name#]story#"],
        "story": ["#data#|#beginning#|#introduction#"],
        "data": ['{"setting": "#setting#"}'],
        "beginning": [],
        "introduction": ["After a rough tumble, #hero# opened #heroTheir# eyes and was shocked to find a #setting# before #heroThem#."],
        "middle-intro": ["As #hero# shook off #heroTheir# confusion, a steady rumble caught #heroTheir# attention.", 
            "While #hero# was still finding #heroTheir# bearings #heroThey# sensed something and quickly looked up at their surroundings.",
            "#heroThey froze as they noticed a towering shadow looming behind them."],
        "middle-plot": [ "#heroThey# stood in awe as #heroThey# gazed at a pack of fluffy T-rexes bounding after their prey"],
        "name": ["Aaron,Anika,Julie,Justin,Graham"],
        "setPronouns": ["[heroThey:they][heroThem:them][heroTheir:their][heroTheirs:theirs]",
            "[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]",
            "[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]"],
        "setSetting": ["[setting:prehistoric land]", "[setting:futuristic city]", "[setting:victorian castle]"],

        "objects": ["dinosaur bones", "medieval armor", "robot parts"]
    }
};

let grammar;


function loadGrammar() {
    // Set beginning text 
    words.story.beginning = beginningText;

    grammar = tracery.createGrammar(words["story"]);
    let raw = grammar.flatten('#origin#');

    sentences = raw.split("|");
    data = sentences.shift();
    data = JSON.parse(data);
}