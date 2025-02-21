import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task";
import Reset from "./components/Reset";

function App() {
  const [TasksRemaining, setTasksRemaining] = useState(3);
  const [NewDate, setNewDate] = useState(false);
  const [Tasks, setTasks] = useState(JSON.parse(localStorage.getItem("allTasks"))
    || 
    // Default Value Tasks Array
    [
      { text: "Set Task #1", complete: false, Notes: "" },
      { text: "Set Task #2", complete: false, Notes: "" },
      { text: "Set Task #3", complete: false, Notes: "" }
    ]
  );

  const checkDate = () => {
    let date = new Date().toDateString(); // Use toDateString to compare only the date part
    console.log("Current date: ", date);
    let savedDate = localStorage.getItem('date');
    console.log("Saved date: ", savedDate);

    if (savedDate) {
        if (savedDate == date) {
            setNewDate(false);
        } else {
            localStorage.setItem('date', date);
            setNewDate(true);
        }
    } else {
        localStorage.setItem('date', date);
        setNewDate(false);
    }
  };

  // Check if new Date
  useEffect(() => {
    checkDate();
    const interval = setInterval(checkDate, 60000);
    return () => clearInterval(interval); // 
  }, []);


  return (
    <>
      <Header 
        TasksRemaining={TasksRemaining} 
      />      
        <div className="tasks">
          {Tasks.length > 0 &&
          [0, 1, 2].map((i) => (
            <Task 
              key={i} 
              index={i}
              TasksRemaining={TasksRemaining}
              setTasksRemaining={setTasksRemaining}
              text={Tasks[i]?.text}
              complete={Tasks[i]?.complete}
              notes={Tasks[i]?.notes}
              Tasks={Tasks}
              setTasks = {setTasks}
            />
          ))}
        </div> 

        <Reset 
        NewDate={NewDate}
        setNewDate={setNewDate}
        setTasks={setTasks}
      />
      
    </>
    
  );
}

export default App;
