import React from "react";
import Card from "./Card";
import TaskBreakdownTable from "./TaskBreakdownTable";

export default function ProjectCards() {
  return (
    <div>
      <div className="row">
        <div className="col-9">
          <Card
            bigTitle="Current Feature:"
            smallTitle="Finishing User Interface"
            text="Users will be able to visualize the entire user interface and understand how the user flow works."
          />
        </div>
        <div className="col-3">
          {" "}
          <Card
            bigTitle="Key Information"
            smallTitle="Due by Jan 12, 2021"
            text=""
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12">
          <TaskBreakdownTable
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
            text="We have to tell others about our intentions and figuratively sign them up to expect a specific amount of progress from us by a particular date. We have to invite a degree of nagging from people with no prior interest in delivering it – because this is better than the alternative: wasting our lives."
          />
        </div>
      </div>
    </div>
  );
}
