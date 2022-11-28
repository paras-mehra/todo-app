import React, { useState } from "react";

function TodoForm(props) {

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input)
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
      value={input}
        type="text"
        className="todo-input"
        placeholder="Add a Todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
