
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





createBtn.addEventListener("click",()=>{
    let inputBox= document.createElement("p");
    let timerBox= document.createElement("p")
    let img = document.createElement("img")
    let clockImg = document.createElement("img")

    let breaker = document.createElement("div")
    breaker.className="dash-line"

    inputBox.className="input-box"
    timerBox.className = "timer-box"

    inputBox.setAttribute("contenteditable","true")
    img.src="images/delete.png";
    clockImg.src="images/clock.png"


    noteContainer.appendChild(inputBox).appendChild(img);

    let timeText = startTimer()
    timerBox.textContent = timeText;

    noteContainer.appendChild(timerBox).appendChild(clockImg)
    noteContainer.appendChild(breaker)

    updateStorage();
})

function startTimer() {
    let startTime = new Date(); 

    let currentTime = startTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    

    return `Task created at ${currentTime}`
}


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


