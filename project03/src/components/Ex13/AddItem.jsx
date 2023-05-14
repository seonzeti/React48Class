import React, { useContext } from "react";
import { TodoContext } from "../../context/Ex13TodoContext";

const AddItem = () => {
  const { newTodo, handleNewTodoChange, handleNewTodoAddition } =
    useContext(TodoContext);
  return (
    <div>
      <input value={newTodo} type="text" onChange={handleNewTodoChange} />
      <button onClick={handleNewTodoAddition}>Add</button>
    </div>
  );
};

export default AddItem;
