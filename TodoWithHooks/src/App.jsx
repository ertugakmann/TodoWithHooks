import "./App.css";
import CreateTask from "./CreateTask";
import Header from "./Header";

function App() {
  const addTask = (newTask) => {
    console.log(newTask);
  };

  return (
    <div>
      <Header />
      <CreateTask addTask={addTask} />
    </div>
  );
}

export default App;
