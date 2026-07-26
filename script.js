// Kris Lee | July 24, 2026
"use strict";

const SONG_LIST = {
    0: {
        song: "assets/audio/Ax and the Hatchetmen- MAKO.mp3",
        name: "Ax and the Hatchetmen",
        title: "MAKO",
        image: "assets/images/mako-ax.jpeg"
    },
    1: {
        song: "assets/audio/beabadoobee - 'Cologne'.mp3",
        name: "Beabadoobee",
        title: "Cologne",
        image: "assets/images/cologne-beabadoobee.jpeg"
    },
    2: {
        song: "assets/audio/keshi - Forever (Official Visualizer).mp3",
        name: "Keshi",
        title: "Forever",
        image: "assets/images/requiem-keshi.jpeg"
    },
    3: {
        song: "assets/audio/OXYGEN.mp3",
        name: "Porchlight",
        title: "Oxygen",
        image: "assets/images/oxygen-porchlight.jpeg"
    }
};

// Variables for volume controls
const decreaseVolumeBtn = document.getElementById("minus-volume-btn");
const increaseVolumeBtn = document.getElementById("add-volume-btn");
const audioSource = document.querySelector("audio");
let volumeSlider = document.querySelector("input");

// Match volume slider and audio volume to 50%
audioSource.volume = 0.5;
volumeSlider.value = audioSource.volume;

// Volume Control Functions
function decreaseVolume() {
    let decreaseValue = 0.1;

    if (audioSource.volume >= 0.1 && volumeSlider.value >= 0.1) {
        audioSource.volume -= decreaseValue;
        volumeSlider.value = audioSource.volume;
        console.log(`Volume set to ${audioSource.volume * 100}%`);
    } else {
        audioSource.volume = 0;
        volumeSlider.value = 0;
    }

    return;
}

function increaseVolume() {
    let increaseValue = 0.1;

    if (audioSource.volume < 0.9 && volumeSlider.value < 0.9) {
        audioSource.volume += increaseValue;
        volumeSlider.value = audioSource.volume;
        console.log(`Volume set to ${audioSource.volume * 100}%`);
    } else {
        audioSource.volume = 1;
        volumeSlider.value = 1;
    }

    return;
}

decreaseVolumeBtn.addEventListener("click", decreaseVolume);
increaseVolumeBtn.addEventListener("click", increaseVolume);
volumeSlider.addEventListener("input", () => {
    audioSource.volume = volumeSlider.value;
})

// const previous & skip buttons
const previousBtn = document.querySelector("#previous-btn");
const skipBtn = document.querySelector("#skip-btn");
let currentIndex = 0;
console.log(Object.keys(SONG_LIST).length);

function skipToNextSong() {
    const keyLength = Object.keys(SONG_LIST).length;
    currentIndex = (currentIndex + 1) % keyLength;
    audioSource.src = SONG_LIST[currentIndex].song;
    playbackHandler.src = "assets/svgs/darkPauseBtn.svg";
    playbackHandler.alt = "play";
    updateAlbumImage();
    updateSongDescription();
    audioSource.play();
}

function previousSong() {
    const keyLength = Object.keys(SONG_LIST).length
    currentIndex = (currentIndex - 1 + keyLength) % keyLength;
    audioSource.src = SONG_LIST[currentIndex].song;
    playbackHandler.src = "assets/svgs/darkPauseBtn.svg";
    playbackHandler.alt = "play";
    audioSource.play();
}

skipBtn.addEventListener("click", skipToNextSong);
previousBtn.addEventListener("click", previousSong);
audioSource.addEventListener("ended", skipToNextSong);

// const variable for play & stop handling
const playbackHandler = document.getElementById("playback-handler");

// Play & Stop Functions
playbackHandler.addEventListener("click", () => {
    if (audioSource.paused) {
        audioSource.play();
        playbackHandler.src = "assets/svgs/darkPauseBtn.svg";
        playbackHandler.alt = "play";
    } else {
        audioSource.pause();
        playbackHandler.src = "assets/svgs/darkPlayBtn.svg";
        playbackHandler.alt = "paused";
    }
})

// Change album cover art
const tempImage = document.getElementById("temp-image");
const albumHandler = document.getElementById("album-screen");

function updateAlbumImage() {
    tempImage.style.display = "none";
    albumHandler.style.backgroundImage = `url("${SONG_LIST[currentIndex].image}")`;
}

playbackHandler.addEventListener("click", updateAlbumImage);
previousBtn.addEventListener("click", updateAlbumImage);
skipBtn.addEventListener("click", updateAlbumImage);

// Change text content to show song title -- artist
const textHandler = document.getElementById("song-desc");

function updateSongDescription() {
    textHandler.textContent = `${SONG_LIST[currentIndex].title} - ${SONG_LIST[currentIndex].name}`;
}

playbackHandler.addEventListener("click", updateSongDescription);
previousBtn.addEventListener("click", updateSongDescription);
skipBtn.addEventListener("click", updateSongDescription);