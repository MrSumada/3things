import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task";

function App() {
  const [TasksRemaining, setTasksRemaining] = useState(3);

  return (
    <>
      <Header 
        TasksRemaining={TasksRemaining} 
      />
      <div className="tasks">
        {[1, 2, 3].map((i) => (
          <Task 
            key={i} 
            index={i}
            TasksRemaining={TasksRemaining}
            setTasksRemaining={setTasksRemaining}
          />
        ))}
      </div>
    </>
    
  );
}

export default App;
