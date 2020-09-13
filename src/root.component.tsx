import React, { useState } from "react";
import TodoList from "./components/todo-list";
import "./style.css";

export default function Root(props) {
  return (
    <div className="container">
      <p>This is a React application</p>
      <TodoList />
    </div>
  );
}
