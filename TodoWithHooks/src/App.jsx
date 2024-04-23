import { useState } from "react";
import "./App.css";
import CreateTask from "./CreateTask";
import Header from "./Header";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task, index) => index !== id));
  };

  return (
    <div>
      <Header />
      <CreateTask addTask={addTask} />
      <div className="row">
        {tasks.map((taskItem, index) => {
          return (
            <Task
              key={index}
              id={index}
              title={taskItem.title}
              content={taskItem.content}
              onDelete={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
