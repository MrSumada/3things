import React, { useState } from "react";

const Reset = ({ NewDate, setNewDate, setTasks, setTasksRemaining }) => {

    const [SecondCheck, setSecondCheck] = useState(false);

    const handleSecondCheck = () => {
        setSecondCheck(true)
    }

    const handleReset = () => {

        const defaultArray = [
            { text: "Set Task #1", complete: false, Notes: "" },
            { text: "Set Task #2", complete: false, Notes: "" },
            { text: "Set Task #3", complete: false, Notes: "" }
          ];

        setTasks(defaultArray);
        setTasksRemaining(3);
        setSecondCheck(false);
        localStorage.removeItem("allTasks");
    }

    return(
        <>
            {!SecondCheck && (
                <button 
                    className={`reset-button ${ NewDate ? "new-date" : ""}`}
                    title={NewDate ? "Reset for the new day?" : "Reset?" }
                    onClick={handleSecondCheck}
                >
                    { NewDate ? (<>Reset ???</>) : (<>Reset?</>)}
                </button>
            )}  
            {SecondCheck && (

                <div className={`reset-check`}>
                    <label>Are you sure you want to reset?</label>
                    <div>
                        <button
                            className={`reset-button-check`}
                            onClick={handleReset}
                        >
                            Yes
                        </button>
                        <button
                            className={`reset-button-check`}
                            onClick={()=>setSecondCheck(false)}
                        >
                            No
                        </button>
                    </div>
                    
                </div>
    
            )}
        </>
    )
} 

export default Reset;