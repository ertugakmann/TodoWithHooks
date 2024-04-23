import React from "react";

function Task(props) {
  return (
    <div className="col-md-4">
      <div>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
            <button
              className="btn btn-danger"
              onClick={() => props.onDelete(props.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
