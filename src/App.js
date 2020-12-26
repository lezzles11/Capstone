import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
        </div>
        <br />
        <br />
      </Router>
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default App;
