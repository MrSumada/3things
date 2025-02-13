import React, { useState, useEffect } from "react";

const HeaderFade = ({TasksRemaining}) => {

    // State for Header Text
    const [Text, SetText] = useState(`${TasksRemaining} Thing${TasksRemaining > 1 ? "s" : ""}`);
    // State Temporary PrevTask to allow Fade in and Fade out to overlap
    const [PrevTask, setPrevTask] = useState(TasksRemaining);
    const [FadeOut, setFadeOut] = useState(false);
    const [FadeOutText, setFadeOutText] = useState(`${TasksRemaining} Thing${TasksRemaining > 1 ? "s" : ""}`);

    useEffect(() => {
        if(TasksRemaining == 0) SetText("You Did It!")

        if (PrevTask !== TasksRemaining) {
            setPrevTask(TasksRemaining); //
            setFadeOutText(Text);
            setFadeOut(true);
            if(TasksRemaining != 0) SetText(`${TasksRemaining} Thing${TasksRemaining > 1 ? "s" : ""}`);
            else SetText(`You Did It!`);

            setTimeout(() => {
                setFadeOut(false);
            }, 500); 
        }
    }, [TasksRemaining]);
    
    return (
        <>
            {/* 
                Header, cuts to 0 opacity and fades in when TaskRemaining Changes 
            */}
            <h1 
            className={`${FadeOut ? "fade-in" : ""}`}
            >{Text}</h1> 
            {/* 
                Temporary Fade Out Text, positioned overlaps actual header 
                cute to 1 opacity and fades out when TaskRemaining Changes
            */}
            <h1 
            className={`abs-position ${( FadeOut ? "fade-out" : "")}`}
            >{FadeOutText}</h1>
        </>
        
    )
}

export default HeaderFade;