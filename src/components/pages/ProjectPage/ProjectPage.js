import React from "react";
import TaskBreakdown from "./components/TaskBreakdown";
import EditDeliverableModal from "./components/EditDeliverableModal";
import DeliverableTimeline from "./components/DeliverableTimeline";
import AddDeliverableModal from "./components/AddDeliverableModal";

function ProjectCards() {
  return (
    <div>
      <div className="row">
        <div className="col-9">
          <Card
            bigTitle="Current Deliverable:"
            smallTitle="Finishing User Interface"
            text="Users will be able to visualize the entire user interface and understand how the user flow works."
          />
        </div>
        <div className="col-3">
          {" "}
          <Card
            bigTitle="Key Information"
            smallTitle="Due by Jan 12, 2021"
            text="This will be done before Jan 12"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12">
          <TaskBreakdown
            bigTitle="Task Breakdown"
            smallTitle="Make it into bite sized pieces"
            text="Break a task into 100 sections. Note what percentage is done. For a 1,500 word report, every sentence is pretty much 1%."
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <Card
            bigTitle="Notes"
            smallTitle="What other relevant information is needed here?"
            text="Try to make it as simple as possible and think about what is most useful to you."
          />
        </div>
        <div className="col-6">
          {" "}
          <Card
            bigTitle="Structure"
            smallTitle="Image here, maybe"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12">
          <Card
            bigTitle="People holding me accountable"
            smallTitle="Anubhav and Sam"
            text="We have to tell others about our intentions and figuratively sign them up to expect a specific amount of progress from us by a particular date. We have to invite a degree of nagging from people with no prior interest in delivering it – because this is better than the alternative: wasting our lives. "
          />
        </div>
      </div>
    </div>
  );
}
function Card({ bigTitle, smallTitle, text }) {
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
export default function ProjectPage() {
  return (
    <div>
      <div className="row justify-content-center">
        <h1>Current Project: Say No To Procrastination</h1>
      </div>

      <DeliverableTimeline />
      <div className="row">
        <AddDeliverableModal name="Add Deliverable" />
        <EditDeliverableModal name="Edit Deliverables" />
      </div>
      <ProjectCards />
    </div>
  );
}
