import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style.css";

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isDone ? "line-through" : "" }}
      className="todo-item"
    >
      <label>
        <input
          id={index}
          type="checkbox"
          checked={todo.isDone}
          onChange={() => toggleTodo(index)}
        />
        {todo.text}
      </label>
      <div>
        <button onClick={() => deleteTodo(index)} className="btn">
          {" "}
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
