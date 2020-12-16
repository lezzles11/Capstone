import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AddProjectPage from "../pages/AddProjectPage";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light blue lighten-4">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="nav-item">
            <Link to="/addproject">Add Project</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
function SwitchFunction() {
  return (
    <div className="container">
      <Switch>
        <Route path="/addproject">
          <AddProjectPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        {/* The / should go last  */}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}
export default function Navbar() {
  return (
    <div>
      <Nav />
      <SwitchFunction />
    </div>
  );
}
