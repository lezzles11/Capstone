import React, { Component } from "react";

const initialState = [
  {
    id: 1,
    title: "User Interface",
    keyInfo: "",
    tools: "MDBootstrap, Bootstrap",
    description:
      "Users will be able to visualize the entire user interface and understand how the user flow works.",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2020-12-18" + "T12:00:00",
    end: "2020-12-20" + "T12:00:00",
  },
  {
    id: 2,
    title: "Tests",
    keyInfo: "",
    tools: "Enzyme, Jest",
    description:
      "Users will be able to understand how to test react, react-redux, express, and database components.",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2020-12-21" + "T12:00:00",
    end: "2020-12-23" + "T12:00:00",
  },
  {
    id: 3,
    title: "Database",
    keyInfo: "",
    tools: "Knex, Postgres",
    description:
      "Users will be able to understand how to construct a user flow",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2020-12-24" + "T12:00:00",
    end: "2020-12-25" + "T12:00:00",
  },
  {
    id: 4,
    title: "API",
    keyInfo: "",
    tools: "Express, Axios",
    description:
      "Users will be able to see how the routes connect with one another.",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2020-12-26" + "T12:00:00",
    end: "2020-12-28" + "T12:00:00",
  },
  {
    id: 5,
    title: "Redux Store (State management)",
    keyInfo: "",
    tools: "React-Redux, Redux",
    description:
      "Users will be able to understand how state is passed throughout the application.",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2020-12-29" + "T12:00:00",
    end: "2020-12-31" + "T12:00:00",
  },
  {
    id: 6,
    title: "Authentication",
    keyInfo: "",
    tools: "JWT",
    description:
      "Users will be able to understand how users are authenticated.",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2021-01-01" + "T12:00:00",
    end: "2021-01-03" + "T12:00:00",
  },
  {
    id: 7,
    title: "Payment",
    keyInfo: "",
    tools: "Stripe",
    description:
      "Users will be able how to implement payment for their applications.",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2021-01-04" + "T12:00:00",
    end: "2021-01-06" + "T12:00:00",
  },
  {
    id: 8,
    title: "Deployment",
    keyInfo: "",
    tools: "AWS",
    description:
      "Users will be able to understand how to deploy their applications.",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2021-01-07" + "T12:00:00",
    end: "2021-01-09" + "T12:00:00",
  },
];
// pass in the object, and create the component instead, so try to create a step component in which when you click on it, it will expand
// you might have to track which items is currently selected
// if that item is selected, then it would render that component

function Demo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        className="btn btn-outline-dark waves-effect"
      >
              Open
      </button>
          <div></div>
    </div>
  );
}
class ExpandTimeline extends Component {
  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const features = this.props.features;
    return (
      <div>
        <h1>
          Expand timeline - when you click on the timeline,
          the hover page will open{" "}
        </h1>
      </div>
    );
  }
}

export default ExpandTimeline;
