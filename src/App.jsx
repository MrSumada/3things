import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task";
import Reset from "./components/Reset";
import Favicon from "./components/Favicon";

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

  const updateFavicon = () => {
      const link = document.querySelector("link[rel*='icon']")
      if(TasksRemaining === 2) console.log("no bug")
  }

  const checkDate = () => {
    let date = new Date().toDateString();
    let savedDate = localStorage.getItem('date');

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

  // Set TasksRemaining based on Tasks Array
  useEffect(() => {
    let tasksCount = 3;
    Tasks.forEach(task => {
      if(task.complete) tasksCount--;
    }); 
    setTasksRemaining(tasksCount);
  }, []);


  return (
    <>
      <Favicon 
        TasksRemaining={TasksRemaining}
      />
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
        setTasksRemaining={setTasksRemaining}
      />
      
    </>
    
  );
}

export default App;
