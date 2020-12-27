import React, { Component } from "react";
import { connect } from "react-redux";

function Sun() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-sunglasses"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A1.99 1.99 0 0 0 8 6a1.99 1.99 0 0 0-1.112.338A2 2 0 0 0 5 5H3zm0 1a1 1 0 0 0-1 1v.941c0 .264.356.348.474.112l.228-.457a2 2 0 0 1 .894-.894l.457-.228C4.289 6.356 4.205 6 3.94 6H3z"
      />
    </svg>
  );
}

function ProgressCard() {
  return (
    <div className="card mimosa mb-4 white-text">
      <div className="card-body">
        <div className="pull-right">
          <i className="fas fa-chart-line"></i>
        </div>
        <p>SUBSCRIPTIONS</p>
        <h4>200</h4>
      </div>

      <div className="card-body">
        <p className="mb-0">Worse than last week (25%)</p>
      </div>
    </div>
  );
}
// deadline, purpose, friendOneEmail, friendTwoEmail,
function ProjectCard({
  name,
  color,
  deadline,
  purpose,
  friendOneEmail,
  friendTwoEmail,
}) {
  const style = `card ${color} lighten-3`;

  return (
    <div className={style}>
      <div className="card-body pb-0">
        <Sun />
        <h6 className="font-weight-bold mb-1">
          {deadline}
        </h6>
        <div className="d-flex justify-content-between">
          <p className="mb-0 h5">{name}</p>
          <p className="mb-0 hour">{deadline}</p>
        </div>
      </div>
      <div className="card-body pt-0">
        <br />
        <p className="mb-0">{purpose}</p>
        <hr className="my-4" />
        <div className="row text-center">
          <div className="col-md-6 mb-5">
            <div className="mt-3">
              <h6 className="font-weight-bold mb-3">
                {friendOneEmail}
              </h6>
              <p className="text-muted mb-0">
                Will be notified on {deadline}
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="mt-3">
              <h6 className="font-weight-bold mb-3">
                {friendTwoEmail}
              </h6>
              <p className="text-muted mb-lg-0">
                Will be notified on {deadline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

class OngoingProjectsPage extends Component {
  loadProjects = (projects) => {
    let projectList = [];
    for (let i = 0; i < projects.length; i++) {
      //   if (projects[i].done === true) {
      projectList.push(
        <div className="col-6">
          <ProjectCard
            name={projects[i].name}
            purpose={projects[i].purpose}
            friendOneEmail={projects[i].friendOneEmail}
            friendTwoEmail={projects[i].friendTwoEmail}
            deadline={projects[i].deadline}
            color={projects[i].color}
          />
          <br />
        </div>
      );
      //   }
    }
    return projectList;
  };
  render() {
    let projects = this.props.projects;
    return (
      <div>
        <div className="row justify-content-center">
          <h1>Ongoing Projects</h1>
        </div>
        <br />
        <div className="row flex">
          {this.loadProjects(projects)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(
  mapStateToProps,
  null
)(OngoingProjectsPage);
