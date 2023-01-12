import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Visit the Park",
      day: "Feb 26th at 12:00 PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Exercise",
      day: "Feb 26th at 5:00 PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Read that book",
      day: "Feb 26th at 9:00 PM",
      reminder: true,
    },
  ])

  // delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
     setTasks(tasks.map((task)=> task.id === id? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
    <Header title = "Task Tracker"/>
    <AddTask />
     {tasks.length > 0? (
      <Tasks tasks={tasks} onDelete= {deleteTask} onToggle ={toggleReminder} />
      ) : 
      (' No tasks To Show')}
    </div>
  );
}

export default App;
