import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./style/app.css";

function App() {
  // state
  const [message, setMessages] = useState("");
  const [Todos, setTodos] = useState([]);

  //action handlers
  const oneChangeHandler = (e) => {
    setMessages(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...Todos, message]);
    setMessages("");
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={submitHandler}>
        <input
          value={message}
          onChange={oneChangeHandler}
          id="area"
          cols="30"
          rows="10"
        ></input>{" "}
        <br />
        <button>Submit</button>
        {Todos.map((el) => {
          return <TodoList Todos={Todos} todo={el} setTodos={setTodos} />;
        })}
      </form>
    </div>
  );
}

export default App;
