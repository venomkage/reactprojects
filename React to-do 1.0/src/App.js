import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./style/app.css";
import { Button, SvgIcon } from "@material-ui/core";
import { FavoriteRounded } from "@material-ui/icons";

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
      <h1>ToDo - </h1>
      <form onSubmit={submitHandler}>
        <input
          value={message}
          onChange={oneChangeHandler}
          id="area"
          cols="30"
          rows="10"
          variant="outlined"
        ></input>

        <br />
        <Button type="submit" color="black" variant="filled">
          Submit
        </Button>
        {Todos.map((el) => {
          return <TodoList Todos={Todos} todo={el} setTodos={setTodos} />;
        })}
      </form>

      <footer className="app-footer">
        <span>
          Made with
          <SvgIcon component={FavoriteRounded} />
          in India
        </span>
      </footer>
    </div>
  );
}

export default App;
