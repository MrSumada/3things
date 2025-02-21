import React, { useState, useEffect } from "react";
import Note from "./Note";

const Task = ({index, TasksRemaining, setTasksRemaining, text, complete, notes, Tasks, setTasks}) => {

    const [EditText, setEditText] = useState(text);
    const [EditUpdated, setEditUpdated] = useState(false);
    const [Done, setDone] = useState(complete);
    const [NotesOpened, setNotesOpened] = useState(false);

    const saveTasks = (key, data) => {
        const newTasks = Tasks.map((task, i) => 
            i === index ? { ...task, [key]: data } : task
        )
        console.log(newTasks)
        setTasks(newTasks);
        localStorage.setItem('allTasks', JSON.stringify(newTasks));
    }

    const handleEditOpen = () => {
        //Open Textarea to edit tasks
        if(!EditUpdated)setEditUpdated(true);
        else {
            if(EditText == "") setEditText(`Set Task #${index+1}`);
            setEditUpdated(false);
            saveTasks("text", EditText.trim())
        }
    }

    const handleNotesOpen = () => {
        // TO DO: trigger notes Modal
        // Update state adn add info to local storage
        if(!NotesOpened) {
            setNotesOpened(false);
        } else {
            setNotesOpened(true);
        }
    }

    const handleDone = () => {
        // Update state and add info to local storage
        let Num = TasksRemaining;
        if(!Done) {
            setDone(true);
            setTasksRemaining(parseInt(Num)-1);
            localStorage.setItem("tasks-remaining", parseInt(TasksRemaining)-1);
            console.log("Tasks remaining: ", TasksRemaining);
        }
        else {
            setDone(false);
            setTasksRemaining(parseInt(Num)+1);
            localStorage.setItem("tasks-remaining", parseInt(TasksRemaining) + 1);
            console.log("Tasks remaining: ", TasksRemaining);
        }
        saveTasks("complete", !Done);
    }

    const writeTask = (e) => {
        let newTask = e.target.value;
        setEditText(newTask);
    }

    useEffect(()=>{
        setEditText(text);
    },[text]);

    return (
      <div className="task-container">
        {!EditUpdated ?
            <div className="task">
                <button onClick={handleEditOpen} className={`task-button ${ Done ? "complete" : "incomplete"}`}>{EditText}</button>
                <div className="task-actions">
                    {!Done ? (<button  onClick={handleEditOpen}>Edit</button>) : ""}
                    {!Done ? (<button  onClick={handleNotesOpen}>Notes</button>) : ""}
                    <button  onClick={handleDone}>{!Done ? "Done" : "Undo"}</button>
                </div>
            </div>
            :
            <div className="task task-update">
                <textarea className="task-textarea" onChange={writeTask} value={EditText}></textarea> 
                <div className="task-actions">
                    {!Done ? (<button  onClick={handleEditOpen}>Set</button>) : ""}
                    {!Done ? (<button  onClick={handleNotesOpen}>Notes</button>) : ""}
                    {/* <button  onClick={handleDone}>{!Done ? "Done" : "Undo"}</button> */}
                </div>
            </div>
        }
        {/* {EditUpdated ? <h3>#{index} Clicked</h3> : null } */}
      </div>
    )
}


export default Task;