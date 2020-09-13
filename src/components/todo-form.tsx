import React, { useState } from "react";
import "../style.css";

function TodoForm({ addItem }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-form"
        placeholder="Enter Todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn btn-submit">Add</button>
    </form>
  );
}

export default TodoForm;
