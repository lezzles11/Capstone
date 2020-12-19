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

function Item({ text }) {
  return <p className="text-muted">{text}</p>;
}
function ProjectDescription() {
  return (
    <div>
      <div className="row">
        <h4>Project 1</h4>
      </div>
      <div className="row">
        <MiniHeader title="Project Description" />
      </div>
      <div className="row">
        <Item text="This application will fight procrastination and help you achieve your fullest potential!" />
      </div>
      <div className="row">
        <div className="col">
          <MiniHeader title="Delieverables" />

          <Item text="Will be able to finish the UI" />
        </div>
        <div className="col">
          <MiniHeader title="Deadline" />

          <Item text="Jan 12, 2021" />
        </div>
        <div className="col">
          <MiniHeader title="Completion Rate" />

          <Item text="10%" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <MiniHeader title="Milestones" />
          <Item text="Will be able to finish the UI" />
        </div>
        <div className="col">
          <MiniHeader title="Deadline" />

          <Item text="Jan 12, 2021" />
        </div>
        <div className="col">
          <MiniHeader title="Completion Rate" />
          <Item text="10%" />
        </div>
      </div>
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
