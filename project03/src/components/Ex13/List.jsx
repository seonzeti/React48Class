import React, { useContext } from "react";
import { TodoContext } from "../../context/Ex13TodoContext";
import AddItem from "./AddItem";
import ListItem from "./ListItem";

const List = () => {
  const { todos, handleTodoDelete, handleTodoToggle } = useContext(TodoContext);

  return (
    <div className="list-container">
      <ul>
        {todos.map((todo, index) => (
          <ListItem index={index} todo={todo} key={index}></ListItem>
        ))}
      </ul>

      <AddItem />
    </div>
  );
};

export default List;
