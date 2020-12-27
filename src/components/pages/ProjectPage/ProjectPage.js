import React from "react";
import EditDeliverableModal from "./components/EditDeliverableModal";
import DeliverableTimeline from "./components/DeliverableTimeline";
import AddDeliverableModal from "./components/AddDeliverableModal";
import Timer from "./components/Timer";

export default function ProjectPage() {
  return (
    <div>
      <div className="row justify-content-center">
        <h1>Current Project: Say No To Procrastination</h1>
      </div>
      <DeliverableTimeline />
      <div className="row justify-content-center">
        <AddDeliverableModal name="Add Feature" />
        <EditDeliverableModal name="Edit Feature" />
      </div>
    </div>
  );
}
