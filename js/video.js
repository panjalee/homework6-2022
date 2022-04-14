var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	video.autoplay = false
	video.loop = false
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("Volume is " + (video.volume * 100 + "%"))
	console.log("Play Video")
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause Video")
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Speed is " + video.playbackRate)
	video.playbackRate = video.playbackRate * 0.95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed is " + video.playbackRate)
	video.playbackRate = video.playbackRate / 0.95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime =  video.currentTime + 15
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("Location is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Volume is " + video.muted)
	if (video.muted == true) {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
        console.log("unmuted")
	}
	else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
        console.log("muted")
	}
});

var slider = document.querySelector("#slider");

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = slider.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
    console.log("Volume is " + (video.volume * 100 + "%"))
}); 

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
    console.log("Old School")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
    console.log("Original")
});



