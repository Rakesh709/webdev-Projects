document.addEventListener("DOMContentLoaded",()=>{
  const  todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let task =JSON.parse(localStorage.getItem('tasks')) || []

task.forEach(task => renderTask(task))

addTaskButton.addEventListener("click",()=>{
    let taskText= todoInput.value.trim()
    console.log(taskText);
    if(taskText==="") return;

    let newTask ={
      id:Date.now(),
      text:taskText,
      completed:false
    }

    task.push(newTask);
    saveTask()
    todoInput.value='';
    console.log(task); 
})

function renderTask(task){
      console.log(task)
}



function saveTask(){
  localStorage.setItem('tasks',JSON.stringify(task))
}
})