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
import CalendarPage from "../pages/CalendarPage/CalendarPage";
import ProjectPage from "../pages/ProjectPage";
import OngoingProjectsPage from "../pages/OngoingProjectsPage";
import PastProjectsPage from "../pages/PastProjectsPage";
import AddDeliverablesPage from "../pages/AddDeliverablesPage";
import MilestonesPage from "../pages/MilestonesPage";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light blue lighten-4">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {/* <li className="nav-item mx-2">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li> */}
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/signup">
              Signup
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/addproject">
              Add Project
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/calendar">
              Calendar
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              className="nav-link"
              to="/ongoingprojects"
            >
              Ongoing Projects
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/pastprojects">
              Past Projects
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              className="nav-link"
              to="/adddeliverables"
            >
              Add Deliverables
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/milestones">
              Milestones
            </Link>
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
        <Route path="/projects">
          <ProjectPage />
        </Route>
        <Route path="/calendar">
          <CalendarPage />
        </Route>
        <Route path="/addproject">
          <AddProjectPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        {/* <Route path="/about">
          <AboutPage />
        </Route> */}

        <Route path="/adddeliverables">
          <AddDeliverablesPage />
        </Route>

        <Route path="/ongoingprojects">
          <OngoingProjectsPage />
        </Route>
        <Route path="/milestones">
          <MilestonesPage />
        </Route>
        <Route path="/pastprojects">
          <PastProjectsPage />
        </Route>
        {/* The / should go last  */}
        <Route path="/">
          <AboutPage />
        </Route>
      </Switch>
    </div>
  );
}
export default function Navbar() {
  return (
    <div>
      <Nav />
      <h5>Deadline: Jan 12, 2021</h5>
      <h1>
        CURRENT TASK:{" "}
        <h5>Finish add project calendar page</h5>
      </h1>
      <h6>
        Finished tasks: home page, sign in page, sign up
        page, add project page, :){" "}
      </h6>
      <SwitchFunction />
    </div>
  );
}
