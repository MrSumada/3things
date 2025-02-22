import React, { useState } from "react";

const Reset = ({ NewDate, setNewDate, setTasks, setTasksRemaining }) => {

    const handleReset = () => {

        const defaultArray = [
            { text: "Set Task #1", complete: false, Notes: "" },
            { text: "Set Task #2", complete: false, Notes: "" },
            { text: "Set Task #3", complete: false, Notes: "" }
          ];

        setTasks(defaultArray);
        setTasksRemaining(3);
        localStorage.removeItem("allTasks");
    }

    return(
        <>
            <button 
                className={`reset-button ${ NewDate ? "new-date" : ""}`}
                title={ NewDate ? "Reset for the new day?" : "Reset?" }
                onClick={handleReset}
            >
                { NewDate ? (<>Reset ???</>) : (<>Reset?</>)}
            </button>
        </>
    )
}

export default Reset;