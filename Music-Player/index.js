let progress =document.getElementById("progress")
let song =document.getElementById("song")
let ctrlIcon =document.getElementById("ctrlIcon")
let interval;

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

document.getElementById("play").addEventListener("click",function(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");

        // Update the progress bar while the song is playing
        interval = setInterval(() => {
            progress.value = song.currentTime;
        }, 500);
    }
})

// if(song.paused===false){
//     setInterval(() => {
//         progress.value= song.currentTime;
//     }, 500);
// }


progress.onchange= function(){
    
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}





