import React, { useState, useEffect } from "react";

const Task = ({index}) => {

    const [Text, setText] = useState(`Set Task #${index}`);
    const [Updated, setUpdated] = useState(false);
    const [Complete, setComplete] = useState(false);

    


    const handleUpdate = () => {
        if(!Updated){
            setUpdated(true);
        }
        else{
            setUpdated(false);
        }
    }

    const handleNotes = () => {
        console.log("add notes modal");
    }

    const handleComplete = () => {
        if(!Complete) setComplete(true);
        else setComplete(false);
    }

    const writeTask = (e) => {
        let Task = e.target.value;
        if (!Task) Task = `Set Task #${index}`;
        setText(Task);
        localStorage.setItem(`task-${index}`, Task);
    }

    useEffect(()=>{
        let savedTask =localStorage.getItem(`task-${index}`);
        if(savedTask) { 
            setText(savedTask); 
        }
    }
    , []
    )


    return (
      <div className="task-container">
        {!Updated ?
            <div className="task">
                <button className={`task-button ${ Complete ? "complete" : "incomplete"}`}>{Text}</button>
                <div className="task-actions">
                    {!Complete ? (<button  onClick={handleUpdate}>Edit</button>) : ""}
                    {!Complete ? (<button  onClick={handleNotes}>Notes</button>) : ""}
                    <button  onClick={handleComplete}>{!Complete ? "Done" : "Undo"}</button>
                </div>
            </div>
            :
            <div className="task task-update">
                <textarea className="task-textarea" onChange={writeTask}>{Text}</textarea> 
                <div className="task-actions">
                    {!Complete ? (<button  onClick={handleUpdate}>Set</button>) : ""}
                    {!Complete ? (<button  onClick={handleNotes}>Notes</button>) : ""}
                    {/* <button  onClick={handleComplete}>{!Complete ? "Done" : "Undo"}</button> */}
                </div>
            </div>
        }
        {/* {Updated ? <h3>#{index} Clicked</h3> : null } */}
        
      </div>
    )
}


export default Task;