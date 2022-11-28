import React from "react";
import { MdOutlineCheckCircle } from "react-icons/md"
import { AiOutlineCloseCircle } from "react-icons/ai";

function TodoItem({ todo, removeTodo, completeTodo }) {
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
      {todo.text}
      <div className="iconsContainer">
        <MdOutlineCheckCircle
          onClick={() => completeTodo(todo.id)}
        />
        <AiOutlineCloseCircle
          style={{ marginLeft: "5px" }}
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  );
}

export default TodoItem;
