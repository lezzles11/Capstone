import React from "react";
import "antd/dist/antd.css";
import { Steps, Popover } from "antd";
import SpringModal from "./components/SpringModal";
const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

function Progress({ title }) {
  return (
    <div className="container">
      <br />
      <h5>{title}</h5>
      <br />
      <Steps current={2} progressDot={customDot}>
        <Step
          title="Finished"
          description="Get Catalogue"
        />
        <Step
          title="In Progress"
          description="You can hover on the dot."
        />
        <Step
          title="Waiting"
          description="You can hover on the dot."
        />
        <Step
          title="Waiting"
          description="You can hover on the dot."
        />
      </Steps>
      <div className="row">
        <SpringModal name="Add Feature" />
        <SpringModal name="Add Benchmark" />
      </div>
      <br />
      <br />
    </div>
  );
}

function MiniHeader({ title }) {
  return (
    <div>
      <h5 className="font-weight-normal mb-3">{title}</h5>
    </div>
  );
}

function Item({
  styleOne,
  styleTwo,
  deliverable,
  deadline,
  completionRate,
}) {
  return (
    <div className="row">
      <div className="col">
        <p style={styleOne} className="text-muted">
          {deliverable}
        </p>
      </div>
      <div className="col">
        <p style={styleOne} className="text-muted">
          {deadline}
        </p>
      </div>

      <div className="col">
        <p style={styleTwo} className="text-muted">
          {completionRate}
        </p>
      </div>
    </div>
  );
}
function ProjectTitle({ titleOne, titleTwo, titleThree }) {
  return (
    <div className="row">
      <div className="col">
        <MiniHeader title={titleOne} />
      </div>

      <div className="col">
        <MiniHeader title={titleTwo} />
      </div>

      <div className="col">
        <MiniHeader title={titleThree} />
      </div>
    </div>
  );
}
function ProjectDescription() {
  return (
    <div>
      <h4>Say No To Procrastination</h4>
      <ProjectTitle
        titleOne="Deliverable 1"
        titleTwo="Deadline"
        titleThree="Completion Rate"
      />
      <div className="row">
        <div className="col">
          <h5>Current Task:</h5>
        </div>
      </div>
      <Item
        styleTwo={{ borderTop: "8px solid green" }}
        deliverable="UI"
        deadline="Dec 18, 2020"
        completionRate="60%"
      />
      <Item
        deliverable="Testing"
        deadline="Dec 18, 2020"
        completionRate="60%"
      />
      <ProjectTitle
        titleOne="Larger Checklist"
        titleTwo="Deadline"
        titleThree="Completion Rate"
      />
      <Item
        deliverable="Finish Functionality List"
        deadline="Dec 18, 2020"
        completionRate="80%"
      />
      <Item
        deliverable="Finish wireframe"
        deadline="Dec 18, 2020"
        completionRate="100%"
      />
      <Item
        deliverable="Code out the UI"
        deadline="Dec 18, 2020"
        completionRate="60%"
      />
      <Item
        deliverable="Finish Testing"
        deadline="Dec 18, 2020"
        completionRate="0%"
      />
      <Item
        deliverable="Create Database"
        deadline="Dec 18, 2020"
        completionRate="0%"
      />
      <Item
        deliverable="Write down all relevant queries"
        deadline="Dec 18, 2020"
        completionRate="0%"
      />{" "}
      <Item
        deliverable="Write out all test database migrations and seeds"
        deadline="Dec 29, 2020"
        completionRate="0%"
      />
      <Item
        deliverable="Write out all database migrations and seeds"
        deadline="Dec 29, 2020"
        completionRate="0%"
      />
      <Item
        deliverable="Plan out all relevant get/post/edit/delete routes"
        deadline="Dec 28, 2020"
        completionRate="0%"
      />
      <Item
        deliverable="Write out all relevant get/post/edit/delete routes"
        deadline="Dec 29, 2020"
        completionRate="0%"
      />
    </div>
  );
}

export default function ProjectPage() {
  return (
    <div>
      <ProjectDescription />
      <Progress title="Website Store" />
      <Progress title="Project Management Application" />
    </div>
  );
}
