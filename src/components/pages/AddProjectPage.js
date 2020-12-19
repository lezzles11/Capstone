import React from "react";

function AddProjectForm() {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-6">
        <form className="text-center" action="#!">
          <p className="h4 mb-4">Add New Project</p>
          {/* id: projectName */}
          <div className="row">
            <div className="col">
              <input
                type="text"
                id="projectName"
                className="form-control"
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
                id="projectDeadline"
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
            id="purpose"
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
          {/* id: deadline */}
          <input
            type="text"
            id="deadline"
            className="form-control"
            placeholder="Deadline"
            aria-describedby="deadlineInput"
          />
          <small
            id="deadlineInput"
            className="form-text text-muted mb-4"
          >
            Deadline of Project
          </small>
          {/* STARTING FORM */}
          <div className="form-row mb-4">
            <div className="col">
              {/* id: friendOne */}
              <input
                type="text"
                id="friendOne"
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
                id="friendTwo"
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

export default function AddProjectPage() {
  return (
    <section className="text-center text-lg-left dark-grey-text">
      <div>
        <AddProjectForm />
      </div>
    </section>
  );
}
