let tasks = [];
function addTask(){
    let input = document.getElementById("taskInput");
    if(input.value === "") return;

    const newTask = {
        id: Date.now(),
        title: input.value,
        status: "pending"
    };

    tasks.push(newTask);
    console.log(newTask);
    input.value = "";
    displayTasks();
}

function displayTasks(){
    const list = document.getElementById('taskList');
    list.innerHTML = "";

    tasks.forEach(task=>{

        const taskDiv = document.createElement("div");
        taskDiv.className = `task-item ${task.status}`;

        const span = document.createElement("span");
        span.innerText = task.title;
        
        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.onclick = () => deleteTask(task.id);

        const statBtn = document.createElement("button");
        statBtn.innerText = `Status: ${task.status}`;
        statBtn.onclick = ()=> toggleStatus(task.id);

        taskDiv.appendChild(span);
        taskDiv.appendChild(delBtn);
        taskDiv.appendChild(statBtn);

        list.appendChild(taskDiv);
    });
}

function deleteTask(id){
    tasks = tasks.filter(task =>task.id !== id);
    displayTasks();
}

function toggleStatus(id){
    tasks = tasks.map(task =>{
        if(task.id === id){
            if(task.status === "pending"){
                task.status = "ongoing";
            }
            else if(task.status === "ongoing"){
                task.status = "completed";
            }
            else {
            task.status = "ongoing";
            }
        }
        return task
    });
    displayTasks();
}