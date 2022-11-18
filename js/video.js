// Add js here.



/* PAGE LOAD */
window.addEventListener("load", function() {
	video = document.querySelector("#videoplayer");
    video.autoplay = false;
    video.loop = false;
	
});

/* PLAY BUTTON */
document.querySelector("#play").addEventListener("click", function playVid() {
	console.log("Play Video");
	video.play();
	});


/* PAUSE BUTTON */

document.querySelector("#pause").addEventListener("click", function pauseVid() {
	console.log("Pause Video");
	video.pause();
	});


/* SLOW DOWN */

document.querySelector("#slower").addEventListener("click", function slowVid() {
	console.log("Slow Down");
    if (video.playbackRate == 0.5) {
        window.alert("Video is at slowest speed!");
    }

    else if (video.playbackRate == 1) {
        video.playbackRate = 0.5;
    }

    else if (video.playbackRate == 2) {
        video.playbackRate = 1;
    }

    console.log(video.playbackRate);
    })

/* SPEED UP */

document.querySelector("#faster").addEventListener("click", function speedVid() {
	console.log("Speed Up");
    if (video.playbackRate == 2) {
        window.alert("Video is at fastest speed!");
    }

    else if (video.playbackRate == 1) {
        video.playbackRate = 2;
    }

    else if (video.playbackRate == 0.5) {
        video.playbackRate = 1;
    }

    console.log(video.playbackRate);
    })


/* SKIP AHEAD */
document.querySelector("#skip").addEventListener("click", function skipahead() {
    video.currentTime = video.currentTime + 15;
    if (video.currentTime >= video.duration){
        video.currentTime = 0;
        video.autoplay = false;
    }
})

/* MUTE */
document.querySelector("#mute").addEventListener("click", function muteVid() {

    if (video.muted == false){
        video.volume = 0;
        document.querySelector("#mute").innerHTML = "Muted";
        video.muted = true;
        console.log("Video Muted");
    }

    else if (video.muted == true){
        video.volume = 1;
        document.querySelector("#mute").innerHTML = "Mute";
        video.muted = false;
        console.log("Video Unmuted");
    }

})



/* VOLUME SLIDER */

document.querySelector("#slider").addEventListener("change", function slide() {
    var slideval = document.querySelector("#slider").value;
    console.log(slideval);
    video.volume = slideval / 100;
    document.querySelector("#volume").innerHTML = slideval + "%";
    console.log(volume);

})