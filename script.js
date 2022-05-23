// Elements
const image = getElem('img');
const title = getElem('#title');
const artist = getElem('#artist');
const music = getElem('audio');
const progressContainer = getElem('#progress-container');
const progress = getElem('#progress');
const currentTimeEl = getElem('#current-time');
const durationEl = getElem('#duration');
const prevBtn = getElem('#prev');
const playBtn = getElem('#play');
const nextBtn = getElem('#next');

// Counter for current song
let currentSong = 0;

// Music
const songs = [
  {
    name: 'music-1',
    displayName: 'DigitalTime',
    artist: 'matrix',
  },
    {
    name: 'music-2',
    displayName: 'Waves of Lucky',
    artist: 'matrix',
  },
  {
    name: 'music-3',
    displayName: 'CyberWars',
    artist: 'matrix',
  },
  {
    name: 'music-4',
    displayName: 'My Warrior',
    artist: 'matrix',
  },
  {
    name: 'music-5',
    displayName: 'Stairs',
    artist: 'matrix',
  },
  {
    name: 'music-6',
    displayName: 'Digital Valley',
    artist: 'matrix',
  },
  {
    name: 'music-7',
    displayName: 'Voyager',
    artist: 'matrix',
  },
 
];

// Check if song is playing
let isPlaying = false;

// Function to get elements by id
function getElem(id) {
  return document.querySelector(id);
}

// Function to Play Song
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Function to pause Song
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.png`;
}

// Function to update progress
function updateProgress(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;

    // Update Progress Bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // Calculate Display for the duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }

    // Delay switching the duration element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }

    // Calculate Display for the current time
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }

    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

// Function to set the time of the song by clicking the progress bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

// Function for next song
function nextSong() {
  currentSong < songs.length - 1 ? currentSong++ : (currentSong = 0);
  loadSong(songs[currentSong]);
  playSong();
}

// function for previous song
function previousSong() {
  currentSong <= 0 ? (currentSong = songs.length - 1) : currentSong--;
  loadSong(songs[currentSong]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[currentSong]);

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Skip event listener
nextBtn.addEventListener('click', nextSong);

// Previous event listener
prevBtn.addEventListener('click', previousSong);

// Update progress bar
music.addEventListener('timeupdate', updateProgress);

// Play the next song when the song ends
music.addEventListener('ended', nextSong);

// Click on progress bar to search through the song
progressContainer.addEventListener('click', setProgressBar);


/* Powerful Trap Beat | Strong by Alex-Productions | https://www.youtube.com/channel/UCx0_M61F81Nfb-BRXE-SeVA
Music promoted by https://www.chosic.com/free-music/all/
Creative Commons CC BY 3.0
https://creativecommons.org/licenses/by/3.0/
Cyberpunk Computer Game | IDRA by Alex-Productions | https://www.youtube.com/channel/UCx0_M61F81Nfb-BRXE-SeVA
Music promoted by https://www.chosic.com/free-music/all/
Creative Commons CC BY 3.0
https://creativecommons.org/licenses/by/3.0/
Extreme Sport Dubstep | I’m Back by Alex-Productions | https://www.youtube.com/channel/UCx0_M61F81Nfb-BRXE-SeVA
Music promoted by https://www.chosic.com/free-music/all/
Creative Commons CC BY 3.0
https://creativecommons.org/licenses/by/3.0/
 Brazilian Street Fight by Punch Deck | https://soundcloud.com/punch-deck
Music promoted by https://www.chosic.com/free-music/all/
Creative Commons Attribution 3.0 Unported License
https://creativecommons.org/licenses/by/3.0/deed.en_US 
 Hostiles Inbound by Miguel Johnson | https://soundcloud.com/migueljohnsonmjmusic
Music promoted by https://www.chosic.com/free-music/all/
Creative Commons CC BY 3.0
https://creativecommons.org/licenses/by/3.0/
 The Soul-Crushing Monotony Of Isolation (Instrumental Mix) by Punch Deck | https://soundcloud.com/punch-deck
Music promoted by https://www.chosic.com/free-music/all/
Creative Commons Attribution 3.0 Unported License
https://creativecommons.org/licenses/by/3.0/deed.en_US 
Dark Trap | DARKNESS by Alex-Productions | https://www.youtube.com/channel/UCx0_M61F81Nfb-BRXE-SeVA
Music promoted by https://www.chosic.com/free-music/all/
Creative Commons CC BY 3.0
https://creativecommons.org/licenses/by/3.0/
 
 */
