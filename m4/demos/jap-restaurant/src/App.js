import "./App.css";
import "./style.css";
import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import AboutUs from "./AboutUs";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <AboutUs />
    </React.Fragment>
  );
};

export default App;