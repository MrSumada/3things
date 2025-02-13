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
    // init new date and old date from storage
    let date = new Date().getDate();
    let savedDate = localStorage.getItem('date');
    // if old date exists, compare them
    // if new day, set NewDate to true
    if(savedDate) {
      if(savedDate == date) {
        setNewDate(false);
      } else {
        localStorage.setItem('date', date);
        setNewDate(true);
      }
    } else {
      localStorage.setItem('date', date);
      setNewDate(false);
    }
  }

  // Check if new Date
  useEffect(() => {
    checkDate();
    setInterval( checkDate(), 60000);
  }, [])

  return (
    <>
      <Header 
        TasksRemaining={TasksRemaining} 
      />
      <Reset 
        NewDate={NewDate}
        setNewDate={setNewDate}
        setTasks={setTasks}
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
      
    </>
    
  );
}

export default App;
