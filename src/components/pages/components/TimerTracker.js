import React from "react";

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

function TimeInput({ placeholder }) {
  return (
    <div>
      <div className="input-group md-form">
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
          placeholder={placeholder}
          aria-label="time"
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
    </div>
  );
}
export default function TimerTracker() {
  return (
    <div className="row">
      <div className="col">
        <TimeInput placeholder="Days" />
      </div>
      <div className="col">
        <TimeInput placeholder="Hours" />
      </div>
      <div className="col">
        <TimeInput placeholder="Minutes" />
      </div>
    </div>
  );
}
