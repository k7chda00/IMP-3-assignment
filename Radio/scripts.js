var player = document.getElementById('audio');

function setVolume(val) {
    player.volume = val / 100;
}

function play() {
    player.play();
}

function pause() {
    player.pause();
}