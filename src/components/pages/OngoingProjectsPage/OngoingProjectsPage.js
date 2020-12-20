import React from "react";

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
function ProjectCard({
  name,
  color,
  deadline,
  time,
  priority,
  percent,
}) {
  const style = `card ${color} lighten-3`;
  const percentile = {
    width: `${percent}%`,
  };
  return (
    <div className={style}>
      <div className="card-body pb-0">
        <Sun />
        <h6 className="font-weight-bold mb-1">
          {priority} priority
        </h6>
        <div className="d-flex justify-content-between">
          <p className="mb-0 h5">{name}</p>
          <p className="mb-0 hour">{deadline}</p>
        </div>
      </div>
      <div className="card-body pt-0">
        <br />
        <div className="progress md-progress">
          <div
            className="progress-bar bg grey darken-3"
            role="progressbar"
            style={percentile}
            aria-valuenow={percent}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p>{percent}% done</p>
        <p className="mb-0">{time} spent</p>
      </div>
    </div>
  );
}
export default function OngoingProjectsPage() {
  return (
    <div>
      <div className="row justify-content-center">
        <h1>Ongoing Projects</h1>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <ProjectCard
            percent="10"
            name="Say No To Procrastination"
            priority="high"
            time="3 days, 2 hours"
            deadline="Jan 12"
            color="orange"
          />
        </div>
        <div className="col-6">
          <ProjectCard
            name="Glasses Website"
            priority="medium"
            percent="0"
            time="0"
            deadline="July 23"
            color="blue"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <ProjectCard
            percent="75"
            deadline="Dec 12"
            name="Finish Videos"
            priority="high"
            time="2 days"
            color="indigo"
          />
        </div>

        <div className="col-6">
          <ProjectCard
            percent="0"
            name="Learn Ukelele"
            time="4 days"
            priority="low"
            deadline="Dec 11"
            color="pink"
          />
        </div>
      </div>
    </div>
  );
}
