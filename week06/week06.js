// document.getElementById('remove').onclick().alert('hello');

function removeTask(element) {

    let id = element.substr(element.length - 1);
    let newList = JSON.parse(localStorage.getItem('tasks'));
    newList.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(newList));
    updateDisplay();

}

function checkBox(element){

    let id = element.substr(element.length - 1);
    let newList = JSON.parse(localStorage.getItem('tasks'));
    if(newList[id].completed === false){
        newList[id].completed = true;
    }
    else{
        newList[id].completed = false;
    }
    
    localStorage.setItem('tasks', JSON.stringify(newList));

    
    


    updateDisplay();
}

function updateDisplay() {

    let tasks = [];
    if(localStorage.getItem('tasks')){
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    // document.getElementById("tasks").innerHTML = tasks;

    let tasksString = "";

    for(let i = 0; i < tasks.length; i++)
    {
        let taskName = tasks[i].task;
        if(tasks[i].completed) {
            taskName = tasks[i].task.strike();
        }
        
        tasksString += "<div><input type='checkbox' id=" + "checkbox" + i + " name='task' value='completed' onclick='checkBox(this.id)'><label for='task' id=" + "taskName" + i + "> " + taskName + " </label><label id=" + "remove" + i + " onclick='removeTask(this.id)'>&#10006;</label><br></br></div>";
    }
    document.getElementById('tasks').innerHTML = tasksString;

    for(let i = 0; i < tasks.length; i++)
    {
        let checkBox = 'checkbox' + i;
        if(tasks[i].completed)
        {
            document.getElementById(checkBox).checked = true;
        }
    }
    
    
}

function updateStorage(task) {

    let tasks = [];

    if(localStorage.getItem('tasks')){
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    updateDisplay();
}

function getTask() {

    let task = document.getElementById("task").value;

    let student = {
        task: task,
        completed: false
    }

    document.forms[0].reset();
    event.preventDefault();

    updateStorage(student);
}


            
            