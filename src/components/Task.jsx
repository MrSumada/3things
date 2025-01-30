import React, { useState, useEffect } from "react";

const Task = ({index}) => {

    const [Text, setText] = useState(`Set Task #${index}`);
    const [Updated, setUpdated] = useState(false);
    

    const Update = () => {
        if(!Updated){
            setUpdated(true);
        }
        else{
            setUpdated(false);
        }
    }

    const writeTask = (e) => {
        setText(e.target.value);
    }

    return (
      <div className="task">
        {!Updated ?
            <button onClick={Update}>{Text}</button>
            :
            <div>
                <textarea onChange={writeTask}>{Text}</textarea> 
                <button  onClick={Update}>Set</button>
            </div>
        }
        {/* {Updated ? <h3>#{index} Clicked</h3> : null } */}
        
      </div>
    )
}


export default Task;