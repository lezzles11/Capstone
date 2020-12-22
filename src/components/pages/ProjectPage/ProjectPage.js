import React from "react";
import EditDeliverableModal from "./components/EditDeliverableModal";
import DeliverableTimeline from "./components/DeliverableTimeline";
import AddDeliverableModal from "./components/AddDeliverableModal";

export default function ProjectPage() {
  return (
    <div>
      <div className="row justify-content-center">
        <h1>Current Project: Say No To Procrastination</h1>
      </div>
      <p>
        todo: change the timer time so that the user can put
        in{" "}
      </p>
      <DeliverableTimeline />
      <div className="row justify-content-center">
        <AddDeliverableModal name="Add Feature" />
        <EditDeliverableModal name="Edit Feature" />
      </div>
    </div>
  );
}
