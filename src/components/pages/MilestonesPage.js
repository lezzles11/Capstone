import React from "react";

function SampleMilestone({ stat, title }) {
  return (
    <div className="col-md-3 text-center pt-4">
      <p className="h1 font-weight-normal">{stat}</p>
      <p className="h5 font-weight-light text-muted mb-4">
        {title}
      </p>
    </div>
  );
}
function TextMilestone() {
  return (
    <div className="col-md-3 grey lighten-4 rounded-left pt-4">
      <h5 className="font-weight-bold">Free</h5>
      <p className="font-weight-light text-muted mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quibusdam vitae, fuga similique quos aperiam
        tenetur quo ut rerum debitis.
      </p>
    </div>
  );
}
function Milestone() {
  return (
    <div className="card z-depth-0 bordered border-light">
      <div className="card-body p-0">
        <div className="row mx-0">
          <SampleMilestone
            stat="10%"
            title="Completion Rate"
          />
          <SampleMilestone
            stat="Dec 18, 2020"
            title="Date Started"
          />
          <SampleMilestone
            stat="Feb 1, 2021"
            title="Deadline"
          />
          <div className="col-md-3 text-center pt-4">
            <button
              type="button"
              className="btn btn-outline-dark waves-effect"
            >
              Start Work
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default function MilestonesPage() {
  return (
    <div>
      <h5>Milestones Page</h5> <Milestone />
      <Milestone />
      <Milestone />
      <Milestone />
    </div>
  );
}
