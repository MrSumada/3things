import React, { useState, useEffect } from "react";

const Header = ({TasksRemaining}) => {
    const [Text, SetText] = useState(`${TasksRemaining} Things`);
    const [PrevTask, setPrevTask] = useState(TasksRemaining);
    const [FadeOut, setFadeOut] = useState(false);
    const [FadeOutText, setFadeOutText] = useState(`${TasksRemaining} Things`);

    useEffect(() => {
        if(TasksRemaining == 0) SetText("You Did It!")

        if (PrevTask !== TasksRemaining) {
            setPrevTask(TasksRemaining); //
            setFadeOutText(Text);
            setFadeOut(true);
            if(TasksRemaining != 0) SetText(`${TasksRemaining} Things`);
            else SetText(`You Did It!`);

            setTimeout(() => {
                setFadeOut(false);
            }, 500); 
        }
      }, [TasksRemaining]);
    
    return (
        <>
            <h1 className={`${FadeOut ? "fade-in" : ""}`}>{Text}</h1> 
            <h1 className={`abs-position ${( FadeOut ? "fade-out" : "")}`}>{FadeOutText}</h1>
        </>
        
    )
}

export default Header;