import React from "react";
import "antd/dist/antd.css";
import { Steps, Popover } from "antd";
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

export default function DeliverableTimeline({ title }) {
  return (
    <div className="container">
      <br />
      <h5>{title}</h5>
      <br />
      <Steps current={0} progressDot={customDot}>
        <Step
          title="Finish user interface"
          description="MDBootstrap, Bootstrap"
        />
        <Step
          title="Finish writing tests"
          description="Enzyme, Jest"
        />
        <Step
          title="Finish database"
          description="Knex, Postgres"
        />
        <Step
          title="Finish API"
          description="Express, Axios"
        />
        <Step
          title="Finish Redux"
          description="React-Redux, Redux"
        />
        <Step
          title="Finish Authentication"
          description="JWT"
        />
        <Step title="Finish Payment" description="Stripe" />
        <Step title="Deployment" description="AWS" />
      </Steps>

      <br />
      <br />
    </div>
  );
}

// function MiniHeader({ title }) {
//   return (
//     <div>
//       <h5 className="font-weight-normal mb-3">{title}</h5>
//     </div>
//   );
// }

// function Item({
//   styleOne,
//   styleTwo,
//   deliverable,
//   deadline,
//   completionRate,
// }) {
//   return (
//     <div className="row">
//       <div className="col">
//         <p style={styleOne} className="text-muted">
//           {deliverable}
//         </p>
//       </div>
//       <div className="col">
//         <p style={styleOne} className="text-muted">
//           {deadline}
//         </p>
//       </div>

//       <div className="col">
//         <p style={styleTwo} className="text-muted">
//           {completionRate}
//         </p>
//       </div>
//     </div>
//   );
// }
// function ProjectTitle({ titleOne, titleTwo, titleThree }) {
//   return (
//     <div className="row">
//       <div className="col">
//         <MiniHeader title={titleOne} />
//       </div>

//       <div className="col">
//         <MiniHeader title={titleTwo} />
//       </div>

//       <div className="col">
//         <MiniHeader title={titleThree} />
//       </div>
//     </div>
//   );
// }
// export default function Timeline() {
//   return (
//     <div>
//       <h4>Say No To Procrastination</h4>
//       <ProjectTitle
//         titleOne="Deliverable 1"
//         titleTwo="Deadline"
//         titleThree="Completion Rate"
//       />
//       <div className="row">
//         <div className="col">
//           <h5>Current Task:</h5>
//         </div>
//       </div>
//       <Item
//         styleTwo={{ borderTop: "8px solid green" }}
//         deliverable="UI"
//         deadline="Dec 18, 2020"
//         completionRate="60%"
//       />
//       <ProjectCards />
//       <ProjectTitle
//         titleOne="Larger Checklist"
//         titleTwo="Deadline"
//         titleThree="Completion Rate"
//       />
//       <Item
//         deliverable="Finish Functionality List"
//         deadline="Dec 18, 2020"
//         completionRate="80%"
//       />
//       <Item
//         deliverable="Finish wireframe"
//         deadline="Dec 18, 2020"
//         completionRate="100%"
//       />
//       <Item
//         deliverable="Code out the UI"
//         deadline="Dec 18, 2020"
//         completionRate="60%"
//       />
//       <Item
//         deliverable="Finish Testing"
//         deadline="Dec 18, 2020"
//         completionRate="0%"
//       />
//       <Item
//         deliverable="Create Database"
//         deadline="Dec 18, 2020"
//         completionRate="0%"
//       />
//       <Item
//         deliverable="Write down all relevant queries"
//         deadline="Dec 18, 2020"
//         completionRate="0%"
//       />{" "}
//       <Item
//         deliverable="Write out all test database migrations and seeds"
//         deadline="Dec 29, 2020"
//         completionRate="0%"
//       />
//       <Item
//         deliverable="Write out all database migrations and seeds"
//         deadline="Dec 29, 2020"
//         completionRate="0%"
//       />
//       <Item
//         deliverable="Plan out all relevant get/post/edit/delete routes"
//         deadline="Dec 28, 2020"
//         completionRate="0%"
//       />
//       <Item
//         deliverable="Write out all relevant get/post/edit/delete routes"
//         deadline="Dec 29, 2020"
//         completionRate="0%"
//       />
//     </div>
//   );
// }
