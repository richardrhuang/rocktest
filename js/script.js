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
'cafe':'cafe.jpg',
'clubroom':'outsideclubroom.jpg',
'court2':'court2.jpg',
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





	//	{'Input': {
	//		'Text': 'What is your name?',
	//		'Validation': (input) => {
	//			return input.trim ().length > 0;
	//		},
	///		'Save': (input) => {
	////			monogatari.storage ({ player: { name: input }});
	//		},
	///		'Revert': () => {
	//			monogatari.storage ({ player: { name: '' }});
	//		},
	//		'Warning': 'You must enter a name!'
	//	}},




		'show scene #000000 with fadeIn',
		{'Choice': {
			'Developer': {
				'Text': 'Jump to working part',
				'Do': 'jump thaliaappears',
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
		'show character b normal with fadeIn at centerRight',
		"b test",
		'hide character g with fadeOut',
		'hide character c with fadeOut',
		'hide character b with fadeOut',
		'show character th normal with fadeIn at centerLeft',
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
		"b? You have five seconds to evacuate before I curb stomp you to the window sill and dissolve your body in nitric acid.",
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
		"t Alright. Let's say I have a sample of Uranium-238 that has decayed to the point where only 40% of the U-238 remains. How many years did it take for it do decay to this point? You should estimate the half life to be exactly 4.5 billion years.",
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
				'Do': "'Orion Bloomfield!' I wanted to say. The energy radiating from that name was so strong, I felt compelled to say it. It was like the forces of the universe converged on this individual. I didn't even know an Orion Bloomfield. I kept my mouth shut, but doing so made me feel a deep, burning dissapointment, like I committed a sin.",
			},
			
		}},

		'jump questiontime',


	],

	'quickmaths': [
		"y 5.9486 x 10^9 years.",
		"The words came out of my mouth before I knew it. Everyone in the class stopped what they were doing and looked at me in shock.",
		"t That's... Correct! Well done, new guy! You're a smart cookie. I love that for you.",
		"I sheepishly receded into the desk, the two seconds of fame slowly fading from my mind as I felt the cold stare of Bizzie boring into my left shoulder.",
		'show character b normal with fadeIn',
		"b ...",
		"I felt like I already had made an enemy out of the angry little child. Should her threats come to fruition, my time at the academy would be a short, bloody one.",
		"I resigned myself to my chair, keeping my mouth shut out of fear for the rest of class. As the teacher continued with the review questions, the powerful gaze of Bizzie continued to pierce into my shoulder with the force of a thousand particle accelerators, powerful enough to transmute my feeble element nucleus into a gold nuclei.",
		"I had only the bell to save me now...",
		'play sound bell',
		"Bless!",
		"I tried getting out of my seat, but before I could even stand up, Bizzie had already crossed the entire classroom and left, slamming the door on the way out.",
		'hide character b with fadeOut',
		"...Perhaps she had to catch another class?",
		"I sighed in relief, but an object on the ground caught my eye.",
		"It was a red, leather bound notebook. The same one I saw Bizzie using earlier.",
		"She must've dropped it on her scurry out of here.",
		"I picked up the notebook and flipped through the contents, expecting notes and diagrams, but more importantly any contact information.",
		"Instead, I came face to face with the words 'Dear Diary,' on the top of each page.",
		"...",
		"Out of all the things I could've come across, the diary of the person who threatened to put my face through the window was not one of them.",
		"I stared at the notebook for a bit before a tug on my sleeve brought me back to reality.",
		'show character g normal with fadeIn',
		"g Hey, you good? Come on! We have to make it to the next class.",
		"y Y-yeah. Before we go, though, do you know who Bizzie is?",
		'show character g surp',
		"The name seemed to have an effect on her.",
		'show character g normal',
		"g Bizzie? Yeah! She's been my friend since we were children at Little Pebble Kindergarten! Although she does seem a bit distant now that we're in high school...",
		"g Maybe she's just been busy! This school really does pile things up on you.",
		'show character g pout',
		"g But still, I really want to be able to talk to her again...",
		"I wondered if Gala knew that her 'friend' made death threats to new people whenever possible. Gala wore a pained smile on her face as she talked about Bizzie.",
		"It was strange that Gala said that they were friends, too. Do friends smirk at their friend being humiliated? What kind of toxic relation did Gala get herself into?",
		"Not even a greeting or goodbye was said between them this entire period. More than anything, though, it seemed that Bizzie was avoiding Gala for some reason.",
		'show character g normal',
		"g Hey! Snap snap! Or we're gonna be late for next period!",
		"y Oh, yeah.",
		"I followed Gala out into the hallway",
		'show scene #000000 with fadeIn',
		'wait 1000',
		'jump thaliaappears',
		],

	'thaliaappears':[
		'show scene hallway with fadeIn',
		"The hallway was busy, as usual. I tailed behind Gala as we made our way to the next class.",
		'show scene hallway with shake infinite',
		"I felt the ground shake a little - it felt like there was a stampede of elephants making its way across the hallway.",
		"th? MOVE OUTTA THE WAY NERDS! THERE ARE RATS IN HERE",
		"I don't know what thoughts went through my mind when I heard that phrase - terror? Curiousity? A general 'what the fuck is happening right now?'",
		'show character g surp with shake infinite',
		"g Oh no...",
		"y Why 'Oh no'? What's going on? What-",
		'hide character g with fadeOut',
		'show character th surp with fadeIn shake infinite',
		"The last thing I saw before I got absolutely bodied was the figure of a lean silver-haired girl.",
		'show scene #000000',
		" ",
		'wait 3000',
		'th? Yo! Yo! Gooner! Wake up!',
		"My eyes slowly opened to the scene at play.",
		'show scene hallway with fadeIn',
		'show character g surp left',
		'show character th normal right',
		"th? Glad you're awake! You took quite a hit there!",
		"g Thalia, we talked about this. No club activities during transition period.",
		'show character th emb right',
		"th Yeah yeah yeah, rat killing can come later. I'm sorry.",
		"I should've recognized this sooner, but I realized now that no one at this school was normal.",
		'show character th normal right',
		"th Anyways, new guy! The name's Thalia! Thals, Thalla, the ol' 81, call me whatever, but if you call me Th for short I will bite you.",
		"th I'm the president of the Rat Killing Club! Did you know that there are rats everywhere? You might think they're cute, but let them loose and they tear up all the walls and the floors and eat through the trash bins like an acid solution.",
		"th The Rat Killing Club is always looking for passionate new members! We're application only, but since I kinda smacked you, I can give you a president's recommendation! That's my apology offer!",
		"The amount of information that was presented to me in that short amount of time fried my brain. I opened my mouth to speak but nothing came out. I literally had no words to describe what just happened.",
		"th Welp! Gotta get to rat ki- I mean class! Gotta get an education! That's why I'm here! Remember our offer and don't be a stranger next time you see me!",
		'hide character th with fadeOut',
		"With that, Thalia sprinted down the hallway, knocking over some other poor students in the way.",
		'show character g normal with fadeIn',
		"g Thalia's one of the more energetic ones here. Very passionate. Almost a little scary just how passionate she is.",
		"g Knowing her, she's definitely cutting class again to clean up the school. While all the teachers frown upon that, she does a really good job of it though. I think they've kind of given up trying to track her down for truancy.",
		"g But gah! You were out for so long that third period's started already! Come on, or we're gonna be even more late!",
		'hide character g with fadeOut duration 2000',
		'show scene #000000 with fadeIn',
		"In my first few hours of school here, I had already gotten lost, gotten a death threat, almost died, and now was extended an offer to join a society of rat exterminators.",
		"Needless to say, I realized I had a lot to learn before I could find my place here.",
		'jump secondstage'
	],

		'secondstage':[
			"Classes went by in a blur. As I shadowed Gala all day, I got to learn a lot more about the school's curriculum and culture.",
			'show scene cafe with fadeIn',
			'show character g normal with fadeIn',
			"g That's all for today! Hope you enjoyed the tour!",
			"g I would say you're on your own now, but feel free to reach out to me anytime! I love helping people out whichever way possible.",
			"g But for real now, I have to go to run a club meeting. Have fun exploring the school!",
			'hide character g with fadeOut',
			"With that, Gala disappeared into the maze of hallways that was Shiwa Academy.",
			"I was left alone in the cafeteria with little sense of direction to where the dorms were, or how to even get out of the place.",
			"...Maybe I should've followed her.",
			"In the distance, though, I saw a small, familiar figure sitting alone at a table. She was scribbling away at a few other notebooks.",
			'show character b normal with fadeIn',
			"I remembered our earlier interaction - and the chills returned.",
			"But sitting tucked away between my textbooks was the red notebook that Bizzie dropped in Chemistry class. I felt obligated to return it to her, even if my body would never be found ever again.",
			"Gathering up the courage from somewhere inside me, I approached Bizzie.",
			"y H-Hello.",
			'show character b close',
			"b Bizzie barely looked at me as I approached her. She continued writing down notes and drawing diagrams.",
			"y I have something that you dropped earlier.",
			"I pulled the red notebook out and placed it on the table in front of her.",
			'show character b normal',
			"Bizzie immediately stopped what she was doing.",
			"b You didn't look inside, didn't you?",
			"y N-no.",
			"b ...",
			"y ...Maybe just a little?",
			"b ...",
			"Bizzie was deathly calm as she carefully lifted the red notebook and tucked it into the darkness of her oversized bookbag.",
			"b Thank you for returning this to me. It means a lot.",
			"The sweat dropped from my brow as I internally breathed a sigh of relief. But my curiousity got the hold of me, and I decided to press forward with my luck.",
			"y So...when did you meet Gala?",
			"b ...",
			"b When we were kids. Anything else? You're disturbing my studying.",
			"y So... why do you hate her so much?",
			"b What makes you say that?",
			"y Everything...?",
			"b ...",
			"b You really shouldn't pry too much into other people's lives.",
			"y You know, she still considers you to be a friend.",
			'show character b close',
			"b That dense girl still thinks we're friends? Unbelievable.",
			"y You should really go talk to her some day.",
			'show character b normal',
			"b No, you don't know anything.",
			"y I might not know anything about you two, but I know that Gala is trying really hard to keep you as a friend. She doesn't want to lose you.",
			"b ...",
			"b ...",
			"Bizzie was silent for a long time, before she finally spoke again.",
			'show character b smile',
			"b You know, for being the new guy, you're really smart.",
			"y ...Thanks?",
			"b Earlier, you solved that problem like it was nothing. I was still trying to plug in numbers into my calculator when you gave the answer.",
			"b You've earned my respect.",
			"I didn't know that this angry little girl could be... such a cute at some times. Her angry demeanor usually gave off an aggressive aura, but when she smiled it was like she brightened up.",
			"b How did you do it? How did you solve it so quickly? And don't give me any crap like 'I just paid attention in Chem class'.",
			"y Well, uh, it's just kind of a flow, you know?",
			"y Once you get the element of it, the rest is pretty easy.",
			"y You just have to plug in numbers and solve. I think every puzzle is kind of like this. You have to understand it first to be able to do it quickly and efficiently.",
			"b That really doesn't help at all, but I'll keep that in mind.",
			"b But... thanks for the notebook again. Hey, since you're a new student and all, you have to join a club, right?",
			"y Do I?",
			"b Yeah, every student here is part of a club. I run the Gastroenterology club here. Y'know, we could use someone like you there.",
			"y I'll... think about it, I guess?",
			"b Take your time. Anyways, you're lost, aren't you?",
			"y ...How could you tell?",
			"b Because you were floundering a lot after Lala left you.",
			"... Who's Lala?",
			"b The exit to the courtyard is through the west entrance. If you follow the path you will get to the arch, and just beyond that are the dorms.",
			"y Oh, alright, thank you!",
			"b See you later. Don't forget about the offer!",
			'hide character b with fadeOut',
			"With that, I left the cafeteria feeling relieved. I felt like I had gotten closer with someone on my first day here.",
			'show scene #000000 with fadeIn',
			'wait 1000',
			'show scene schoolcourt with fadeIn',
			"The school courtyard was just as beautiful and calming as I remembered.",
			"As I made my way down the path, I saw her again.",
			'show character c normal with fadeIn',
			"Cinny, was that her name?",
			"She was standing in front of the planted flowers, admiring them from the path in front of me.",
			"I wondered if it was even worth it trying to talk to her.",
			"y Hey.",
			'show character c emb',
			"c Eeek! I'm sorry, sorry, I'll be going now.",
			"y Wait, no, wait!",
			"She stopped briefly in her tracks and turned around slowly.",
			"c ...If you stay near me you'll get sick. That's what they all say.",
			"y Well, I'm kind of new here, so I really haven't heard that rumor yet.",
			'show character c normal',
			"A ghost of a smile appeared on her face. Cinny was clearly more relaxed than earlier.",
			"c So you're the new transfer student here? Welcome, I guess. I'm sorry for earlier, I just get paranoid sometimes.",
			"y No, I'm sorry for scaring you. I just wanted to talk to you.",
			'show character c emb',
			"c No one's ever wanted to talk to me before...",
			"y Oh, well, there are. You've just kind of... ran away from them.",
			'show character c sigh',
			"c Hmmmmmmm....",
			'show character c normal',
			"c So what brings you here? Are you on your way back to the dorms?",
			"y Yeah, but being here is kind of relaxing. I feel like I can take my mind off things and just, watch the flowers, I guess.",
			"c Yeah, I feel that way too. Every time I get nervous or anxious I walk outside here, even if it's raining outside. It's really beautiful regardless of weather, and it really helps calm me down.",
			"We chatted a while about the courtyard. As the sun set, we began talking about school and life here.",
			"c You're going to enjoy it here a lot. I mean, look at me. I'm a loner and I don't talk to people, but I'm doing just fine.",
			"The more I talked to Cinny, the more relaxed I felt, moreso than being in the courtyard.",
			"c But anyways, since you're a new student, I feel like it's obligatory for me to do so, you should join the Dentistry Club!",
			"c I'm going to be honest, it's just me right now, and I could really use another person to help me keep it alive.",
			"c But I'm not going to push you. There are plenty of other clubs with far more people, and you can probably have a lot more fun in those clubs than at a dingy little club like mine.",
			"c Anyways, see you! I need to do some club paperwork.",
			'hide character c with fadeOut',
			"Cinny disappeared into the school building. I felt like I got closer to another person on my first day here.",
			'show scene #000000 with fadeIn duration 1000',
			'wait 1000',
			'show scene court2 with fadeIn duration 1000',
			
			"I was nearly at the dorms when I ran into a familiar face.",
			'show character g surp with fadeIn',
			"g Oh hey! It's you again.",
			'show character g normal',
			"g Did you get to know the place a bit after I left you?",
			"y Yeah... I figured out the place a little, but I definitely had some help.",
			"g That's great! It's nice that you're already meeting new people here. See, it's not that bad!",
			"g So anyways, I know that Thalia offered to recruit you to the Rat Killing Club.",
			"g By all means, I am not telling you that you shouldn't, but you should at least know all the options first before you do so.",
			"g Here's a packet of all the clubs on campus. I should also tell you that I run the History club here, and we're currently doing a special project on Ancient Roman infrastructure!",
			"g We could really use new members like you for the project.",
			"g But, I digress, please find a club that you want to join instead of feeling like I'm forcing you to join mine.",
			"g Anyways, I'm headed off to do some errands, but like I said, call me if you need anything! I'm your friend first and tour guide second.",
			'hide character g with fadeOut',
			"With that, Gala went off in the direction of the school.",
			"I really did meet a lot of new people today... maybe this won't be as bad as I thought.",
			'show scene #000000 with fadeIn',
			'jump choicescene',



		],

		
	//this line is just for fun but change aftrerwards
		
	
	


	'choicescene' :[

		'clear',
		"It was the end of a very eventful day. I laid down in my bed exhausted by the amount of things that had happened.",
		"Oh, right. I pulled out the club packet from my bag and stared at it in the dim light. Despite there being hundreds of options to choose from, my mind naturally wandered towards just four of them.",
		"Joining their club would be a great opportunity to get to know them better. It felt like I needed to do all four of them eventually before I could move on with my life.",
		"But in the here and now, I had to make a decision before I went to bed.",
		"I really want to get closer to...",
		
		function () {
			monogatari.storage().gala = true;
			monogatari.storage().cinny = true;
			monogatari.storage().bizzie = true;
			monogatari.storage().thalia = true;
		},

		"ooga booga",
                
		{'Choice': {
			'Gala': {
				'Text': 'History Club: Gala - Room 210',
				'Do': 'jump galaRoute',
			},
			'Writer': {
				'Text': 'Dentistry Club: Cinny - Room 194',
				'Do': 'jump cinnyRoute',
			},
			'Artist': {	
				'Text': 'Gastroenterology Club: Bizzie - Room 207',
				'Do': 'jump bizzieRoute',
			},
			'Player': {
				'Text': 'Rat Killing Club: Thalia - ROom 204',
				'Do': 'jump thaliaRoute',
			},
			'End':{
				'Text': 'End',
				'Do':'jump end',
				'Condition': function (){
					return monogatari.storage().gala && monogatari.storage().cinny && monogatari.storage().bizzie && monogatari.storage().thalia;
				
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
		"Well, once you figured it out, at least.",
		"Oh? We didn't?",
		"Silly. You weren't expecting us to just say 'The answer is...' and be done with it, no?",
		"Think about the people you've met today. The ones whose lives you changed.",
		"The ones you had to learn about and pursue.",
		"There's something in common with them all, right?",
		"And there's something in common with them, as well as the name you were given in the end, right?",
		"You know the answer already, you were just too afraid to look it in the eye.",
		"And that's not a good way to approach life!",
		"As you go through life, the might current of society is bound to get in your way and there will certainly be times that things don't go as you'd hoped.",
		"When this happens, don't look to society for a cause. Do not renounce society. Frankly, you'd be wasting your time!", 
		"Instead just say, 'That's life!' and muddle your way through with frustration.",
		"Once you're past it, consider: If society's swift current is tossing you around, how should you be swimming there in it's midst.",
		"Always trust yourself.",
		"There is a power inside you, stronger than anything you know.",
		"Spend some time and get to know it!",
		"Always know that you have yourself to rely on.",
		"Always know that you have a gem within.",
		'end',	

	],
		

});