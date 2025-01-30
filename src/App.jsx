import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Task from "./components/Task";

function App() {
  return (
    <>
      <h1>3 Things</h1>
      <div className="tasks">
      {[1, 2, 3].map((i) => (
        <Task key={i} index={i}/>
      ))}
    </div>
    </>
    
  );
}

export default App;
