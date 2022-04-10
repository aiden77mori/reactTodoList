import React from "react";
import "./Todo.css";

function Todo({ todo, remove }) {
  const handleClick = (evt) => {
    evt.preventDefault();
    remove(evt.target.id);
  };

  return (
    <div className="Todo">
      <div id={todo.id} data-id={"todo-item-" + todo.id} className="Todo-task">
        {todo.task}
      </div>
      <div className="Todo-buttons">
        <button
          onClick={handleClick}
          id={todo.id}
          data-id={"complete-button-" + todo.id}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Todo;
