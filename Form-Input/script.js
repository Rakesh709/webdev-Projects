/**
 * Write your challenge solution here
 */

const nameInput= document.getElementById("nameInput")

let nameDisplay= document.getElementById("nameDisplay")

nameInput.addEventListener("input",()=>(
  nameDisplay.innerText=nameInput.value
))


const jobInput= document.getElementById("jobInput")

let jobDisplay= document.getElementById("jobDisplay")

jobInput.addEventListener("input",()=>(
  jobDisplay.innerText=jobInput.value
))

const ageInput = document.getElementById("ageInput")

let ageDisplay = document.getElementById("ageDisplay")

ageInput.addEventListener("input", ()=>(
  ageDisplay.innerText= Number(ageInput.value)
))

const bioInput = document.getElementById("bioInput")
const bioDisplay = document.getElementById("bioDisplay")

bioInput.addEventListener("input",()=>(
  bioDisplay.innerText= bioInput.value
))