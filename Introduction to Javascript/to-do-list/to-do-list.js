let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(){
    let input = document.getElementById("taskInput");
    if(input.value === "") return;

    const newTask = {
        id: Date.now(),
        title: input.value,
        status: "pending"
    };

    tasks.push(newTask);
    input.value = "";
    displayTasks();
}
function displayTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
    const list = document.getElementById('taskList');
    list.innerHTML = "";

    tasks.forEach(task=>{
        const taskDiv = document.createElement("div");
        taskDiv.className = `task-item ${task.status} border border-black rounded`;

        const span = document.createElement("span");
        span.innerText = task.title;
        span.className = "p-1"
        
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.onclick = ()=> editTask(task.id);
        editBtn.className ="p-1 border border-black rounded"

        const statBtn = document.createElement("button");
        statBtn.innerText = `Status: ${task.status}`;
        statBtn.onclick = ()=> toggleStatus(task.id);
        statBtn.className ="p-1 border border-black rounded"

        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.onclick = () => deleteTask(task.id);
        delBtn.className = "p-1 border border-black rounded"

        taskDiv.appendChild(span);
        taskDiv.appendChild(editBtn);
        taskDiv.appendChild(statBtn);
        taskDiv.appendChild(delBtn);

        list.appendChild(taskDiv);
    });
}

function deleteTask(id){
    tasks = tasks.filter(task =>task.id !== id);
    displayTasks();
}

function toggleStatus(id){
    tasks = tasks.map(task => {
        if(task.id !== id ) return task;
        let newStatus;
        if(task.status === "pending") newStatus = "ongoing";
        else if(task.status === "ongoing") newStatus = "completed";
        else newStatus = "pending";

        return {...task,status: newStatus};
    });

    displayTasks();
}
function editTask(id){
    let input = prompt("Please enter task title");
    if(input === "") return;
    tasks = tasks.map(task =>{
        if(task.id !== id) return task;
        return{...task,title : input}
    });
    displayTasks();
}

document.addEventListener("DOMContentLoaded",()=>{
    displayTasks();

    const taskInput = document.getElementById("taskInput")
    taskInput.addEventListener("keydown",(event)=>{
        if (event.key === 'Enter') addTask();
    });

});
