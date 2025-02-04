import React, { useState, useEffect } from "react";

const Task = ({index}) => {

    const [Text, setText] = useState(`Set Task #${index}`);
    const [Updated, setUpdated] = useState(false);
    const [Complete, setComplete] = useState(false);

    


    const Update = () => {
        if(!Updated){
            setUpdated(true);
        }
        else{
            setUpdated(false);
        }
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
      <div className="task">
        {!Updated ?
            <div>
                <button style={{backgroundColor: Complete ? "teal"  : "", color: Complete? "white" : "black"}} onClick={Update}>{Text}</button>
                <button  onClick={handleComplete}>{!Complete ? "Done" : "Undo"}</button>
            </div>
            :
            <div className="task-update">
                <textarea onChange={writeTask}>{Text}</textarea> 
                <button  onClick={Update}>Set</button>
                
            </div>
        }
        {/* {Updated ? <h3>#{index} Clicked</h3> : null } */}
        
      </div>
    )
}


export default Task;