import React, { Component } from "react";
import ProjectCards from "./components/ProjectCards";
import Card from "./components/Card";
import { connect } from "react-redux";
import { deleteFeature } from "../../../redux/actions/featureActions";
import TaskBreakdownTable from "./components/TaskBreakdownTable";
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

class FeatureList extends Component {
  deleteFeature = (event) => {
    this.props.deleteFeature(
      parseInt(event.target.getAttribute("data-id"))
    );
  };
  loadFeatures = (features) => {
    let featureList = [];
    for (let i = 0; i < features.length; i++) {
      console.log(features[i]);
      featureList.push(
        <div>
          <div className="row">
            <div className="col-9">
              <Card
                bigTitle={features[i].title}
                smallTitle={features[i].tools}
                text={features[i].description}
              />
            </div>
            <div className="col-3">
              {" "}
              <Card
                bigTitle="Key Information"
                smallTitle={features[i].keyInfo}
                text={features[i].end}
              />
            </div>
          </div>{" "}
          <br />
          <div className="row">
            <div className="col-12">
              <TaskBreakdownTable
                tasks={features[i].tasks}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-6">
              <Card
                bigTitle="Notes"
                smallTitle="What other relevant information is needed here?"
                text={features[i].notes}
              />
            </div>
            <div className="col-6">
              {" "}
              <Card
                bigTitle="Structure"
                smallTitle="Image here, maybe"
                text={features[i].structure}
              />
            </div>
          </div>
          <button
            type="button"
            data-id={features[i].id}
            onClick={this.deleteFeature}
            className="btn btn-outline-dark waves-effect"
          >
            Delete Feature
          </button>
        </div>
      );
    }
    return featureList;
  };
  render() {
    let features = this.props.features;
    return <div>{this.loadFeatures(features)}</div>;
  }
}

const FeaturePage = () => {
  return (
    <div>
      <FeatureList />
    </div>
  );
};

const mapStateToProps = (state) => ({
  features: state.features,
});
export default connect(mapStateToProps, { deleteFeature })(
  FeatureList
);
