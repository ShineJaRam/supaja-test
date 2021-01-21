import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import { Reset } from "styled-reset";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Login />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
