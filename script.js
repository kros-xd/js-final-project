// Kris Lee | July 24, 2026
"use strict";

const SONG_LIST = {
    song1: "assets/audio/Ax and the Hatchetmen- MAKO.mp3",
    song2: "assets/audio/beabadoobee - 'Cologne'.mp3",
    song3: "assets/audio/keshi - Forever (Official Visualizer).mp3",
    song4: "assets/audio/OXYGEN.mp3"
};

for (let key in SONG_LIST) {
    console.log(key);
    console.log(`Song name: ${SONG_LIST[key]}`);
};