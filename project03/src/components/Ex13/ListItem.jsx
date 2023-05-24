import React, { useContext } from "react";
import { TodoContext } from "../../context/Ex13TodoContext";
import "../../style/ex13.css";

const ListItem = ({ todo, index }) => {
  const { handleTodoToggle, handleTodoDelete } = useContext(TodoContext);
  return (
    <div className="list-item">
      <li>
        <input type="checkbox" onChange={() => handleTodoToggle(index)} />

        <label
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          <span className="todo-text">{todo.text}</span>
        </label>
        <button onClick={() => handleTodoDelete(index)}>Delete</button>
      </li>
    </div>
  );
};

export default ListItem;
