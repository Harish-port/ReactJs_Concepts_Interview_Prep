import React, { useState } from "react";
import "./Todo.style.css";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
uuidv4();
function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const addTodos = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  console.log(todos, "staa");
  return (
    <div className="TodoWrapper">
      <TodoForm addTodos={addTodos} />
    </div>
  );
}

export default TodoWrapper;
