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

function Card() {
  return (
    <div className="card weather-card">
      <div className="card-body pb-3">
        <h4 className="card-title font-weight-bold">
          Warsaw
        </h4>

        <p className="card-text">
          Mon, 12:30 PM, Mostly Sunny
        </p>
        <div className="d-flex justify-content-between">
          <p className="display-1 degree">23</p>
          <i className="fas fa-sun-o fa-5x pt-3 amber-text"></i>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <p>
            <i className="fas fa-tint fa-lg text-info pr-2"></i>
            3% Precipitation
          </p>
          <p>
            <i className="fas fa-leaf fa-lg grey-text pr-2"></i>
            21 km/h Winds
          </p>
        </div>
        <div className="progress md-progress">
          <div
            className="progress-bar black"
            role="progressbar"
            style={{ width: "40%" }}
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <ul className="list-unstyled d-flex justify-content-between font-small text-muted mb-4">
          <li className="pl-4">8AM</li>
          <li>11AM</li>
          <li>2PM</li>
          <li>5PM</li>
          <li className="pr-4">8PM</li>
        </ul>

        <div className="collapse-content">
          <div className="collapse" id="collapseExample">
            <table className="table table-borderless table-sm mb-0">
              <tbody>
                <tr>
                  <td className="font-weight-normal align-middle">
                    Tuesday
                  </td>
                  <td className="float-right font-weight-normal">
                    <p className="mb-1">
                      24&deg;
                      <span className="text-muted">
                        /12&deg;
                      </span>
                    </p>
                  </td>
                  <td className="float-right mr-3">
                    <i className="fas fa-sun fa-lg amber-text"></i>
                  </td>
                </tr>
                <tr>
                  <td className="font-weight-normal align-middle">
                    Wednesday
                  </td>
                  <td className="float-right font-weight-normal">
                    <p className="mb-1">
                      19&deg;
                      <span className="text-muted">
                        /10&deg;
                      </span>
                    </p>
                  </td>
                  <td className="float-right mr-3">
                    <i className="fas fa-cloud-sun-rain fa-lg text-info"></i>
                  </td>
                </tr>
                <tr>
                  <td className="font-weight-normal align-middle">
                    Thursday
                  </td>
                  <td className="float-right font-weight-normal">
                    <p className="mb-1">
                      23&deg;
                      <span className="text-muted">
                        /15&deg;
                      </span>
                    </p>
                  </td>
                  <td className="float-right mr-3">
                    <i className="fas fa-sun fa-lg amber-text"></i>
                  </td>
                </tr>
                <tr>
                  <td className="font-weight-normal align-middle">
                    Friday
                  </td>
                  <td className="float-right font-weight-normal">
                    <p className="mb-1">
                      26&deg;
                      <span className="text-muted">
                        /19&deg;
                      </span>
                    </p>
                  </td>
                  <td className="float-right mr-3">
                    <i className="fas fa-sun fa-lg amber-text"></i>
                  </td>
                </tr>
                <tr>
                  <td className="font-weight-normal align-middle">
                    Saturday
                  </td>
                  <td className="float-right font-weight-normal">
                    <p className="mb-1">
                      20&deg;
                      <span className="text-muted">
                        /16&deg;
                      </span>
                    </p>
                  </td>
                  <td className="float-right mr-3">
                    <i className="fas fa-cloud fa-lg text-info"></i>
                  </td>
                </tr>
                <tr>
                  <td className="font-weight-normal align-middle">
                    Sunday
                  </td>
                  <td className="float-right font-weight-normal">
                    <p className="mb-1">
                      22&deg;
                      <span className="text-muted">
                        /13&deg;
                      </span>
                    </p>
                  </td>
                  <td className="float-right mr-3">
                    <i className="fas fa-cloud-sun fa-lg text-info"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <a
            className="btn btn-flat red-text p-1 my-1 mr-0 mml-1 deep-purple-text collapsed"
            data-toggle="collapse"
            href="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          ></a>
        </div>
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
}) {
  const style = `card ${color} lighten-3`;
  return (
    <div className={style}>
      <div className="card-body pb-0">
        <Sun />
        <div className="d-flex justify-content-between">
          <p className="mb-0 h5">{name}</p>
          <p className="mb-0 hour">{deadline}</p>
        </div>
      </div>
      <div className="card-body pt-0">
        <h6 className="font-weight-bold mb-1">
          {priority} priority
        </h6>
        <p className="mb-0">{time} spent</p>
      </div>
    </div>
  );
}
export default function OngoingProjectsPage() {
  return (
    <div>
      <h5>Ongoing Projects</h5>
      <div className="row">
        <div className="col-6">
          <ProjectCard
            name="Project Management"
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
            time="0"
            deadline="July 23"
            color="grey"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <ProjectCard
            deadline="Dec 12"
            name="Finish Videos"
            priority="high"
            time="2 days"
            color="indigo"
          />
        </div>

        <div className="col-6">
          <ProjectCard
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
