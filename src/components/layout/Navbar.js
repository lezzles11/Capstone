import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
function SwitchFunction() {
  return (
    <div>
      <Switch>
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
