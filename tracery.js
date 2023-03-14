// story text
let sentences = [
    "Once upon a time, there was a child, who went on vacation to a place", 
    "The child discovered a magic item that would bring peace",
    "But the item needed a key to be unlocked",
    "THE END"];
let data;

let words =
{
    story: {
        "origin": ["#[#setPronouns#][#setSetting#][hero:#name#]story#"],
        "story": ["#data#|#introduction#"],
        "data": ['{"setting": "#setting#"}'],
        "introduction": ["After a rough tumble, #hero# opened #heroTheir# eyes and was shocked to find a #setting# before #heroThem#."],
        "middle-intro": ["As #hero# shook off #heroTheir# confusion, a steady rumble caught #heroTheir# attention.", 
            "While #hero# was still finding #heroTheir# bearings #heroThey# sensed something and quickly looked up at their surroundings.",
            "#heroThey froze as they noticed a towering shadow looming behind them."],
        "middle-plot": [ "#heroThey# stood in awe as #heroThey# gazed at a pack of fluffy T-rexes bounding after their prey"],
        "name": ["Aaron,Anika,Julie,Justin,Graham"],
        "setPronouns": ["[heroThey:they][heroThem:them][heroTheir:their][heroTheirs:theirs]",
            "[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]",
            "[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]"],
        "setSetting": ["[setting:prehistoric land]", "[setting:futuristic city]", "[setting:victorian castle]"]
    }
};

let grammar;


function loadGrammar() {
    grammar = tracery.createGrammar(words["story"]);
    let raw = grammar.flatten('#origin#');

    sentences = raw.split("|");
    data = sentences.shift();
    data = JSON.parse(data);
}