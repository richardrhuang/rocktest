//Hello! It seems that you have decided to peek into the java script for this project! While it would certainly help, 
//there are definitely things hidden within the story itself that you have to read through to understand. No shortcuts in life pal.
//Oh and by the way the answer isn't mentioned once in the entirety of the code here. You gotta use your noggin









monogatari.action ('notification').notifications ({
	'Answer':{
		title:'Congrats!',
		body:'The answer is IGOON'
	},
});


monogatari.action ('particles').particles ({
	
});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
	"Developers": {
		"Devs": "This project was a join effort of Puzzle Hunt Hq. <3",
	},
});

monogatari.action ('message').messages ({
	'Thalia': {
		title: '. ',
		body: 'ZEPP',
		icon: ''
	},
	'Bizzie': {
		title: '. ',
		body: 'LED',
		icon: ''
	},
	'Cinny': {
		title: '. ',
		body: 'HARE',
		icon: ''
	},
	'Gala': {
		title: '. ',
		body: 'PAT',
		icon: ''
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
'grad': 'grad.mp3',
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
'outclub':'outsideclubroom.jpg',
'court2':'court2.jpg',
'club':'clubroom.png',
'smallclub':'smallclub.jpg',
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
		"And now, I'm here midway through the school year on a special scholarship. The new member of the Class of 2021.",
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
		"She muttered under her breath a few times.",
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
		
		"Welp! Gotta get to rat ki- I mean class! Gotta get an education! That's why I'm here! Remember our offer and don't be a stranger next time you see me!",
		'hide character th with fadeOut',
		"With that, Thalia sprinted down the hallway, knocking over some other poor students in the way.",
		'show character g normal with fadeIn',
		"g Thalia's one of the more energetic ones here. Very passionate. Almost a little scary just how passionate she is.",
		"g Who knows? Maybe there's something about her history that's made her the way she is now.",
		"g Maybe we're all like that... but who knows?",
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
			"b It's easy to get lost here - there are so many hallways and rooms, and even the Club Room Room numbers are so isotopically similar.",
			"b But you should always distinguish them by who occupies them. They've become kind of like an identity, like a weight on their shoulder.",
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
			"c It honestly feels like we're all pieces of a puzzle here, just elements of a larger table, perhaps.",
			"c I'm doing my best to find myself in it, and you definitely should as well.",
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

		
	'choicescene' :[

		'clear',
		'show scene #000000 with fadeIn',	
		"It was the end of a very eventful first day. I laid down in my bed exhausted by the amount of things that had happened.",
		"Oh, right. I pulled out the club packet from my bag and stared at it in the dim light. Despite there being hundreds of options to choose from, my mind naturally wandered towards just four of them.",
		"Joining their club would be a great opportunity to get to know them better. It felt like I needed to do all four of them eventually before I could move on with my life.",
		"But in the here and now, I had to make a decision before I went to bed.",
		"I really want to get closer to...",
		
	//	function () {
	//		monogatari.storage().gala = true;
	//		monogatari.storage().cinny = true;
	//		monogatari.storage().bizzie = true;
	//		monogatari.storage().thalia = true;
	//	},

		               
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
				'Text': 'Rat Extermination Club: Thalia - Room 204',
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


//gallllllllllllllla beginsssssss
	
	'galaRoute': [
		'clear',
		'play music school loop',
		'show scene outclub with fadeIn',
		"After school the next day I stood outside Club Room 210. The plaque outside the door said 'History Club - Room 210 - President: Gala'.",
		"I gently opened the door...",
		'show scene club with fadeIn',
		'show character g normal with fadeIn',
		"g Hi! Are you here for what I think you're here for?",
		"y Yeah! I'm here to sign up for the History Club!",
		"g Awesome! Then I'm going to need your name to officially register for the club.",
		"My name...right. I never gave her my name before, haven't I?",
		"Oh well, this should be easy enough. I mean, it's not like having a 'wrong' name would do any harm, right?",


		{'Input': {
			'Text': 'My name is...',
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
		"p Here you go.",
		"g Thanks! I'm gonna give you my number so that we can be in contact.",
		"g It's 0.027304663",
		"g I'll turn the form in to the school officials later. In the meantime, consider yourself a member of the History Club!",
		"g Like I said yesterday, we're currently looking at material infrastructure from Ancient Empires.",
		"g Currently, I'm doing research on Ancient Rome. ",
		"p Why the interest?",
		'show character g emb',
		"g Well, it's kind of strange really. Promise me you won't judge.",
		"p Oh?",
		"g I, uh, I'm interested in Ancient Roman plumbing.",
		"p You're interested in what now?",
		'show character g normal',
		"g Ancient Roman piping! Their pipe system was incredibly vast and organized, and the aqueduct was an incredible invention that helped so many.",
		"g Siphon pipes, water pipes, a lot of pipes used this strong, sturdy material.",
		"g Even though the material could become dangerous at times, they were able to continue living normal lives with little to no side effects from it.",
		"g I want to study and recreate that material so that we can keep the sturdiness of Ancient Roman piping, but without the side effects that could manifest from it.",
		"g That might be too ambitious of a goal, but I believe I can do it!",
		"I admired Gala's determination - her desire to accomplish things despite setbacks, and her attitude towards life in general.",
		"g Now we just need to- oh, wait, what?",
		'show character g surp',
		"g I just had your sign up sheet here, and now I lost it. Oh nooo....... this is the worst...",
		'hide character g with fadeOut',
		"Gala frantically began to search around the room, flipping over books and chairs to find my sign up sheet, which I never even gave her in the first place. It was still in my outstretched arm.",
		"p Uh, it's right here.",
		'show character g surp with fadeIn',
		"g Oh! Thank goodness! You're a lifesaver.",
		'show character g normal',
		"p I uh, never actually gave it to you. I filled it out and before I could hand it to you you started talking about Rome.",
		'show character g pout',
		"g Awww, you tricked me? And here I was thinking that I was at fault...",
		"p I'm sorry...",
		'show character g normal',
		"g Haha! No worries. It's my fault entirely. Like I said yesterday, I'm just a little dense. I can't really pick up on social cues that easily, nor can I remember how to walk around school.",
		"g I'm also really bad at studying... like you saw yesterday.",
		"g But anyways! Let's go get your sheet to the Student Affairs office so you can officially be registered. I'll take you there.",
		'show scene #000000 with fadeIn duration 1 s',
		'wait 1000',
		'show scene outclub with fadeIn',
		'show character g normal with fadeIn',
		"While we walked to the S.A office, we talked about our childhood.",
		"g So, {{player.name}}, did you ever get into an accident before?",
		"p What do you mean by that?",
		"g Just like, any accident. Tripped, fell, broke a bone, whatever.",

		{'Choice':{
			'Yes':{
			'Text': 'Yeah.',
			'Do': "g Wow, really? Me too!",

		},
		'No':{
		
			'Text': 'No, never.',
			'Do': "g Oh, then I have a story for you!"
		},
			
		},
		},

		"g I once fell into a mine shaft!",
		"p You did what now?",
		"g So when Bizzie and I were kids, we used to play near the mines near our houses. We were told to never go into the mines, but one day I got really really curious.",
		"g Bizzie didn't want to go in with me and she left all of the sudden, so I went into the mines by myself.",
		"g That's when I tripped on a rock and fell into the mineshaft!",
		"g It wasn't that bad, it was only 30 feet.",
		"p You lived through a 30 foot drop?",
		"g Yeah, is that bad?",
		"I didn't know what kind of miraculous bone density she had. What was she made of?",
		"g I don't think I was hurt, but I did start crying because I got scared. It was dark and lonely and I didn't know where I was.",
		"g That's when a little boy popped up next to me. He really gave me a fright! He asked me if I was lost and helped me find the way out.",
		"g Apparently, he was a frequent explorer of the mines and helped discover a lot of cool new elements. The elements were named after the town we lived in, too.",
		"g After he helped me out, I never saw him again. Even after returning countless of times since then, I've never been able to meet him. No one seemed to remember him, too. He told me his name once but I'm forgetting that too.",
		"g I really wish we could learn to appreciate the things that other people do for us. Back then, I was just a scared little girl, but after, I don't remember saying thank you to him.",
		"g It sucked, because I think I was starting to have a crush on him too.",
		"In the middle of the story, I remembered that Gala and Bizzie were childhood friends, now turned one-sided enemies? The relationship was complicated.",
		"p So why does Bizzie call you Lala?",
		'show character g surp',
		"g Oh? You were able to talk to Bizzie yesterday?",
		'show character g normal',
		"g Wow, you really are amazing, aren't you?",
		"g I don't remember when she started calling me 'Lala', but I know it's because it had something to do with 'who I really was', whatever that meant.",
		"g I've long forgotten the reason.",
		"A wistful look appeared in Gala's eyes. Maybe talking about her childhood made her miss the fun times.",
		"g Wanna know a cool fact?",
		"p Sure.",
		"g After I fell in the mines, my parents took me to the hospital to check for injuries.",
		"p Did you have any?",
		"g I don't know. The doctors didn't, either.",
		"p What? Didn't they have x-ray machines?",
		"g Yeah, but it was really complicated. From what I can remember, it was almost like the xrays couldn't get to me, or something.",
		"g The pictures kept showing up uncompleted.",
		"g I felt fine anyways though, so they just let me go after a few hours.",
		"g It's crazy though. Whenever I think about why I'm here today, I just remember the fact that I was saved by a little boy in the mineshaft. I could've died so many times that day!",
		"Gala's life really was an interesting story. I felt like I got to know her a lot today.",
		"Maybe this would help me get closer with her.",
		'hide character g with fadeOut duration 1000',
		'show scene #000000 with fadeIn duration 1000',
		'wait 1000',
		'show scene club with fadeIn',
		"After turning in the form, we completed a few more errands before returning back to the club room.",
		'show character g emb with fadeIn',
		"g Geez, that was longer than I thought. I'm tired.",
		'show character g normal',
		"g So, {{player.name}} thanks for joining!",
		"g I'm really happy that you've decided to join the History club, but I gotta ask.",
		"g Why did you decide to join? I feel like there are tons of other clubs that are more exciting than History.",
		'jump galaChoice',
	],

	'galaChoice':[
		"p Well, it's because",
		
		
		{'Choice':{
			'Am':{
			'Text': 'You are an amazing person, and I wanted to get to know you better.',
			'Do': 'jump gconfess',

		},
		'His':{
		
			'Text': 'History is amazing!',
			'Do': "g Wow, really? I'm so glad you enjoy it!"
		},
			
		},
		},
		"p Not just History. I think that you're an amazing person too.",
		'jump gconfess',
	],

	'gconfess':[

		
		'show character g surp',
		"g -!",
		"p I, uh, really think you're a great person. I would love to spend more time with you.",

		{'Conditional': {
			'Condition': function(){
				if(monogatari.storage().player.name == 'Carl Axel Arrhenius') {
					return 'oog';
				} else 
					return 'boog'

					
			},
			'oog': 'jump galaRouteLove',
			'boog': 'jump galaRouteReject',
		}},



	],
	'galaRouteReject':[
		'show character g normal',

		"g I'm... really sorry, but I just see you as a friend.",
		"g I'm glad that you joined, and I really am grateful for the kind words, but I don't want to mislead you.",
		"g I hope I didn't hurt your feelings... it's just that I'm still kind of in love with the person that saved me.",
		"g I hope you understand.",
		"p Oh... I get it.",
		"It was a quick, brutal rejection. The room was awkward for a bit, before I excused myself back to the dorms.",
	
		"Man, if only I were someone else.",
		'show scene #000000 with fadeIn duration 1000',
		'stop music',
		'wait 3000',
		'jump choicescene'

	],
	'galaRouteLove':[
		'show character g surp',
		"g I... I don't know what to say...",
		"g Wait... Carl... Carl... Carl!",
		"g You were the one who saved me that day!",
		"p Yeah. It's been a while.",
		"g Why didn't you say anything!",
		'show character g normal',
		"p Well... it's been a while, I guess?",
		"Somewhere in the deep recesses on my memory, I remembered a small girl with silver and gold hair, just like Gala.",
		"I held her hand as we made our way out the mineshaft that I knew like the back of my hand.",
		"As the sun's light peeked through the entrance of an opening, I turned around and saw Gala's face in the light.",
		"The locks of gold hair reflected the orange rays perfectly. She shined brighter than anyone else in the world that day.",
		"That was my last day in the mines. I had already accomplished what I needed to do there in Ytterby, and my family moved somewhere else to continue exploring and charting new elements.",
		"The day I moved out, I wanted to see her one last time, but I couldn't find her at all.",
		"Until now.",
		"g Of course I'll spend more time with you! After all, I owe you my life, basically.",
		"My efforts to getting to know Gala had paid off. I spent the rest of the day with Gala in the room, talking about Roman History and plumbing.",

		function(){
			monogatari.storage().gala = true;
		},
		'show message Gala',
		'show scene #000000 with fadeIn duration 1000',
		'stop music',
		'wait 3000',
		'jump choicescene'

	],





//bizzieeeeeeeeeeee





	'bizzieRoute': [
		'clear',
		'play music school loop',
		'show scene cafe with fadeIn',
		"During lunch time, I usually came to the cafeteria to eat. Today, however, was unusually crowded. I wandered around the room for a bit before giving up.",
		"As I tried making my way out of the cafeteria, a certain small individual caught my eye.",
		'show character b close with fadeIn',
		"Bizzie was in deep concentration in something. Scattered around the table she was hogging were notebooks, pencils, and a bowl of mysterious pink liquid.",
		"Having nowhere to sit, I decided to try my luck.",
		"y Hey, uh, Bizzie.",
		'show character b normal',
		"b What?",
		"b ...",
		"b Oh, it's you. What's your name again?",
		{'Input': {
			'Text': 'My name is...',
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
		"b Mhm, ok. What are you doing here?",
		"p Can I, uh, sit here? Please?",
		"Bizzie contemplated it for a moment, before saying,",
		"b I suppose it won't hurt if you were to be in my proximity. Don't touch anything, or I'll kill you.",
		"I gently sat down in the chair across the table from her. Notebooks scattered every square inch of the table. As Bizzie worked, she periodically stopped to take a bite from her viscous bowl of pink slurry.",
		"p Hey, uh, Bizzie, what is that that you're eating?",
		"Bizzie looked at me as if I asked her to commit a cardinal sin.",
		"b ...",
		"p Uh, never mind, I guess.",
		"b It's custard.",
		"p Is it good at least?",
		"b It's amazing. Thank you for asking. Why don't you ask me about Seaborg's transmutation of gold, while you're at it, since you apparently want my thought process on everything?",
		'hide character b with fadeOut',
		"I learned to be quiet around Bizzie in order to not invoke her wrath. But seeing her happily chowing down on a bowl of pink custard made her almost seem like a regular teenager, not some distantly snappy child.",
		"I must have been dazed out for a while, because the moment she snapped her fingers in my face I was pulled back into reality.",
		'show character b normal with fadeIn',
		"b Hey. Help me carry my things back to my club room. If you drop anything you're dead. Here's my number if you get lost.",
		"Bizzie wrote down some digits on a piece of paper and handed it to me.",
		"It read 5.3826823381101",
		"To anyone else, it would've been seen as a deathly scary demand. But I realized that for someone who did every by herself for so long, this was probably the first time she asked someone for help.",
		'hide character b with fadeOut',
		"Bizzie placed the bowl's cover back on, before neatly packing it up and walking away, leaving behind the rest of her notebooks and pencils.",
		"Sighing, I picked up the pieces after her and navigated my way through a maze of bodies and tables. For someone the size of Bizzie, I wondered how she didn't get lost.",
		'show scene #000000 with fadeIn',
		'wait 3000',
		'show scene outclub with fadeIn',
		"I managed to catch up to Bizzie who was making her way down the long corridor of club rooms.",
		'show character b normal with fadeIn',
		"She stopped in front of a door. The plaque on it was nowhere near as impressive as the others. It was more a laminated poster taped onto the door which read: 'Gastroenterology Club - Room 207 - President: Bizzie'",
		"I wondered why there was such a discrepancy, until Bizzie opened the door to the club room.",
		'show scene smallclub with fadeIn',
		"The club room was obviously refurbished from a storage room. Stacks of chairs and tables piled up in the corner. There was so much dust in the air I felt my immune system tingling.",
		"On the far side of the room, a small blackboard lined the wall. Only the bottom half of it had any writing on it, presumably because the only person who did write on it was not tall enough.",
		'show character b normal with fadeIn',
		"b Welcome to the Gastroent Club, population me.",
		"p Don't you have other members?",
		"b Nope, just me.",
		"Bizzie plopped herself down onto a chair in the corner.",
		'show character b close',
		"b The club started this year. I had to fight tooth and nail to even get it approved, because no one looks at Gastroenterology and thinks 'That's a fun club I should join!'",
		"b Everyone else's clubs all are well-established, and have nice names and actually appeal to people. ",
		"b Now that I've experienced founding a club, I have so much respect now for those who've founded bigger, greater things than just high school clubs. There are so many geniuses who were inventors of their field, yet didn't get the recognition they deserved.",
		"b I mean, who wants to study how the stomach works anyways?",
		"p I do.",
		'show character b normal',
		"b ...",
		"b Do you want to know why I eat that custard every day?",
		"p Uhh, sure?",
		"b When I was younger, I used to get a lot of stomachaches. After playing with my friend, I would come home and I would feel terrible.",
		"b My mom would make me some special custard - the same one I have now - to help me, and it immediately soothed the pain.",
		"b Sometimes, they would be really bad. And I was stuck in bed all day while my friends were outside.",
		"b It was honestly the worst time of my life.",
		"p Your friends... was one of them Gala?",
		"b ...",
		"b Yes. Gala and I used to be friends when we were younger.",
		"p Why 'used to'? Why can't you guys be friends now?",
		"b ...Because we're too far apart now.",
		"I felt the feeling of jealousy emanating from Bizzie, her rainbow colored hair rippling in meager sunlight provided by the window.",
		"b Gala was... and will always be better than me. I've given up trying to close the distance.",
		"p What does that mean?",
		"b Even in our childhood, Gala was always the one that the others liked more. Even now, after both of us are here at Shiwa, she's still so much more liked.",
		"b When I heard that Gala was accepted into Shiwa, I was shocked. How could someone like her get in? She was so bad at studying, never got as good grades as I did, yet she still had something I didn't.",
		"b I studied so hard to get noticed by Shiwa. I spent almost every waking hour before trying to prove that I was just as good.",
		"b And despite the fact that I'm here along with her, it feels like she's just ahead by so much. She's president of the History Club, who actually has members, and I'm here trying to keep my club alive.",
		'show character b close',
		"b It isn't fair.",
		"I didn't know that Bizzie thought this way. All this time, I thought that she was a stuck up, pompous brat, who looked down on those who were less intelligent, less capable than her. But now, it almost felt like listening to myself a bit.",
		"p Have you tried, just, talking to her?",
		'show character b normal',
		"b Don't be silly. She would never talk to someone like me.",
		"p I don't know about that. Remember how I came up to you that day with your notebook?",
		"b Don't remind me.",
		"p I could've not returned it to you. We wouldn't be having this conversation right now. We would be total strangers, still sitting in Chem class a chair apart barely knowing each other.",
		"p I took a leap of faith, Bizzie. I think you should too.",
		"Bizzie was silent for a long time. I realized that I suddenly said too much. Instead of being greeted by a death stare, Bizzie smiled instead.",
		'show character b smile',
		"b You know, you might just be either the most annoying person or the wisest person I know.",
		"p Why not both?",
		"b Don't be silly.",
		"b Hey, I just have a question.",
		"b Why do you still try to talk to me? I don't mean that in a negative way.",
		"b It's just that I've been nothing but cruel to you, and I even threatened to kill you on your first day here. That was probably not the best first impression. Now, you've heard my story, and now you know I'm just a little brat. So why?",


		{'Choice':{
			'Like':{
			'Text': "Because I like that you're unique, Bizzie.",
			'Do': "b -!",

		},
		'No':{
		
			'Text': 'Because I like you',
			'Do': 'jump bconfess',
		},
			
		},
		},
		
		'show character b normal',

		'jump bconfess',
		
	],
	
	'bconfess':[
		
		'show character b normal',
		"p You're an amazing person, Bizzie. You just need to stop comparing yourself to others and really just try to fight for your beliefs. I know you can do it, and I want to support you.",

		{'Conditional': {
			'Condition': function(){
				if(monogatari.storage().player.name == 'Victor Goldschmidt') {
					return 'noog';
				} else 
					return 'loog'

					
			},
			'noog': 'jump bizzieSayYes',
			'loog': 'jump bizzieReject',
		}},



	],

	'bizzieReject':[

		"Bizzie said nothing. She slowly got up and went for the door.",
		"b I thought you were different. I thought you were a different person than you are. It's my fault. I should've known.",
		"Bizzie reached the door.",
		"b Don't come back again tomorrow. From here on outwards, we don't know each other.",
		'hide character b with fadeOut',
		"The silence in the room was deafening. I felt my own hopes and expectations shatter, their fragments strewn about on the dusty floor below me.",
		"Man, if only I were someone else.",
		'show scene #000000 with fadeIn duration 1000',
		'stop music',
		'wait 3000',
		'jump choicescene'
	],

	'bizzieSayYes':[

		'show character b close',
		"Bizzie suddenly stood up.",
		"b Don't be silly, Victor. You don't really want to be around me.",
		"She went to leave the room, but stopped and turned around.",
		'show character b smile',
		"b Can you come again tomorrow? I would really like that.",
		"p Yeah, sure.",
		"b Good. Then, well, see you tomorrow, I guess.",
		'hide character b with fadeOut',
		"Bizzie left the room. The image of her smile was imprinted in my memory, leaving a funny feeling in my heart.",

		"My efforts to getting to know Bizzie had paid off. I spent the time cleaning the dusty room as best as possible for tomorrow, before gently shutting the door behind me as I left.",
		function(){
			monogatari.storage().bizzie = true;
		},
		'show message Bizzie',
		'show scene #000000 with fadeIn duration 1000',
		'stop music',
		'wait 3000',
		'jump choicescene'



	],










//cinny routeeeee


	'cinnyRoute': [
		'clear',
		'play music school loop',
		
		'show scene outclub with fadeIn',
		"After school the next day I stood outside Club Room 194. The plaque outside the door said 'Dentistry Club - Room 194 - President: Cinny'.",
		"I gently opened the door...",
		'show scene club with fadeIn',
		"And no one was there.",
		"Strange, this was the denstistry club, wasn't it?",
		"Where was Cinny?",
		"Grabbing the Club Registration form in my hand, I realized I knew exactly where she would be at a time like this.",
		"Before I left though, I decided that filling in the form here would be a lot easier than doing it where Cinny was.",
		"I started with my name...",
				
		{'Input': {
			'Text': 'My name is...',
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

		"And.... done!",
		"Finishing the form, I left the Dentistry Club room to the courtyard.",
		'show scene #000000 with fadeIn',
		'wait 1000',
		'show scene schoolcourt with fadeIn',
		"Cinny was exactly where I thought she would be, wandering around the courtyard.",
		'show character c normal with fadeIn',
		"p Hi!",
		'show character c emb',
		"c Eeeek!",
		'show character c normal',
		"c Oh, it's you. Hi there! What's that?",
		"p My registration form for the Dentistry Club.",
		'show character c emb',
		"c Really? I'm so happy!",
		'show character c normal',
		"c I definitely will be the best club leader. I'm so glad you're gonna be with me.",
		"c Here, let me give you my number so we can communicate better.",
		"c It's 79.122623179251.",
		"p Just out of curiousity, why dentistry out of all things?",
		"c Oh? Well, both my parents were dentists, so it seemed natural for me to be interested in one.",
		'show character c sigh',
		"c As a child, I didn't really have any friends, so I spent a lot of my time with my parents in their clinic.",
		"c You might have noticed already, but people don't tend to like being around me.",
		"c I don't blame them. When they do, they tend to get sick.",
		'show character c normal',
		"c I'm just worried that it might happen to you to.",


		{'Choice':{
			'Nah':{
			'Text': 'Nah. I took my vitamins this morning',
			'Do': "c Hm... the only good vitamins are the gummy vitamins.",

		},
		'No':{
		
			'Text': 'Well, I was around you yesterday and I am still feeling fine',
			'Do': "c That's true, I guess."
		},
			
		},
		},

		'show character c sigh',

		"c Still, though, you should just be careful a bit. I don't want anything bad happening to you.",
		"I still thought about how people got sick around Cinny. Why was that the case? Nothing seemed off about her.",
		"c When I was a child, I used to play with this one girl Alumy a lot. One day, she scratched herself on a rock and cut herself open. I helped clean her wound and bandage it up, and she went home healthy that night.",
		"c The next day, though, her mom called to say that she wasn't going to let Alumy play with me anymore. Alumy got really really sick. From what I've heard, it was bad: her cut started getting really infected.",
		"c She got better some time later, but her mom never let me near her again.",
		"c I guess word got out because all of the sudden everyone started avoiding me.",
		"c My parents couldn't do much about it, so they let me help them with their work.",
		'show character c normal',
		"c Recently, they were developing a way to help fill cavities. I've been helping them try to develop that method at school, but it's hard with only me in the club.",
		"c That's why I'm really thankful that you're here too.",
		"c We should go back to the club room so I can tell you about the things I've been working on.",
		"I admired Cinny's perseverance through these troubles. Despite being rejected by those around her, she found purpose in a service that helped others. Despite being alone, she continued to work to support her parents. It was an amazing, beautiful thing.",
		'hide character c with fadeOut',
		'show scene #000000 with fadeIn',
		'wait 1000',
		'show scene club with fadeIn',
		'show character c normal with fadeIn',
		"p So what would you have specialized in if not for dentistry?",
		"c Hmmm, that's a good question.",
		"c Definitely nuclear chemistry.",
		"c I've really been amazed by how we've been able to discover such tiny little nuclei floating in the atom. I'd really like to meet someone who does this kind of work one day.",
		"c But anyways, here's all the work I have on cavity filling.",
		"c They're called amalgams, and the way they work is simply by filling the hole with a mixture of super strong alloys.",
		"c But sometimes they might not be able to stick to teeth, so we have to apply a mixture of Zinc-phosphate...",
		"Cinny spoke eagerly and passionately about her work. The shyness and reservedness melted away like a phase change from liquid to solid.",
		"As we cleaned up the room, she continued to talk about the various specifics of amalgam based reactions. It was fun listening to Cinny talk. The words flowed out of her mouth so fluidly. You would never have guessed that she was a shy person from this conversation.",
		'hide character c',
		'show scene #000000 with fadeIn',
		'show scene club with fadeIn',
		'show character c normal with fadeIn',
		"c Whew! That was a lot of cleaning! We still have some more work to do though... but before that,",
		"c You've been looking at me the entire time.",
		'show character c emb',
		"c It's a little embarassing...",
		"c It looks like you have something you want to tell me.",
		'jump cinnyChoice',
	],

	'cinnyChoice':[
		"p Look, Cinny, the truth is,",
		
		
		{'Choice':{
			'L':{
			'Text': 'I like you.',
			'Do': 'jump cinnyConfess',

		},
		'Hair':{
		
			'Text': 'I really like your hair.',
			'Do': "c Oh, really? Well, thanks."
		},
			
		},
		},
		"p And you, too.",
		'jump cinnyConfess',
	],






	'cinnyConfess':[
		
		'show character c emb',
		"c ...",
		"c ...I-",

		
		{'Conditional': {
			'Condition': function(){
				if(monogatari.storage().player.name == 'Ernest Rutherford') {
					return 'coog';
				} else 
					return 'poog'

					
			},
			'coog': 'jump sinny',
			'poog': 'jump nonny',
		}},

	],



	'sinny':[
		"c I-I'm definitely not the type of person you'd want to date. I mean, who'd want to spend more time with me?",
		"p Me. Don't discount yourself, Cinny. You're an amazing person.",
		"c ...",
		"Cinny was speechless. As the light caught her hair, her red, flowing locks almost matched the color of her face.",
		"c ...",
		"Cinny was quiet for a long time, before her voice came out in a small whisper.",
		'show character c normal',
		"c ...I'll be in your care.",
		"My efforts to getting to know Cinny had paid off. I spent the time cleaning the room with Cinny, laughing at jokes together and talking about teeth.",

		function(){
			monogatari.storage().cinny = true;
		},
		'show message Cinny',
		'show scene #000000 with fadeIn duration 1000',
		'stop music',
		'wait 3000',
		'jump choicescene',
	],

	'nonny':[
		"c I-I'm sorry. I...",
		"c I don't think I can really handle that right now.",
		"c I'm really sorry. It's just I'm not ready for these kinds of things, and I think we'd be much better if we just stayed like this.",
		"p No... I get it.",
		'hide character c with fadeOut',
		"We cleaned the rest of the room in silence. When it was time to go, Cinny left the room in a hurry, leaving me alone with my thoughts.",
		"Man, if only I were someone else.",
		'show scene #000000 with fadeIn duration 1000',
		'stop music',
		'wait 3000',
		'jump choicescene',,
	],
//get it because it's in spanish I will literally cry





//thaliaaaaaaaaaaaaaaaaa

	'thaliaRoute' :[
		'clear',
		'play music school loop',
		'show scene hallway with fadeIn',
		"It was a day like any other. I was minding my own business after class, when I heard it again.",
		'show scene hallway with shake infinite',
		"th RATS RATS WHERE ARE THE RATS!",
		"th CELEBRATING YET ANOTHER NOGGIN BASH",
		'show character th normal at left',
		'wait 30',
		'show character th normal at center',
		'wait 30',
		'show character th normal at right',
		'wait 30',
		'hide character th',
		"Fortunately I had practiced sidestepping the stampede of the individual in question. I watched as Thalia zipped across the hallway.",
		"Then, Thalia suddenly skidded to a halt, before launching herself back towards my direction.",
		'show scene hallway',
		'show character th normal at right',
		'wait 30',
		'show character th normal at center',
		"th Yo! New kid! How's it hanging?",
		"y I'm doing well, but I have a name, you know?",
		"th Do you now, Mr. Goon? Care to enlighten ol' Thalia on what we should call you?",
				
		{'Input': {
			'Text': 'My name is...',
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

		"p My name is {{player.name}}.",
		"th Lame! I'll call you Gooner from now on.",
		"p Oh, ok...",
		"th Hey Gooner! You should totally swing by the Rat Killing Club later today! I need your help with something.",
		"p What do you need?",
		"th Your brains, of course!",
		'show character th emb',
		"th I'm kinda failing math right now, and I could use a tutor like you to help me.",
		'show character th normal',
		"th I'll buy you snacks in return! How does that sound? Deal? Here's my number in case you have any questions.",
		"th It's 7.70875782516 x 10^-18",
		"Alright! Smell ya later!",
		'hide character th with bounceOutRight',
		"Before I could object, Thalia had already vacated the premises, leaving behind a trail of dust in her wake.",
		"I didn't feel like I had a choice in the matter.",
		'show scene #000000 with fadeIn',
		'wait 3000',
		'show scene club with fadeIn',
		"The Rat Killing Club, was surprisingly well furnished. Outside, the plaque read: 'Rat Killing Club - Room 204 - President: Thalia'",
		'show character th normal with fadeIn',
		"th Yo Gooner! Nice of you to join us.",
		"p I'm here to help you with your math homework. I haven't officially joined the Rat Killing Club yet.",
		"th Yeah yeah whatever. Alright here's what's up.",
		"th I got these math problems about triangles and stuff. Don't know about any of this. Anyways there's this fella named 'Lexa the Geologist' who's in them and they're really tryin' their hardest to make it the gas station.",
		'show character th emb',
		"th Every time I think of poor Lexa crossing the desert I get sad and can't do it, so I need you to help me so I won't get sad anymore!",
		"Thalia was surprisingly compassionate for someone of her demeanor and personality, even if that compassion was directed towards fictional math protagonists. It made her seem so much more human, rather than the flying frenzy that I usually saw in the hallways at odd hours.",
		'show character th normal',
		"p Yeah, I can help you. So, for this problem here...",
		" ",
		'hide character th with fadeOut',
		'show scene #000000 with fadeIn',
		'wait 2000',
		'show scene club with fadeIn',
		'show character th surp with fadeIn',
		"th So that's how you do it! Poor Lexa, you gotta get to the road on a slant!",
		"p Yeah, and that's about it. Remember the quadratic to find the minimum time.",
		"th Yeah yeah quadratics schematics. Hey, you wanna come rat hunting with me?",
		"p I...",
		"th Come on! It'll be fun!",
		'hide character th with fadeOut',
		'show scene #000000 with fadeIn',
		"Thalia dragged me out of the club room before I could react. I trailed behind her as she zigged and zagged over the school at her usual pace. Before I knew it...",
		'show scene hallway with fadeIn',
		'show character th normal with fadeIn',
		"th Bingo! Here we are! Best rat hunting spot there is!",
		"p Give me a second while I try not to lose my lunch on the floor.",
		"th Yeah yeah, anyways, look, you see that?",
		"On the ground was one of the fattest rats ever. It was literally the size of a small dog, and just as feisty. It lumbered around with an exaggerated swagger.",
		"th Look at the clompers on that thing! It's humungous! Here, go catch it!",
		"p Me?",
		"th Yeah! You! If you let that thing go, it'll wreak havoc everywhere and endanger the student body with hair loss and finger numbness!",
		'hide character th with fadeOut',
		"I didn't think rat's could do that, but I digress: I know nothing about rats. I slowly sneaked up to the fat rat, reached out to grab it-",
		"p OW!",
		"The rat turned around suddenly and chomped me on the finger. Thankfully it's teeth weren't that sharp so that it didn't draw blood, but in my few seconds of agony the rat scurried away.",
		'show character th uhoh with fadeIn',
		"th ...",
		"p I'm sorry...",
		"th Mhm...",
		"th That was gonna be the biggest catch of the week, and you let it get away.",
		'show character th normal',
		"th No worries! We'll just try again. It couldn't have gotten too far. Come on! We're going after it!",
		'hide character th with fadeOut',
		"Thalia dragged me along through the hallways, chanting a mantra about the Pied Piper drowning all the rats. I couldn't help but feel bitter that I failed such an easy task, but the more Thalia engaged me in the art of Rat Hunting, the more I began to appreciate her work.",
		"I enjoyed listening to Thalia's passionate speeches about how she needed to control the rat population.",
		'show character th normal with fadeIn',
		"th Did you know that rats breed like crazy? Some rat killers use arsenic or brodifacoum, or some other weak poison.",
		"th I use my own, homemade poison, synthesized from the finest of compounds.",
		"th Rat killing is an art, and you want to be the artist that's unique from everyone! Be different!",
		'hide character th with fadeOut',
		"Thalia proceeded to then drag me throughout the entire school, chasing the fat rat. We never found it.",
		'show scene #000000',
		'wait 3000',
		'show scene court2 with fadeIn',
		'show character th normal with fadeIn',
		"th Man! I'm pooped. That was a good day of chasing!",
		"I was still out of breath from the whole event. Thalia looked barely winded.",
		"th You did good Goon boy! For your first day.",
		"th Not many of my own members can even get close to big rats before getting scared off.",
		"th Consider yourself an honorary member of the Rat Killing Club! Of course, you can officially join us, but whatever floats your boat!",
		"Between my ragged breaths, I could see Thalia standing, looking proudly at the school building.",
		"I don't think I'd ever understand what goes on through Thalia's head. But seeing her bask in the sunlight, proud of her own work filled me with raw emotion.",

		
		{'Choice':{
			'L':{
			'Text': 'I like you.',
			'Do': 'jump thConfess',

		},
		'Rat':{
		
			'Text': 'I want to kill more rats with you.',
			'Do': "th Oh? You want to join the Rat Killing Club?",
		},
			
		},
		},
		"p Yeah, I guess, but also, I just wanted to say that I like you.",
		'jump thConfess',
		

	],



	'thConfess':[



					{'Conditional': {
						'Condition': function(){
							if(monogatari.storage().player.name == 'Alexander Rose') {
								return 'toog';
							} else 
								return 'michael'

								
						},
						'toog': 'jump ratlike',
						'michael': 'jump ratno',
					}},
	],	


	'ratlike':[

		'show character th surp',
		"th ...",
		"th Man... why do you have to go and wreck my train of thought...",
		"th Mmmm...",
		'show character th emb',
		"I noticed Thalia visibly squirming under my gaze.",
		"th ...I-uh, I mean-uh, that-",
		"th ....",
		"th ...ok.",
		"I didn't know that Thalia had this kind of side to her. The usually hotheaded, energetic Thalia I knew was reduced to a stammering mess after my confession.",
		"I found it quite cute, really.",
		'show character th normal',
		"th But! If you really want to prove that you like me, then you have to kill 100 rats by the end of this week!",
		"p But-what? It's friday afternoon!",
		"th Heehee, better get stompin Goonboy!",
		"And with just that, Thalia took my arm and we traversed across the courtyard. Thalia was laughing the whole way.",
		"My efforts to getting to know Thalia had paid off. I spent the time roaming around the halls with Thalia, tracking the path of the fat rat I swore I would get revenge on.",

		function(){
			monogatari.storage().thalia = true;
		},
		'show message Thalia',
		'show scene #000000 with fadeIn duration 1000',
		'stop music',
		'wait 3000',
		'jump choicescene',

	],
	
	'ratno':[
		'show character th uhoh',
		"th ...",
		"th ...",
		"th ...",
		"th Man, you're lame.",
		'hide character th with fadeOut',
		"And just like that, Thalia cold-heartedly rejected me, sprinting back into the school building. The tiredness finally caught up to me, and I collapsed on the soft grass of the garden.",
		"Man, if only I were someone else.",

		'show scene #000000 with fadeIn duration 1000',
		'stop music',
		'wait 3000',
		'jump choicescene',
	],
























	'end': [
		"And so time flew by, seemingly without a trace. Before I knew it, we had walked across the stage and received our diplomas.",
		"My time at Shiwa Academy had come to a close",
		'play music grad loop',
		'show scene atschool with fadeIn',
		"Half a year ago, I stood outside these gates with no idea on what I wanted to do in life.",
		"I was lost, scared, and alone.",
		"Well, I am still a little bit scared. Maybe just a little bit lost too. But at least in the end...",
		'show character g normal with fadeIn',
		"g Heya! Congrats on your graduation!",
		"y You too!",
		"g Wow, it's really been 6 months, hasn't it? I remember being your tour guide, too. Fun times!",
		"y Yeah, except for the time you didn't even show up to meet me here.",
		'show character g pout',
		"g Hmph, don't remind me about that. That was embarassing.",
		"g Hey, so anyway, Bizzie and I are going to get some polish done. Wanna meet us at the mall nearby?",
		'show character g normal left',
		'show character b normal right',
		"b Come oonnnnn Lala, you've been taking forever. Are we going or not?",
		'show character g emb left',
		"g Sorry! Yeah, let's get going!",
		'show character b smile right',
		"b No, don't apologize. And yeah, you should totally meet us there.",
		"b We're gonna go on ahead now. See you there!",
		'hide character g with fadeOut',
		'hide character b with fadeOut',
		"Gala and Bizzie headed into the distance, chatting with each other and laughing as they walked off.",
		"I couldn't believe that they went so many years without talking to each other, back to being good friends.",
		"There was a tug at my shoulder behind me.",
		'show character c normal with fadeIn',
		"c Hey, congrats on graduating.",
		"y Yeah, you too! I heard you got into med school, right?",
		"c Yeah. I'm going to pursue my goal of being a dentist. Thanks for everything.",
		"c We'll definitely keep in touch after grad. Maybe you'll even visit my clinic one day! Though I hope it's only for checkups, because if you have a cavity I will be really dissapointed in you.",
		"c Anyways, I'm gonna go now. I have to prepare to fly over to my new school soon. I'll definitely call you later, ok?",
		'hide character c with fadeOut',
		"With that, Cinny left the school grounds. I was amazed by how open she was now, from her usual reserved and shy self. I realized I wasn't the only one that changed this last half year.",
		'show character th normal',
		"th Hey Gooner! You have a silly smile on your face!",
		"And of course, there were some people that never would change, but for the better, of course.",
		"y Well, yeah. I'm seeing my friends off and we all just graduated. I'm a little happy.",
		"th Damn right you are! It's celebration time! The RK Club is gonna have a massive party later. You should come!",
		"th Anyways, I gotta head back home because word on the street is that a new rat family found a home in the neighbor's attic and they've been scaring the kids!",
		"th I gotta bounce. See ya!",
		'hide character th with fadeOut',
		"With that, Thalia ran off in her usual, energetic self.",
		"I turned back to look at Shiwa Academy one last time. It was a wonderful 6 months here. I wouldn't trade these memories for anything.",
		"I learned a lot about myself, about others, and I made such good friends.",
		"So many questions I didn't know the answer to - about things in general, about my life,",
		"I found so many answers here.",
		"These days were the happiest in my life.",
		"After a long look at the trees swaying in the gentle wind, I turned around to head back home.",


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
		"And there's something in common with them, as well as the clues you were given, right?",
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
		'show scene #FFFFFF with fadeIn',
		'stop music',
		'centered Thank you for playing! Enjoy the rest of the hunt!',
		'end',	

	],
		

});