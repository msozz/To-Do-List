import {useState} from 'react'

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState();

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            document.getElementById("input").value = "";
            setNewTask("")
        }
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_,i) => i !== index))
    }

    function moveUp(index) {
        if (index == 0){return;}
        const updateList = [...tasks];
        console.log(updateList[index]);
        [updateList[index],updateList[index-1]] = [updateList[index - 1],updateList[index]];
        setTasks(updateList);
    }
    function moveDown(index) {
        if (index == tasks.length){return;}
        const updateList = [...tasks];
        console.log(updateList[index]);
        [updateList[index],updateList[index-1]] = [updateList[index - 1],updateList[index]];
        setTasks(updateList);
    }

  return (
    <div className='todolist'>
        <h1>To-Do-List</h1>
        <div className="cont">
            <input type="text" placeholder='Enter a task...' id='input' onChange={handleInputChange}/>
            <button onClick={addTask}>Add List</button>
        </div>
        <hr style={{display: tasks.length > 0 ? "block" : "none"}}/>
        <ul>
            {tasks.map((task,index) => 
                <li key={index} className='listElement'>
                    <span className='task'>{task}</span>
                    <button className='elementButton' id='delete' onClick={()=>{deleteTask(index)}}>X</button>
                    <button className='elementButton' id='moveUp' onClick={()=>{moveUp(index)}}>⬆</button>
                    <button className='elementButton' id='moveDown' onClick={()=>{moveDown(index)}}>⬇</button>
                </li>
            )}
        </ul>
    </div>
  )
}

export default ToDoList