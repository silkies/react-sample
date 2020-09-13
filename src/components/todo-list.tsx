import React, { useState } from "react";
import TodoItem from "./todo-item";
import TodoForm from "./todo-form";
import "../style.css";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      text: "Write proposal",
      isDone: false,
    },
    {
      text: "Submit proposal",
      isDone: false,
    },
    {
      text: "Write thesis",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isDone: false }];
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !todos[index].isDone;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <TodoForm addItem={addTodo} />
      <h5>Todo List</h5>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
