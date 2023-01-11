import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 26th at 12:00 PM",
      remainder: true,
    },
    {
      id: 2,
      text: "Exercise",
      day: "Feb 26th at 5:00 PM",
      remainder: true,
    },
    {
      id: 3,
      text: "Read that book",
      day: "Feb 26th at 9:00 PM",
      remainder: true,
    },
  ])

  // delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
    <Header title = "React Tracker"/>
     {tasks.length > 0? (
      <Tasks tasks={tasks} onDelete= {deleteTask}/>
      ) : 
      (' No tasks To Show')}
    </div>
  );
}

export default App;
