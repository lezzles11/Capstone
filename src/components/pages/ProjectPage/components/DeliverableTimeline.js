import React, { Component } from "react";
import "antd/dist/antd.css";
import { Steps, Popover } from "antd";
import { connect } from "react-redux";
const { Step } = Steps;

/**********************************************
 * Deliverable Timeline
 * ==================================
 * This would receive an array of deliverables
 * deliverable is an object that contains
 *
 ***********************************************/

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

class DeliverableTimeline extends Component {
  loadFeatures = (features) => {
    let list = [];
    for (let i = 0; i < features.length; i++) {
      console.log(features[i]);
      list.push(
        // pass in features
        <Step
          title={features[i].title}
          description={features[i].tools}
        />
      );
    }
    return list;
  };
  render() {
    let features = this.props.features;
    return (
      <div>
        <div className="container">
          <br />
          <h5>Timeline</h5>
          <Steps current={1} progressDot={customDot}>
            {this.loadFeatures(features)}
          </Steps>
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  features: state.features,
});
export default connect(
  mapStateToProps,
  null
)(DeliverableTimeline);
{
  /* return (
    <div className="container">
      <br />
      <h5>Timeline</h5>
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
} */
}
