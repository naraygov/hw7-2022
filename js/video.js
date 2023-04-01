var video;

window.addEventListener("load", function() {
	video = document.getElementById("player1");
	console.log("Good job opening the window")

	console.log("Auto play is set to", video.autoplay);
	console.log("Loop is set to", video.loop);

	document.getElementById("play").addEventListener("click", function() {
		console.log("Play Video");
		document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	   video.play()
   });
   
   document.querySelector("#pause").addEventListener("click", function() {
	   console.log("Pause Video");
	  video.pause()
   });
   
   document.querySelector("#slower").addEventListener("click", function() {
	   console.log("Slow down video");
	   let rate = video.playbackRate * 0.9;
	   video.playbackRate = rate;
	   console.log("Speed is", rate)
   });
   
   document.querySelector("#faster").addEventListener("click", function() {
	   console.log("Speed up video");
	   let rate = video.playbackRate / 0.9;
	   video.playbackRate = rate;
	   console.log("Speed is", rate);
   });
   
   document.querySelector("#skip").addEventListener("click", function() {
	   console.log("Skip ahead");
	   let skip = video.currentTime;
	   if (skip < video.duration - 10) {
		   skip = skip + 10;
	   } else {
		   skip = 0;
	   }
	   video.currentTime = skip;
	   console.log("Video current time is", skip);
   });
   
   document.querySelector("#mute").addEventListener("click", function() {
	   if (document.querySelector("#mute").innerHTML == "Mute") {
		   console.log("Mute");
		   document.querySelector("#mute").innerHTML = "Unmute";
		   video.muted = true;
	   } else {
		   console.log("Unmute");
		   document.querySelector("#mute").innerHTML = "Mute";
		   video.muted = false;
	   }
   });
   
   let val = 0;
   document.querySelector("#slider").addEventListener("mousedown", function() {
		val = document.querySelector("#slider").value / 100;
   });

   document.querySelector("#slider").addEventListener("mouseup", function() {
	console.log("The current value is", val);
	val = document.querySelector("#slider").value / 100;
	video.volume = val
	console.log("The current value is", val);
	console.log(document.querySelector("#volume"))
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		document.getElementById("player1").classList.add('oldSchool');
	})

	document.querySelector("#orig").addEventListener("click", function() {
		document.getElementById("player1").classList.remove('oldSchool');
	})
});
