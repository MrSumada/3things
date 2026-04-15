import { useState, useEffect } from "react";

const Header = ({TasksRemaining}) => {

    // State for Header Title
    const [Title, setTitle] = useState(`${TasksRemaining} Thing${TasksRemaining > 1 ? "s" : ""}`);

    useEffect(() => {
        if(TasksRemaining == 0) setTitle("You Did It!")
        if(TasksRemaining != 0) setTitle(`${TasksRemaining} Thing${TasksRemaining > 1 ? "s" : ""}`);
        else setTitle(`You Did It!`);
    }, [TasksRemaining]);
    
    return (
        <>
            <h1>{Title}</h1> 
        </>
        
    )
}

export default Header;