import React, { Component } from "react";
import { connect } from "react-redux";
import { addProject } from "../../redux/actions/projectActions";

class AddProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      deadline: "",
      purpose: "",
      friendOneEmail: "",
      friendTwoEmail: "",
    };
    this.addProject = this.addProject.bind(this);
  }
  addProject = (event) => {
    event.preventDefault();
    this.props.addProject(this.state);
    console.log(this.state);
  };
  handleChange = (event) => {
    console.log(event.target.value);
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };
  render() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <form
            className="text-center"
            onSubmit={this.addProject}
            action="#!"
          >
            <p className="h4 mb-4">Add New Project</p>
            {/* id: projectName */}
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  id="projectName"
                  onChange={this.handleChange}
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  placeholder="Project Name"
                  aria-describedby="projectName"
                />
                <small
                  id="projectName"
                  className="form-text text-muted mb-4"
                >
                  It's just a first draft, no worries
                </small>
              </div>{" "}
              <div className="col">
                <input
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.deadline}
                  id="projectDeadline"
                  name="deadline"
                  className="form-control"
                  placeholder="Project Deadline"
                  aria-describedby="projectDeadlineSmall"
                />
                <small
                  id="projectDeadlineSmall"
                  className="form-text text-muted mb-4"
                >
                  Otherwise, it never ends
                </small>
              </div>{" "}
            </div>

            {/* id: purpose */}
            <input
              type="text"
              onChange={this.handleChange}
              id="purpose"
              value={this.state.purpose}
              name="purpose"
              className="form-control"
              placeholder="Purpose"
              aria-describedby="purposeInput"
            />
            <small
              id="purposeInput"
              className="form-text text-muted mb-4"
            >
              Write a quick mission statement.
            </small>
            <div className="form-row mb-4">
              <div className="col">
                {/* id: friendOne */}
                <input
                  type="text"
                  onChange={this.handleChange}
                  id="friendOne"
                  value={this.state.friendOneEmail}
                  name="friendOneEmail"
                  className="form-control"
                  placeholder="Email of Friend One"
                  aria-describedby="friendOneSmallText"
                />
                <small
                  id="friendOneSmallText"
                  className="form-text text-muted mb-4"
                >
                  Who will keep you accountable?
                </small>
              </div>
              <div className="col">
                {/* id: friendTwo */}
                <input
                  type="text"
                  onChange={this.handleChange}
                  id="friendTwoEmail"
                  value={this.state.friendTwoEmail}
                  name="friendTwoEmail"
                  className="form-control"
                  placeholder="Email of Friend Two"
                  aria-describedby="friendTwoSmallText"
                />
                <small
                  id="friendTwoSmallText"
                  className="form-text text-muted mb-4"
                >
                  Just in case
                </small>
              </div>
            </div>

            {/* ENDING FORM */}

            <button
              className="btn btn-info my-4 btn-block"
              type="submit"
            >
              Let's Execute
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function AddDeliverables() {
  return (
    <div>
      <h4>Add Deliverables</h4>
    </div>
  );
}

function TaskBreakdown() {
  return (
    <div>
      <h4>Task Breakdown</h4>
    </div>
  );
}

function AddProjectPage() {
  return (
    <section className="text-center text-lg-left dark-grey-text">
      <div>
        <AddProjectForm />
      </div>
    </section>
  );
}

export default connect(null, { addProject })(
  AddProjectForm
);
