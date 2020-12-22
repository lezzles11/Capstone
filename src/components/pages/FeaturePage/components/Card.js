import React from "react";

export default function Card({
  bigTitle,
  smallTitle,
  text,
}) {
  return (
    <div className="card">
      <div className="card-body card-body-cascade text-center">
        <h4 className="card-title">
          <strong>{bigTitle}</strong>
        </h4>
        <h5 className="blue-text pb-2">
          <strong>{smallTitle} </strong>
        </h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
