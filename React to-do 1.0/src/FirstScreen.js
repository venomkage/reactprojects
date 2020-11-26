import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./style/app.css";
import TodoImage from "./images/TodoImage.svg";

const FirstScreen = () => {
  return (
    <div className="first-screen">
      <h1>Welcome to VenDo</h1>
      <img className="first-img" src={TodoImage} alt="VenDo Image" />
      <Link to="/todo">
        <Button variant="contained">Go To VenDo</Button>
      </Link>
    </div>
  );
};

export default FirstScreen;
