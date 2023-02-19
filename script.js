const player = new Audio("audio/Warforlove.mp3");
const button = document.querySelector("div.play .button");
button.addEventListener("click", togglePlay);
function togglePlay() {
    if (player.paused) {
        player.play();
        button.src = "image/pause.png";
    }
    else {
        player.pause();
        button.src = "image/play.png";
    }
}