//Hello! It seems that you have decided to peek into the java script for this project! While it would certainly help, 
//there are definitely things hidden within the story itself that 
//Oh and by the way the answer isn't mentioned once in the entirety of the code here. You gotta use your noggin





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
		"Writer": "Pogfish Huang",
		"Character Artist": "Nerd Sanchez",
		"Technical Consultant/Goon Squad": "Gooner Bloomfield",
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
	'bell': 'bellsound.mp3',
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
'schoolcourt':'courtyard.jpg',
'atschool':'schoolbkg.jpg',
'hallway':'hallway.jpg',
'class':'inclass.jpg',
});


// Define the Characters
monogatari.characters ({
	'p': {
		name: '{{player.name}}',
		color: '#FFFF00',
		directory: "",

		default_expression: "",
	},
	'y':{
		name: 'You',
		color: '#FFFF00',
		directory: "",

		default_expression: "",
	},

	'g': {
		name: 'Gala',
		color: '#a9a9a9',
		directory: "gala",
		sprites: {
			normal: 'gala neutral.png',
			emb: 'gala_embarassed.png',
			pout: 'gala_pout.png',
			surp: 'gala_surprised.png',
		},
		default_expression: "",
	},
	'g?': {
		name: '????',
		color: '#a9a9a9',
		directory: "gala",
		sprites: {
			normal: 'gala neutral.png',
			emb: 'gala_embarassed.png',
			pout: 'gala_pout.png',
			surp: 'gala_surprised.png',
		},
		default_expression: "",
	},
	'c':{
		name: 'Cinny',
		color: '#E34234',
		directory: "cinny",
		sprites: {
			normal: 'cinny neutral.png',
			emb: 'cinny_embarassed.png',
			sigh: 'cinny_sigh.png',
		},
		default_expression: "",
	},
	'c?':{
		name: '?????',
		color: '#E34234',
		directory: "cinny",
		sprites: {
			normal: 'cinny neutral.png',
			emb: 'cinny_embarassed.png',
			sigh: 'cinny_sigh.png',
		},
		default_expression: "",
	},
	'b':{
		name: 'Bizzie',
		color: '#f6adc6',
		directory: "bizzie",
		sprites: {
			normal: 'bizzie neutral.png',
			pout: 'bizzie_pout.png',
			smile: 'bizzie_smile.png',
			close: 'bizzie_closed.png',
		},
		default_expression: "",
	},
	'b?':{
		name: '??????',
		color: '#f6adc6',
		directory: "bizzie",
		sprites: {
			normal: 'bizzie neutral.png',
			pout: 'bizzie_pout.png',
			smile: 'bizzie_smile.png',
			close: 'bizzie_closed.png',
		},
		default_expression: "",
	},
	'th':{
		name: 'Thalia',
		color: '#C0C0C0',
		directory: "thalia",
		sprites: {
			normal: 'thalia neutral.png',
			emb: 'thalia_embarassed.png',
			surp: 'thalia_surprised.png',
			uhoh: 'thalia_uhoh.png',
		},
		default_expression: "",
	},
	'th?':{
		name: '??????',
		color: '#C0C0C0',
		directory: "thalia",
		sprites: {
			normal: 'thalia neutral.png',
			emb: 'thalia_embarassed.png',
			surp: 'thalia_surprised.png',
			uhoh: 'thalia_uhoh.png',
		},
		default_expression: "",
	},
	't':{
		name: 'Teacher',
		color:'#00FF00',
	},
});

