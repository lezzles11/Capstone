import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <br />
      <br />
      <Footer />
    </Router>
  );
}

export default App;
