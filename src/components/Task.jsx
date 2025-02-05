import React, { useState, useEffect } from "react";
import Note from "./Note";

const Task = ({index, TasksRemaining, setTasksRemaining}) => {

    const [EditText, setEditText] = useState(`Set Task #${index}`);
    const [EditUpdated, setEditUpdated] = useState(false);
    const [Done, setDone] = useState(false);
    const [NotesOpened, setNotesOpened] = useState(false);

    const handleEdit = () => {
        //Open Textarea to edit tasks
        if(!EditUpdated)setEditUpdated(true);
        else setEditUpdated(false);
    }

    const handleNotes = () => {
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
            localStorage.setItem(`task-done-${index}`, Done);
        }
        else {
            setDone(false);
            setTasksRemaining(parseInt(Num)+1);
            localStorage.removeItem(`task-done-${index}`);
        }
    }

    const writeTask = (e) => {
        // Write and store task in local storage, unless empty string.
        // Todo update for longer task input, multi-line inputs, sanitize code, etc.

        let Task = e.target.value;
        if (!Task) {
            Task = `Set Task #${index}`;
            localStorage.removeItem(`task-${index}`);
        } else {
            localStorage.setItem(`task-${index}`, Task);
        }
        setEditText(Task);
    }

    useEffect(()=>{
    // Retain task info from Local Storage
        let savedTask =localStorage.getItem(`task-${index}`);
        if(savedTask) { 
            setEditText(savedTask); 
        }
    },[]);

    return (
      <div className="task-container">
        {!EditUpdated ?
            <div className="task">
                <button className={`task-button ${ Done ? "complete" : "incomplete"}`}>{EditText}</button>
                <div className="task-actions">
                    {!Done ? (<button  onClick={handleEdit}>Edit</button>) : ""}
                    {!Done ? (<button  onClick={handleNotes}>Notes</button>) : ""}
                    <button  onClick={handleDone}>{!Done ? "Done" : "Undo"}</button>
                </div>
            </div>
            :
            <div className="task task-update">
                <textarea className="task-textarea" onChange={writeTask} value={EditText}></textarea> 
                <div className="task-actions">
                    {!Done ? (<button  onClick={handleEdit}>Set</button>) : ""}
                    {!Done ? (<button  onClick={handleNotes}>Notes</button>) : ""}
                    {/* <button  onClick={handleDone}>{!Done ? "Done" : "Undo"}</button> */}
                </div>
            </div>
        }
        {/* {EditUpdated ? <h3>#{index} Clicked</h3> : null } */}
      </div>
    )
}


export default Task;