import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App container">
        <h1>Project Management Application</h1>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
