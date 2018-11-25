import React from "react";
import ReactDOM from "react-dom";
import { Name } from "./Name";
import SmartOne from "./SmartOne";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="xxx">Hello CodeSandbox Made By Jisu</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SmartOne name="Jisu" age="2" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
