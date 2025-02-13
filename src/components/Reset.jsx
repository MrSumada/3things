import React, { useState } from "react";

const Reset = ({ NewDate, setNewDate, setTasks }) => {

    const handleReset = () => {

        const defaultArray = [
            { text: "Set Task #1", complete: false, Notes: "" },
            { text: "Set Task #2", complete: false, Notes: "" },
            { text: "Set Task #3", complete: false, Notes: "" }
          ];

        console.log("reset!")
        setTasks(defaultArray);
        localStorage.removeItem("allTasks");
    }

    return(
        <>
            <button 
                className={`reset-button ${ NewDate ? "new-date" : ""}`}
                onClick={handleReset}
            >
                { NewDate ? (<>New Day!... Reset?</>) : (<>Reset?</>)}
            </button>
        </>
    )
}

export default Reset;