monogatari.script ({
	// The game starts here.
	'Start': [
		"clear",





		{'Input': {
			'Text': 'What is your name?',
			'Validation': (input) => {
				return input.trim ().length > 0;
			},
			'Save': (input) => {
				monogatari.storage ({ player: { name: input }});
			},
			'Revert': () => {
				monogatari.storage ({ player: { name: '' }});
			},
			'Warning': 'You must enter a name!'
		}},




		'show scene #000000 with fadeIn',
		{'Choice': {
			'Developer': {
				'Text': 'Jump to working part',
				'Do': 'jump classroomscene',
			},
			'Writer': {
				'Text': 'I’m a gooner.',
				'Do': "Fucking gooner",
			},
			'Artist': {
				'Text': 'I’m an nerd.',
				'Do': "Fucking nerd",
			},
			'Player': {
				'Text': 'I’m a goonerd.',
				'Do': "Clobba? Is that you?",
			}
		}},
		" ",
		//delete later
		'p Ooga booga',

		{'Input': {
			'Text': 'New name time!',
			'Validation': (input) => {
				return input.trim ().length > 0;
			},
			'Save': (input) => {
				monogatari.storage ({ player: { name: input }});
			},
			'Revert': () => {
				monogatari.storage ({ player: { name: '' }});
			},
			'Warning': 'You must enter a name!'
		}},

		{'Conditional': {
			'Condition': function(){
				if(monogatari.storage().player.name == 'ooga booga') {
					return 'ooga';
				} else 
					return 'fucker'

					
			},
			'ooga': "ez clap",
			'fucker': "ah fuck",
		}},

		'p rocks are cool',

		'show character g normal with fadeIn at right',
		"g test",
		'show character c normal with fadeIn at left',
		"c test",
		'show character b normal with fadeIn at centeredRight',
		"b test",
		'hide character g with fadeOut',
		'hide character c with fadeOut',
		'hide character b with fadeOut',
		'show character th normal with fadeIn at centeredLeft',
		"th I kill rats",
		'hide character th with fadeOut',
		"HAVE YOU EVER WANTED TO FUCK A ROCK? WELL NOW YOU CAN! WELCOME TO ROCK FUCKING SIMULATOR 9000 WHERE WE GIVE YOU THE BEST ROCKS TO FUCK YEE HAW OR ITS YOUR MONEY BACK",
		//delete between
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
		//delete later
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
		'play music school loop',
		"What?",
		"Was I daydreaming again?",
		"I can't be doing this on my first day here. . .",
		"...",
		"Shiwa Academy, the number one science institution in the world.",
		"Every one of its graduates goes on to become prodigies in their field.",
		"There's not even an application for the school - the school finds and recruits students themselves amongst hundreds of millions. The acceptance rate is practically 0%",
		"And now, I'm here midway through the school year on a special scholarship.",
		"To be honest? I'm nervous.",
		"I don't feel like I belong here, but I don't feel like I belong anywhere else.",
		"I'm stuck between a rock and a hard place.",
		"Damn, this place is so big. . . and there are so many people.",
		"I wonder if I'll make any friends here at all, with only half the year left.",
		'play sound bell',
		"...",
		"....How long have I been waiting outside again?",
		"According to the email the principal sent me, the guide should've been here 10 minutes ago, but first period's already starting . .",
		"Oh well, I might as well go inside. . .",
		'stop sound bell',
		'show scene #000000 with fadeIn duration 5s',
		'wait 3000',
		'show scene hallway with fadeIn',
		"I've been wandering these halls for a while now, and I think I'm lost.",
		"Wait! There's a student in the hallway! Maybe I'll go talk to them...",
		"y Hi, excuse me uh...",
		'show character g normal with fadeIn',
		"g? Oh hi there! Are you lost?",
		"y Yeah...",
		"g? Nice! I'm lost too!",
		"... Isn't she supposed to be a student here?",
		"g? I was supposed to meet a new transfer student somewhere, but I accidentally made the wrong turn and I've been walking around since.",
		"y Oh, well. Hi? I'm the new transfer student?",
		"She looked kind of confused, but after a while she lit up.",
		'show character g surp',
		"g? Oh my god! I'm so sorry!",
		"y No it's fine...",
		'show character g pout',
		"g? Ugh... this always happens... first I wake up late then I forget how to walk around the school...",
		"y No it's fine...",
		"She muttered under her breath a few times and slapped her cheeks a bit.",
		'show character g normal',
		"g So anyways, hi! I'm Gala, and from you can tell, I'm a little dense.",
		"g Welcome to Shiwa Academy! You're really gonna like it here.",
		"g Technically we should be in first period, but luckily, we have first period off since you're new.",
		"g I'm going to be showing you around the place for the day, and you'll be shadowing my classes as well!",
		"g As you know, Shiwa Academy is an incredibly science oriented institution, and we take pride in our full STEM based curriculum, so hope you're ready!",
		"g Outside of school, everyone usually participates in a club that represents their specialization. For example, we have the Medicine Club, the Dentistry Club, the Rat Killing Club.",
		"y The What Killing Club now?",
		"g Long story.",
		"g Why don't we visit the courtyard before second period? We have some time to kill.",
		'hide character g with fadeOut duration 5000',
		'wait 2000',
		'show scene #000000 with fadeIn duration 5000',
		'show scene schoolcourt with fadeIn duration 5000',

		"It was a nice day outside, and strolling through the greenery of the courtyard settled my nerves a little.",
		'show character g normal with fadeIn',
		"g This is one of the best places to be if you just need a break. I come here quite often myself.",
		"Off in the distance, another student was crouched in front of a few planted flowers. We were slowly making our way towards them.",
		
		'show character g normal with fadeIn left',
		'show character c normal with fadeIn right',
		
		"She didn't seem to notice our approach, until we were right behind her.",
		"g Hi there!",
		'show character c emb right',
		"c? Yeep!",
		"The red-haired girl jumped back suddenly, looking extraordinarily flustered.",
		"c? Sorry! I'll be going now!",
		"g Wait-",
		'hide character c with fadeOut',
		"Before we could say anything, she ran off into the school.",
		'show character g pout',
		
		"g Aww. I just wanted to say hi.",
		"y Who was that person?",
		'show character g normal',
		"g That was Cinny.",
		"g She doesn't really appear much around campus, it's more like she tries avoiding everyone.",
		"g I mean, I've tried talking to her multiple times but everytime she sees me she runs away, like what just happened.",
		"g It's not just me, too. A lot of people have tried getting close with her but for some reason, everyone that does tends to get sick afterwards...",
		"g I don't know what's going on, but it's not going to stop me from becoming friends with her one day!",
		"I admired Gala's enthusiasm, but something felt off about the situation.",
		"People getting sick after getting close to Cinny? How would that happen?",
		"g How about we move on? We only have a bit more time before first period ends, and even though we're touring we still have to make it to our next class.",
		'play sound bell',
		"We left the courtyard back into the school building, but I still had a lot of questions on my mind about this peculiar place.",
		'stop sound bell',
		'show scene #000000 with fadeIn',
		'jump classroomscene'
		

	],

	'classroomscene' :[
		'show scene #000000 with fadeIn',
		'wait 2000',
		'play music school loop',
		'show scene class with fadeIn',
		"We arrived at Gala's second period Chemistry Class. I found an open seat far back in the classroom.",
		"Around me, students started shuffling into their chairs, chatting and cramming some last minute homework.",
		"Then, a short, rainbow-haired student approached me.",
		'show character b normal with fadeIn',
		"b? *Ahem*",
		"y Hmm?",
		"She stared at me for a while, before realizing that I had no idea what she wanted.",
		'show character b close',
		"b? Ugh. You must be a new student.",
		"y Oh, yeah. Hi! My name is-",
		'show character b normal',
		"b? I don't know if you know this, 'new student', but you're sitting in my chair.",
		"b? You have five seconds to evacuate before I curb stomp you to the window sill.",
		"The aggression radiating from this angry child was aweing, and I would have found it humorous had it not been for the fact that I suddenly felt chills going down my spine, like I had been submerged in a bath of liquid nitrogen.",
		"y Um- yeah. Let me just-",
		"I fumbled out of the desk and stood awkwardly in the back of the classroom, watching as this rainbow-haired student strode over to my desk and sat down, proceeding to ignore me.",
		"As the class settled down, the professor walked into the room, and I realized that I was the only student standing.",
		"t Oh! You must be the transfer student. Well, why don't you find a seat right next to... Bizzie!",
		
		"b? Tsk.",
		"It took me a second to realize that the only available seats left in the class were in a ring surrounding the girl who kicked me out of the chair. She looked like an island, tucked away in the corner of the class.",
		"Grudgingly, I took a seat next to my aggressor.",
		"t Good! Now, class, I know that we have a new student here today, and while that's cool and all our exam on radioactivity is coming up next week!",
		"A murmur of exasperation spread throughout the classroom. I saw Gala, who sat near the front of the class, tense up suddenly.",
		"Bizzie, however, looked unimpressed as always. She brought out her notebooks and began opening them up, flipping through pages of densely packed notes and diagrams.",
		"t Ok. How about let's review some material? New kid, feel free to jump in whenever.",
		"I wasn't sure if I wanted to make a fool out of myself first day, but here's to proving I belong, I guess.",
		"t Alright class. Easy question first. What is the term we use to describe the time it takes for the radioactivity of a radioactive isoptope to fall to half of its original value?",
		"Almost immediately, every student raised their hands, save for one person sitting near the front...",
		"t Gala? Do you want to tell us?",
		'hide character b with fadeOut',
		'show character g surp with fadeIn',
		"g Huh? Uh, it's- uh -",
		"t Gala, come on now. You have to know these things. It's the Half-Life, remember?",
		'show character g emb',
		"g Right, sorry Professor!",
		'hide character g with fadeOut',
		'show character b smile',
		"b Hmph.",
		
		"Out of the corner of my eye, I saw Bizzie, quite pleased with herself for some reason.",
		"I wondered if she had bad blood with everyone in this school.",
		'hide character b with fadeOut',
		"t Alright, next question, a little more tricky now.",
		"t This one is going to involve a calculation, so get your calculators out.",
		"t Alright. Let's say I have a sample of Uranium-238 that has decayed to the point where only 40% of the U-238 remains. How many years did it take for it do decay to this point? You shoulud estimate the half life to be exactly 4.5 billion years.",
		"The numbers seemed to flow in my mind and arrange into place. Even without a calculator, I figured out the answer, and I was confident in it, while everyone else was still tinkering around on their devices.",
		"The answer is...",
		'jump questiontime',
	],
	
	'questiontime':[
		{'Choice': {
			'RightAnswer': {
				'Text': '5.9486 x 10^9 years',
				'Do': 'jump quickmaths',
			},
			'Pineapple': {
				'Text': 'Pineapple',
				'Do': "'It's pinapple!' I wanted to say. Yeah, like I would embarass myself in front of the whole class on my first day."
					
			},
			'Artist': {
				'Text': 'Orion Bloomfield',
				'Do': "'Orion Bloomfield!' I wanted to say. The energy radiating from that name was so strong, I felt compelled to say it. It was like the forces of the universe converged on this individual. I didn't even know an Orion Bloomfield. I kept my mouth shut.",
			},
			
		}},

		'jump questiontime',


	],

	'quickmaths': [
		"y 5.9486 x 10^9 years.",
		"The words came out of my mouth before I knew it. Everyone in the class stopped what they were doing and looked at me in shock.",
		"t That's... Correct! Well done, new guy! You're a smart cookie.",
		"I sheepishly receded into the desk, the two seconds of fame slowly fading from my mind as I felt the cold stare of Bizzie boring into my left shoulder.",
		'show character b normal with fadeIn',
		"b ...",
		"I felt like I already had made an enemy out of the angry little child. Should her threats come to fruition, my time at the academy would be a short, bloody one.",
		
	],

		
	//this line is just for fun but change aftrerwards
		
	


	'choicescene' :[

		"It was the end of a very eventful day. I laid down in my bed exhausted by the amount of things that had happened today.",
		"Oh, right. I pulled out the club sheet from my bag and stared at it in the dim light. Despite there being hundreds of options to choose from, my mind naturally wandered towards just four of them.",
		"Joining their club would be a great opportunity to get to know them better. It felt like I needed to do all four of them eventually before I could move on with my life.",
		"But in the here and now, I had to make a decision before I went to bed.",
		"I really want to get closer to...",

		{'Choice': {
			'Gala': {
				'Text': 'Plumbing: Gala - Room 210',
				'Do': 'jump galaRoute',
			},
			'Cinny': {
				'Text': 'Dentistry: Cinny - Room 194',
				'Do': 'jump cinnyRoute',
			},
			'Bizzie': {
				'Text': 'Gastronomy: Bizzie - Room 207',
				'Do': 'jump bizzieRoute',
			},
			'Thalia': {
				'Text': 'Rat Killing Club: Thalia - Room 207',
				'Do': 'jump thaliaRoute',
			},
			'End': {
				'End': 'end',
				'Do': 'jump end',
				'Condition': function () {
					return storage.playing && storage.media && storage.scripting && storage.animations;
				}
			}
		}},
	],



	
	'galaRoute': [

	],
	'bizzieRoute': [

	],
	'cinnyRoute': [

	

	],
	
	'thaliaRoute' :[
		"RATS RATS WHERE ARE THE RATS",
		"CELEBRATING YET ANOTHER RODENT HEAD BASH",
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
		"We've already given it to you.",
		"Well, once you figured out "
	]
		

});