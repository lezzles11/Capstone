import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AddProjectPage from "../pages/AddProjectPage";
import CalendarPage from "../pages/CalendarPage/CalendarPage";
import ProjectPage from "../pages/ProjectPage/ProjectPage";
import OngoingProjectsPage from "../pages/OngoingProjectsPage/OngoingProjectsPage";
import PastProjectsPage from "../pages/PastProjectsPage";
import PaymentPage from "../pages/PaymentPage";
import FeaturePage from "../pages/FeaturePage/FeaturePage";
import PlaygroundPage from "../pages/PlaygroundPage/PlaygroundPage";
// import AddDeliverablesPage from "../pages/components/AddDeliverablesPage";
// import MilestonesPage from "../pages/components/MilestonesPage";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light blue lighten-4">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/playground">
              Playground
            </Link>
          </li>
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
            <Link
              className="nav-link"
              to="/ongoingprojects"
            >
              Ongoing Projects
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/projects">
              Project
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/feature">
              Feature
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/pastprojects">
              Past Projects
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/payment">
              Payment
            </Link>
          </li>
          {/* <li className="nav-item mx-2">
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
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
function SwitchFunction() {
  return (
    <div className="container">
      <Switch>
        <Route path="/playground">
          <PlaygroundPage />
        </Route>
        <Route path="/payment">
          <PaymentPage />
        </Route>
        <Route path="/projects">
          <ProjectPage />
        </Route>

        <Route path="/feature">
          <FeaturePage />
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

        {/* <Route path="/adddeliverables">
          <AddDeliverablesPage />
        </Route> */}

        <Route path="/ongoingprojects">
          <OngoingProjectsPage />
        </Route>
        {/* <Route path="/milestones">
          <MilestonesPage />
        </Route> */}
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
function Row({
  data,
  add,
  done,
  edit,
  deleteF,
  get,
  page,
  obstacles,
  plan,
}) {
  return (
    <tr>
      <th scope="row">{data}</th>
      <td>{add}</td>
      <td>{done}</td>
      <td>{edit}</td>
      <td>{deleteF}</td>
      <td>{get}</td>
      <td>{page}</td>
      <td>{obstacles}</td>
      <td>{plan}</td>
    </tr>
  );
}
export default function Navbar() {
  return (
    <div>
      <Nav />
      <h5>Deadline: Jan 12, 2021</h5>
      CURRENT TASK:{" "}
      <h5>Finish connecting redux to components</h5>
      <p>
        redux
        <table className="table table-bordered table-striped mb-0">
          <thead>
            <tr>
              <th>data</th>
              <th>add data</th>
              <th>mark done</th>
              <th>edit</th>
              <th>delete</th>
              <th>get</th>
              <th>page</th>
              <th>obstacles</th>
              <th>current task</th>
            </tr>
          </thead>
          <tbody>
            <Row
              data="User"
              add="signup"
              done=""
              edit=""
              deleteF="done"
              get="done"
              page="login, signup"
              obstacles="authentication, database"
              plan="finish edit"
            />{" "}
            <Row
              data="Project"
              add="add project page"
              done=""
              edit=""
              deleteF=""
              get="done"
              page="add project page, feature page, ongoing, past
              projects"
              obstacles="mark as done (and then shift it onto past projects page)"
              plan="mark as done should be on the project page - "
            />
            <Row
              data="Feature"
              add="done"
              done=""
              edit=""
              deleteF="done"
              get="done"
              page="project page, calendar, feature"
              obstacles="calendar formatting - start and end"
              plan="Look at how the dates are currently formatted and identify the function needed, When adding color: adding random color to the
            project page, mark as done should be on the feature page - once its done, an email should be sent to friend "
            />
            <Row
              data="Task"
              add=""
              done=""
              edit=""
              deleteF=""
              get=""
              page=""
              obstacles=""
              plan=""
            />
            <Row
              data="Task"
              add=""
              done=""
              edit=""
              deleteF=""
              get=""
              page=""
              obstacles=""
              plan=""
            />
          </tbody>
        </table>
      </p>
      <h6>
        Finished tasks: home page, sign in page, sign up
        page, add project page, calendar page, project page,
        ongoing projects, past projects, payment page, redux
        connect features to timeline, redux connect features
        project page, redux connect to calendar, redux
        connect to past projects, redux connect to ongoing
        projects, Implement delete for feature, able to add
        project, able to connect add feature form to redux,
        :){" "}
      </h6>
      <SwitchFunction />
    </div>
  );
}
