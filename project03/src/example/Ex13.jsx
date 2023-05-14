import React, { useState } from "react";
import AddItem from "../components/Ex13/AddItem";
import List from "../components/Ex13/List";
import { TodoContext } from "../context/Ex13TodoContext";
import "../style/ex13.css";

const Ex13 = () => {
  const [todos, setTodos] = useState([{ text: "첫 Todo", completed: false }]);
  const [newTodo, setNewTodo] = useState("");
  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleNewTodoAddition = () => {
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleTodoDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleTodoToggle = (index) => {
    const newTodos = [...todos];
    console.log("index : ", index);
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <TodoContext.Provider
        value={{
          todos,
          setTodos,
          newTodo,
          setNewTodo,
          handleNewTodoChange,
          handleNewTodoAddition,
          handleTodoDelete,
          handleTodoToggle,
        }}
      >
        <h1>Todo List</h1>
        <List />
      </TodoContext.Provider>
    </div>
  );
};

export default Ex13;
