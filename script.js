let content;
let soundtrackBlock;

let movieSoundtracks = [
	{
		"movieName": "Interstellar",
		"year": "2014",
		"composer": "Hans Zimmer",
        "bestSong": "Main Theme",
		"image": "interstellar.jpeg"
	},
	{
		"movieName": "The Bodyguard",
		"year": "1992",
		"composer": "Alan Silvestri",
        "bestSong": "I Will Always Love You",
		"image": "bodyguard.jpeg"
	},
	{
		"movieName": "La La Land",
		"year": "2003",
		"composer": "Justin Hurwitz",
        "bestSong": "City of Stars",
		"image": "lalaland.jpeg"
	},
	{
		"movieName": "Spiderman: Into the Spiderverse",
		"year": "2018",
		"composer": "Daniel Pemberton",
        "bestSong": "What's Up Danger",
		"image": "spiderverse.jpeg"
	},
    {
		"movieName": "Purple Rain",
		"year": "1984",
		"composer": "Prince",
        "bestSong": "Purple Rain",
		"image": "purplerain.png"
	},
    {
		"movieName": "How to Train Your Dragon",
		"year": "2010",
		"composer": "John Powell",
        "bestSong": "Test Drive",
		"image": "httyd.jpeg"
	}
];

function createPage() {
	content = document.getElementById('content');

	for (let movie of movieSoundtracks) {
		soundtrackBlock = document.createElement('div');
		soundtrackBlock.className = 'soundtrackBlock'; 
        soundtrackBlock.setAttribute('data-aos', 'zoom-in-up');

		let moviePoster = document.createElement('img');
		moviePoster.className = 'moviePoster';
		moviePoster.src = movie.image;
	    soundtrackBlock.appendChild(moviePoster);

	    let movieTitle = document.createElement('h1');
		movieTitle.textContent = movie.movieName;
	    soundtrackBlock.appendChild(movieTitle);

        let songComposer = document.createElement('h2');
		songComposer.textContent = "Composer: " + movie.composer;
	    soundtrackBlock.appendChild(songComposer);

        let bestSong = document.createElement('p');
		bestSong.textContent = "Best Song: " + movie.bestSong;
	    soundtrackBlock.appendChild(bestSong);

	    let movieYear = document.createElement('p');
		movieYear.textContent = movie.year;
	    soundtrackBlock.appendChild(movieYear);

		content.appendChild(soundtrackBlock);
	}
}

createPage(); 
AOS.init();