import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import "./NewTodoForm.css";

function NewTodoForm({ task, createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    { task: "" }
  );

  const handleChange = (evt) => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newTodo = { id: uuid(), task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <input
        value={userInput.task}
        onChange={handleChange}
        id="todo-input"
        type="text"
        name="task"
        placeholder="Input Form"
      />
      <button id="add-button">Add</button>
    </form>
  );
}

export default NewTodoForm;
