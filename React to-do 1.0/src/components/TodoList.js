import React from "react";
import "../style/app.css";
import { Card } from "@material-ui/core";

const TodoList = ({ Todos, todo, setTodos }) => {
  //click handler
  const clickHandler = (e) => {
    const Todo = Todos.filter((el) => {
      return el !== e.target.innerText;
    });
    setTodos([...Todo]);
  };

  const newLocal = (
    <h3 className="todos" onClick={clickHandler}>
      {todo}
    </h3>
  );
  return (
    <Card style={{ width: "60%", margin: "0.1rem auto" }}>{newLocal}</Card>
  );
};

export default TodoList;
