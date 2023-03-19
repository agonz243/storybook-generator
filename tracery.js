// story text
let sentences = [
    "Once upon a time, there was a child, who went on vacation to a place", 
    "The child discovered a magic item that would bring peace",
    "But the item needed a key to be unlocked",
    "THE END"];
let data;

let beginningText = [`One fine, interstellar morning, #hero# waltzed into the control room of Galactic Enterprise T-Ship 0345. 
|#hero# was part of the cleaning crew for the ship's #machine# the galaxy's first working time machine! 
|As usual, #heroThey# completed boring tasks like sweeping up #objects#, #objects#, 
and #objects# from the machine's platform.|Suddenly, #hero# tripped over some #objects# and crashed into the controls! 
|With a loud #noise# and a few #noise.s# and #noise.s#, the machine turned on with a bright flash!`]

let intermissionText = [`This didn't make any sense! The time machine must have jumbled up places, people and things from all sorts of eras!
|With a shake of the head and a slap on the cheeks, #hero# snapped back into focus.`]

let words =
{
    story: {
        "origin": ["#[#setPronouns#][#setSetting#][hero:#name#][#setMachine#]story#"],
        "story": ["#data#|#beginning#|#introduction#|#middle-intro#|#middle-plot#|#intermission#|#end-plot#"],
        "data": ['{"setting": "#setting#"}'],
        "beginning": [],
        "introduction": ["After a rough tumble, #hero# opened #heroTheir# eyes and was shocked to find a #setting# before #heroThem#!"],
        "middle-intro": ["As #hero# shook off #heroTheir# confusion, a steady rumble caught #heroTheir# attention.", 
            "While #hero# was still finding #heroTheir# bearings #heroThey# sensed something and quickly looked up at #heroTheir# surroundings.",
            "#heroThey# froze as #heroThey# noticed a towering shadow looming behind #heroThem# and slowly turned..."],
        "middle-plot": [ "#heroThey# stood in awe as #heroThey# gazed at a pack of fluffy T-rexes bounding after some #enemy.s#",
            "#hero# was stunned by the sight of a massive battle between #enemy.s#, #enemy.s#, and #enemy.s#!",
            " The crash of cymbals and swords greeted our #hero# as a crowd of #enemy.s# met with a horde of #enemy.s#.",
            "A blinking terminal cast a neon glow over the #setting#, overrun with #enemy.s#?!", //want to use same setting as above here, how do?
            " A gaggle of #types# #enemy.s# zoomed past #heroThem#, in hurried pursuit of a lone #enemy#!",
            "As if an everyday occurance, a band of #enemy.s# playing #instrument.s# accompanied an army of... #enemy.s#?"],
        "intermission": [],
        //ask aaron how to reuse the variable for time machine name and location
        // HEY GRAHAM! I added the reuse of the time machine name so now #machine# will always refer to the same name
        // in order to use the saved location, you can use the #setting# tag!
        "end-plot":["There! Just past a #obstacle#, #hero# spotted a familiar gleam... The #machine#! There was just one problem..."], 
        "end-plot2":[],//want to have another "problem" here, can mirror above format for middle plot, or somehow keep middle plot selection and write individual solns for them?
        "name": ["Aaron,Anika,Julie,Justin,Graham"],
        "setPronouns": ["[heroThey:they][heroThem:them][heroTheir:their][heroTheirs:theirs]",
            "[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]",
            "[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]"],
        "setSetting": ["[setting:prehistoric land]", "[setting:futuristic city]", "[setting:victorian castle]"],
        "objects": ["dinosaur bones", "medieval armor", "robot parts", "ancient swords", "futuristic gizmos", "dino eggs", "flux capacitors", "forbidden tomes", "thagomizer fossils", "cow tools"],
        "noise": ["BUZZ", "BANG", "POP", "POW", "SKADOOSH", "WHIRR", "PVVVT", "ZRRT"],
        "setMachine": ["[machine:Time-Inator 9000]", "[machine:Delorian Mk 2]", "[machine:Time Warp Whirligig]", "[machine:Timey Wimey XR100]", "[machine:Quantum Leapfrog]"],
        "enemy": ["velociraptor", "pterodactyl", "knight", "wizard", "archer", "killer robot", "space ship", "neanderthal"],
        "types":["sorcerer", "cyborg", "apprentice", "brigand", "bard", "prehistoric", "psychic"],
        "thingies":["club", "orb", "staff", "rock", "spear", "lasgun", "fang"],
        "instrument":["lute", "flute", "synthesizer", "harp", "drum"],
        "obstacle": ["castle", "brontosaurus", "skyscraper", "purple & green robot"]
    }
};

let grammar;


function loadGrammar() {
    // Set beginning text 
    words.story.beginning = beginningText;
    words.story.intermission = intermissionText;

    grammar = tracery.createGrammar(words["story"]);
    let raw = grammar.flatten('#origin#');

    sentences = raw.split("|");
    data = sentences.shift();
    data = JSON.parse(data);
}