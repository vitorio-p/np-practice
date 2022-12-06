import "./App.css";
import React from "react";
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <React.Fragment>
      <Header name="Jane" color="red" />
      <Main greet="Hi" />
      <Main greet="Hello" />
      <Sidebar greet="Hiya" />
    </React.Fragment>
  );
};

export default App;
