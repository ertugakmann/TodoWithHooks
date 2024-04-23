import React, { useState } from "react";

function CreateTask(props) {
  const [task, setTask] = useState({
    title: "",
    content: "",
  });

  const submitTask = (e) => {
    e.preventDefault();
    if (task.title.trim() === "" || task.content.trim() === "") {
      alert("Title and Content are required");
      return;
    }
    props.addTask(task);
    setTask({ title: "", content: "" });
  };

  return (
    <div className="todoDivArea">
      <form className="todoDiv">
        <input
          type="text"
          className="form-control ToDoText"
          name="title"
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <textarea
          name="content"
          className="form-control toDoText"
          rows={3}
          placeholder="Write your To Do"
          value={task.content}
          onChange={(e) => setTask({ ...task, content: e.target.value })}
        ></textarea>
        <button className="btn btn-primary mt-3" onClick={submitTask}>
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
