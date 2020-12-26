import React, { Component } from "react";
import ProjectCards from "./components/ProjectCards";
import Card from "./components/Card";
import { connect } from "react-redux";
import { deleteFeature } from "../../../redux/actions/featureActions";
import TaskBreakdownTable from "./components/TaskBreakdownTable";

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
