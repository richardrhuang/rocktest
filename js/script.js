/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({
	
});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
	"Developers": {
		"Director": "Pogfish Huang",
		"Main Artist": "Nerd Sanchez",
		"GoonSquad": "Gooner Bloomfield",
	},
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
'menutheme': 'mmtheme.mp3',
'rainyday': 'rainymusicbox.mp3',
'homesick': 'homesick.mp3',
'dokidemon': 'dokidemoninjin.mp3',
'boulo': 'boulo.mp3',
'school': 'schooltheme.mp3',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	'schoolcourt1':'school1.jpg',
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
'intro': 'introbkg1.jpg',
'schoolcourt':'school1.jpg',
'atschool':'schoolbkg.jpg',
});


// Define the Characters
monogatari.characters ({
	'p': {
		name: '{{player.name}}',
		color: '#FFFF00',
		directory: "",
		default_expression: "",
	},
	'g': {
		name: 'Gala',
		color: '#212121',
		directory: "",
		default_expression: "",
	},
	'c':{
		name: 'Cinny',
		color: '#E34234',
		directory: "",
		default_expression: "",
	},
	'b':{
		name: 'Bizzie',
		color: '#f6adc6',
		directory: "",
		default_expression: "",
	},
	'th':{
		name: 'Thalia',
		color: '#C0C0C0',
		directory: "",
		default_expression: "",
	},
});

monogatari.script ({
	// The game starts here.
	'Start': [
		"clear",
		
		'show scene #000000 with fadeIn',
		" ",
		//delete later
		"g test",
		"c test",
		"b test",
		"th test",
		"HAVE YOU EVER WANTED TO FUCK A ROCK? WELL NOW YOU CAN! WELCOME TO ROCK FUCKING SIMULATOR 9000 WHERE WE GIVE YOU THE BEST ROCKS TO FUCK YEE HAW OR ITS YOUR MONEY BACK",
		"centered It's strange, isn't it?",
		"centered The universe began from but a mote of matter. . .",
		"centered I mean, what are the chances we are even here?",
		
		"centered Millions", 
		"centered then billions", 
		"centered then trillions", 
		"centered then moles of particles came together",
		"centered A cesspool of unformed matter, waiting to be molded",
		"centered And under a tremendous amount of force and pressure. . .",
		'show scene #ffffff with fadeIn',
		
		"centered The Universe was born",
		"centered ...",
		//delete later
		"g test",
		"c test",
		"b test",
		"th test",
		"centered Amazing, isn't it?",
		"centered How so many coincidences can come together and create so many meaningful things",
		"centered So many things to enjoy",
		"centered So many people to see",
		"centered So many memories to be made",
		"centered ...",
		"centered Why do I exist now?",
		"centered I was born too late to explore the world,",
		"centered I was born too early to explore the stars,",
		"centered But, it seems I was born just in time for this.",
		'show scene atschool with fadeIn',
		'play music school',
		"What?",
		"Was I daydreaming again?",
		"I can't be doing this on my first day here. . .",
		"...",
		"Shiwa Academy, the number one science institution in the world",
		"Every one of its graduates goes on to become prodigies in their field",
		"There's not even an application for the school - the school finds and recruits students themselves",
		"And now, I'm here midway through the school year on a special scholarship",
		"To be honest? I'm nervous.",
		"I don't feel like I belong here, but I don't feel like I belong anywhere else",
		"I'm stuck between a rock and a hard place",
		"This place is so big. . . and there are so many people",
		"I wonder if I'll make any friends",
		"And according to the email the principal sent me, the guide should've been here 10 minutes ago. . .",
		

		//this line is just for fun but change aftrerwards
		
		
		'jump thaliaRoute',
	],

	'thaliaRoute' :[
		"RATS RATS WHERE ARE THE RATS",
		"CELEBRATING YET ANOTHER RODENT HEAD BASH",
	],
	'galaRoute': [

	],
	'bizzieRoute': [

	],
	'cinnyRoute': [

	],
	'end': [
		"And so time flew by, seemingly without a trace. Before I knew it, we had walked across the stage and received our diplomas.",
		"My time at Shiwa Academy had come to a close",





		'show scene #000000 with fadeIn',
		"...",
		"Weary traveler behind the screen, you must be tired, right?",
		"I know you have been searching for answers too this entire time.",
		"Or is it just one answer?",
		"Regardless, you have done well.",
		"You're probably wondering where the answer is.",
		"We"
	]
		

});