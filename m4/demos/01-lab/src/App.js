import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "./style.css";

function TwoBoxes() {
  return (
    <React.Fragment>
      <div>Box 1</div>
      <div>Box 2</div>
      <div>{logo}</div>
      <img src={logo}></img>
    </React.Fragment>
  );
}

function App() {
  let msg = "Monday Blues";
  let firstName = "John";
  return (
    <div>
      <h1 className="heading">{msg}</h1>
      <h2 style={{ backgroundColor: "green" }}> Heading {100 * 10}</h2>
      <p>{firstName === "John" ? "Welcome, John!" : "Who are you?"}</p>
      <img src={require("./pau.jpg")}></img>
      <img src={logo}></img>
      <TwoBoxes />
    </div>
  );
}

export default App;
