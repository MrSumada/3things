import React, { useState } from "react";

const Reset = ({ NewDate, setNewDate, setTasks }) => {

    const handleReset = () => {

        const defaultArray = [
            { text: "Set Task #1", complete: false, Notes: "" },
            { text: "Set Task #2", complete: false, Notes: "" },
            { text: "Set Task #3", complete: false, Notes: "" }
          ];

        setTasks(defaultArray);
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