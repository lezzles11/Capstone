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

export default function ProjectPage() {
  return (
    <div>
      <h4> Current Projects</h4>
      <br />
      <Progress title="Website Store" />
      <Progress title="Project Management Application" />
    </div>
  );
}
