$(document).ready(function(){
	var words = 
		{

		story:{
			"origin":  ["#[#setPronouns#][#setSetting#][hero:#name#]introduction#"],
			"introduction": ["After a rough tumble, #hero# opened #heroTheir# eyes and was shocked to find a #setting# before #heroThem#."],
			"name": ["Aaron, Anika, Julie, Justin, Graham"],
			"setPronouns": ["[heroThey:they][heroThem:them][heroTheir:their][heroTheirs:theirs]",
				"[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]",
				"[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]"],
			"setSetting": ["[setting:prehistoric land]", "[setting:futuristic city]", "[setting:victorian castle]"]
		  }
	};

	$('#buttonTrigger').click(function(){
		loadGrammar();
	});
	
	function loadGrammar(){
		words.story.name = ["Gooby"];
		var grammar = tracery.createGrammar(words["story"]);
		$('#output').html("<div>"+grammar.flatten('#origin#')+"</div>");
		console.log("finished loading!");
	}

	setTimeout(function() {
        loadGrammar();
    }, 10);

});