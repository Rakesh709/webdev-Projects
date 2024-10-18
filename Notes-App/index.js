
const noteContainer = document.querySelector('.notes-container')
const createBtn = document.querySelector('.btn')

let notes = document.querySelectorAll(".input-box");

function showNotes(){
    noteContainer.innerHTML= localStorage.getItem("notes")
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes",noteContainer.innerHTML);
}


function startTimer(timerBox) {
    let startTime = new Date(); 
    setInterval(() => {
        let elapsedTime = new Date() - startTime;
        let seconds = Math.floor(elapsedTime / 1000) % 60;
        let minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
        let hours = Math.floor(elapsedTime / 1000 / 60 / 60);

        // Update the timerBox text content with elapsed time
        timerBox.textContent = `Time: ${hours}h ${minutes}m ${seconds}s`;
    }, 1000); // update every second
}



createBtn.addEventListener("click",()=>{
    let inputBox= document.createElement("p");
    let timerBox= document.createElement("p")
    let img = document.createElement("img")
    let timerImg = document.createElement("img")
    inputBox.className="input-box"
    timerBox.className="timer-box"
    inputBox.setAttribute("contenteditable","true")
    img.src="images/delete.png";
    timerImg.src="images/clock.png"
    noteContainer.appendChild(inputBox).appendChild(img);

    // Append timer box and timer image
    noteContainer.appendChild(timerBox).appendChild(timerImg);
    startTimer(timerBox);
    
    
    updateStorage();
})

noteContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName==="P"){
        notes= document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event.key ==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})


