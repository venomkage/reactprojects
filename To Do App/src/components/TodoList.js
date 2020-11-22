import React from "react";
import "../style/app.css";

const TodoList = ({ Todos, todo, setTodos }) => {
  //click handler
  const clickHandler = (e) => {
    const Todo = Todos.filter((el) => {
      return el !== e.target.innerText;
    });
    setTodos([...Todo]);
  };

  return (
    <div>
      <h3 className="todos" onClick={clickHandler}>
        {todo}
      </h3>
    </div>
  );
};

export default TodoList;
