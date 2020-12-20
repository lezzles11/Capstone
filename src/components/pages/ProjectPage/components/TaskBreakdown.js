import React from "react";

function TableItem({ done, item }) {
  return (
    <tr>
      <th scope="row">
        {done === "true" && (
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id={item}
              checked
            />
            <label className="form-check-label" for={item}>
              <i>Done?</i>
            </label>
          </div>
        )}{" "}
        {done !== "true" && (
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id={item}
            />
            <label className="form-check-label" for={item}>
              <i>Done?</i>
            </label>
          </div>
        )}
      </th>
      <td>{item}</td>
    </tr>
  );
}
export default function TaskBreakdown({
  bigTitle,
  smallTitle,
  text,
}) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          <strong>{bigTitle}</strong>
        </h4>{" "}
        <h5 className="blue-text pb-2">
          <strong>{smallTitle} </strong>
        </h5>
        <p className="card-text">{text}</p>
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">Done?</th>
              <th scope="col">Task</th>
            </tr>
          </thead>
          <tbody>
            <TableItem
              done="false"
              item="Users will be able to input two emails, in which their friends will get regular updates of."
            />
            <TableItem
              done="false"
              item="Users will be able to "
            />
            <TableItem
              done="true"
              item="Finish the home page"
            />
            <TableItem
              done="true"
              item="Finish the login page"
            />
            <TableItem
              done="true"
              item="Finish the signup page"
            />
            <TableItem
              done="true"
              item="Finish the calendar page"
            />
            <TableItem
              done="true"
              item="Finish the project page"
            />
            <TableItem
              done="true"
              item="Finish the ongoing projects page"
            />
            <TableItem
              done="true"
              item="Finish the past projects page"
            />
            <TableItem
              number="false"
              item="Finish the ongoing projects page"
            />
            <TableItem
              number="true"
              item="Finish the past projects page"
            />
            <TableItem
              number="false"
              item="Finish the Add Deliverables page"
            />
            <TableItem
              number="false"
              item="Finish the email page"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
