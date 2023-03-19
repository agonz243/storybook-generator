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
        "origin": ["#[#setPronouns#][#setSetting#][hero:#name#][#setMachine#][#setWeapons#]story#"],
        "story": ["#data#|#beginning#|#introduction#|#middle-intro#|#middle-plot#|#intermission1#|#intermission2#|#end-plot#|#end-plot2#|#end-plot3#"],
        "data": ['{"setting": "#setting#"}'],
        //----------------------------------------------------------------------------------------------------
        "beginning": [],
        "introduction": ["After a rough tumble, #hero# opened #heroTheir# eyes and was shocked to find a #setting# before #heroThem#!"],
        "middle-intro": ["As #hero# shook off #heroTheir# confusion, a steady rumble caught #heroTheir# attention.", 
            "While #hero# was still finding #heroTheir# bearings #heroThey# sensed something and quickly looked up at #heroTheir# surroundings.",
            "#heroThey# froze as #heroThey# noticed a towering shadow looming behind #heroThem# and slowly turned..."],
        "middle-plot": [ "#heroThey# stood in awe as #heroThey# gazed at a pack of fluffy T-rexes bounding after some #enemy.s#",
            "#hero# was stunned by the sight of a massive battle between #enemy.s#, #enemy.s#, and #enemy.s#!",
            " The crash of cymbals and swords greeted our #hero# as a crowd of #enemy.s# met with a horde of #enemy.s#.",
            "A blinking terminal cast a neon glow over the #setting#, overrun with... #enemy.s#?!",
            " A gaggle of #types# #enemy.s# zoomed past #heroThem#, in hurried pursuit of a lone #enemy#!",
            "As if an everyday occurance, a band of #enemy.s# playing #instrument.s# accompanied an army of... #enemy.s#?"],
        "intermission1": ["This didn't make any sense! The time machine must have jumbled up places, people and things from all sorts of eras!",
            "What?! The #machine# must have malfunctioned and mixed together all sorts of timelines!", "#hero# looked around at the #enemy.s# and #obstacle.s#. This must be the #machine#'s doing!"],
        "intermission2": ["With a shake of the head and a slap on the cheeks, #hero# snapped back into focus.", "The high pitched yelp of #types.a# #enemy# snapped #hero# back into focus."],
        "end-plot":["There! Just past a #obstacle#, #hero# spotted a familiar gleam... The #machine#! There was just one problem..."], 
        "end-plot2":["To get there, #hero# must cross the perilous battlefield created by the #machine#'s shenaniganery.", 
            "Getting to the #machine# would be no easy task. #hero# must make it through the chaos!", "The #machine# was so far away! #hero# had no choice but to find #heroTheir# way through the mixed up mess."],
        "end-plot3": ["#hero# hardened their resolve, grabbed #rightWeapon.a# and dove headfirst into a group of #enemy.s#.",
            "With cat-like reflexes, #hero# snatched up #rightWeapon.a# and darted past #obstacle.a#.",
            "Determined to get home, #hero#, equipped with #leftWeapon.a# and #rightWeapon.a#, set off towards the #machine#."],
        //----------------------------------------------------------------------------------------------------
        "name": ["Aaron,Anika,Julie,Justin,Graham"],
        "setPronouns": ["[heroThey:they][heroThem:them][heroTheir:their][heroTheirs:theirs]",
            "[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]",
            "[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]"],
        "setSetting": ["[setting:prehistoric land]", "[setting:futuristic city]", "[setting:victorian castle]"],
        "setWeapons":["[leftWeapon:#thingies#][rightWeapon:#thingies#]"],
        //----------------------------------------------------------------------------------------------------
        "objects": ["dinosaur bones", "medieval armor", "robot parts", "ancient swords", "futuristic gizmos", "dino eggs", "flux capacitors", "forbidden tomes", "thagomizer fossils", "cow tools"],
        "noise": ["BUZZ", "BANG", "POP", "POW", "SKADOOSH", "WHIRR", "PVVVT", "ZRRT"],
        "setMachine": ["[machine:Time-Inator 9000]", "[machine:Delorian Mk 2]", "[machine:Time Warp Whirligig]", "[machine:Timey Wimey XR100]", "[machine:Quantum Leapfrog]"],
        "enemy": ["velociraptor", "pterodactyl", "knight", "wizard", "archer", "killer robot", "space ship", "neanderthal"],
        "types":["sorcerer", "cyborg", "apprentice", "brigand", "bard", "prehistoric", "psychic", "armored"],
        "thingies":["club", "orb", "staff", "rock", "spear", "lasgun", "fang", "fazer gun", "broadsword", "bone"],
        "instrument":["lute", "flute", "synthesizer", "harp", "drum"],
        "obstacle": ["castle", "brontosaurus", "skyscraper", "purple and green robot", "cavalry", "dragon"]
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