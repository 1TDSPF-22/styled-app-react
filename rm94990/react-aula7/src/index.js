import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouters } from "react-router-dom";

ReactDOM.render(
  <BrowserRouters>
    <App />,
  </BrowserRouters>,
  document.getElementById("root")
);
