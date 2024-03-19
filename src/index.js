import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Importing the root component

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById("root") // Mounting the root component to the DOM
);