import React from "react";

/**********************************************
 * Data on this page
 * ==================================
 * -
 ***********************************************/

function Deliverable({ title }) {
  return (
    <div>
      <hr />
      <div className="row">
        <h6>Deliverable: {title}</h6>
      </div>
      <div className="row">
        This section is designed to break larger tasks into
        smaller milestones to ensure each task will be
        completed within the set deadline
      </div>
      <br />
      <div className="row">
        <div className="col">
          {/* id: friendTwo */}
          <input
            type="text"
            id="milestone"
            className="form-control"
            placeholder="Milestone 1"
            aria-describedby="milestoneOneInput"
          />
          <small
            id="milestoneOneInput"
            className="form-text text-muted mb-4"
          >
            Just in case
          </small>
        </div>
        <div className="col">
          {/* id: friendTwo */}
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
            Just in case
          </small>
        </div>
      </div>
    </div>
  );
}
export default function AddDeliverablesPage() {
  return (
    <div>
      <h4>Add Deliverables Page</h4>
      <h3>Task Breakdown</h3>
      <br />
      <Deliverable />
      <Deliverable />
      <div className="row">
        <div className="offset-md-10">
          <button
            type="button"
            className="btn btn-outline-primary waves-effect"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
