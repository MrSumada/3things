import React, { useState, useEffect } from "react";

const Header = ({TasksRemaining}) => {

    // State for Header Text
    const [Text, SetText] = useState(`${TasksRemaining} Thing${TasksRemaining > 1 ? "s" : ""}`);

    useEffect(() => {
        if(TasksRemaining == 0) SetText("You Did It!")
        if(TasksRemaining != 0) SetText(`${TasksRemaining} Thing${TasksRemaining > 1 ? "s" : ""}`);
        else SetText(`You Did It!`);
    }, [TasksRemaining]);
    
    return (
        <>
            <h1>{Text}</h1> 
        </>
        
    )
}

export default Header;