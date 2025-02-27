import React, { useState, useEffect } from "react";
import Note from "./Note";

const Task = ({index, TasksRemaining, setTasksRemaining, text, complete, notes, Tasks, setTasks}) => {

    const [Task, setTask] = useState(text);
    const [EditOpened, setEditOpened] = useState(false);
    const [Done, setDone] = useState(complete);
    const [NotesOpened, setNotesOpened] = useState(false);

    const saveTasks = (key, data) => {
        const newTasks = Tasks.map((task, i) => 
            i === index ? { ...task, [key]: data } : task
        )
        setTasks(newTasks);
        localStorage.setItem('allTasks', JSON.stringify(newTasks));
    }

    const handleEditOpen = (e) => {
        //Open textarea to edit tasks
        if(!EditOpened){
            if(Task == `Set Task #${index+1}`) setTask("");
            setEditOpened(true);
            setTimeout(() => document.getElementById(`textfield-${index}`).focus());
        } else {
            setEditOpened(false);
            if(Task.trim() == "") { 
                setTask(`Set Task #${index+1}`); 
                saveTasks("text", `Set Task #${index+1}`);
            }else {
                saveTasks("text", Task.trim());
            }
            
        }
    }

    const handleNotesOpen = () => {
        // TO DO: trigger notes Modal
        // Update state adn add info to local storage
        if(NotesOpened) {
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
        }
        else {
            setDone(false);
            setTasksRemaining(parseInt(Num)+1);
            localStorage.setItem("tasks-remaining", parseInt(TasksRemaining) + 1);
        }
        saveTasks("complete", !Done);
    }

    const writeTask = (e) => {
        let newTask = e.target.value;
        setTask(newTask);
    }

    useEffect(()=>{
        setTask(text);
    },[text]);

    useEffect(()=>{
        setDone(complete);
    },[complete]);

    return (
      <div className="task-container">
        {NotesOpened ? 
            <Note 
                notes={notes}
                Task={Task}
                setNotesOpened={setNotesOpened}
                saveTasks={saveTasks}
            /> 
        : "" }
        {!EditOpened ?
            <div className="task">
                <button id={`task-${index}`} 
                    onClick={ !Done ? handleEditOpen : undefined} 
                    className={`task-button ${ Done ? "complete" : "incomplete"}`
                }>{Task}</button>
                <div className="task-actions">
                    {!Done ? (<button  className="btn-edit" onClick={handleEditOpen}>Edit</button>) : ""}
                    {!Done ? (<button  className="btn-notes" onClick={handleNotesOpen}>Notes</button>) : ""}
                    <button  className="btn-done" onClick={handleDone}>{!Done ? "Done" : "Undo"}</button>
                </div>
            </div>
            :
            <div className="task task-update">
                <textarea id={`textfield-${index}`} className="task-textarea" onChange={writeTask} value={Task}></textarea> 
                <div className="task-actions">
                    {!Done ? (<button className="btn-set" onClick={handleEditOpen}>Set</button>) : ""}
                    {!Done ? (<button className="btn-notes" onClick={handleNotesOpen}>Notes</button>) : ""}
                </div>
            </div>
        }
      </div>
    )
}


export default Task;