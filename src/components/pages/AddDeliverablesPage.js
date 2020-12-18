import React from "react";

/**********************************************
 * Data on this page
 * ==================================
 * -
 ***********************************************/

function AddSign() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-plus-circle"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fill-rule="evenodd"
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        />
      </svg>
    </div>
  );
}

function MinusSign() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-dash-circle"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fill-rule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
        />
      </svg>
    </div>
  );
}

function TimeInput() {
  return (
    <div className="input-group md-form form-sm form-2 pl-0">
      <div className="input-group-append">
        <span
          className="form-control btn-outline-warning waves-effect"
          id="basic-text1"
        >
          <MinusSign />
        </span>
      </div>
      <input
        className="form-control amber-border"
        type="text"
        placeholder="00"
        aria-label="Search"
      />
      <div className="input-group-append">
        <span
          className="form-control btn-outline-warning waves-effect"
          id="basic-text1"
        >
          <AddSign />
        </span>
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
      <div className="row">
        <h6>Deliverable 1</h6>
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
      <div className="row">
        <div className="col">
          <TimeInput />
        </div>
        <div className="col">
          <TimeInput />
        </div>
        <div className="col">
          <TimeInput />
        </div>
      </div>
    </div>
  );
}
