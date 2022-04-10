import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: uuid(), task: "task 1", completed: false },
  ]);

  const create = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todosList = todos.map((todo) => (
    <Todo key={todo.id} remove={remove} todo={todo} />
  ));

  return (
    <>
      <h1>Todo List</h1>
      <div className="TodoList">
        <div className="content">
          <div>{todosList}</div>
          <NewTodoForm createTodo={create} />
        </div>
      </div>
    </>
  );
}

export default TodoList;
