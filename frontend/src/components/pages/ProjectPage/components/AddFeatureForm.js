import React, { Component } from "react";
import { connect } from "react-redux";
import { addFeature } from "../../../../redux/actions/featureActions";
class AddFeatureForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      keyInfo: "",
      tools: "",
      description: "",
      notes: "",
      structure: "",
      done: false,
      tasks: [],
      start: "",
      end: "",
    };
    this.addFeature = this.addFeature.bind(this);
  }
  addFeature = (event) => {
    console.log("Adding feature");
    event.preventDefault();
    this.props.addFeature(this.state);
    console.log(this.state);
  };
  handleChange = (event) => {
    console.log(event.target.value);
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };
  render() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-md-12">
          <form
            className="text-center"
            onSubmit={this.addFeature}
            action="#!"
          >
            <p className="h4 mb-4">Add Feature</p>
            {/* id: projectName */}
            {/* id: purpose */}
            <input
              type="text"
              id="deliverableItem"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.title}
              name="title"
              placeholder="Feature"
              aria-describedby="deliverableInput"
            />
            <small
              id="deliverableInput"
              className="form-text text-muted mb-4"
            >
              Specific Feature
            </small>
            <input
              type="text"
              id="deliverableItem"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.description}
              name="description"
              placeholder="Description"
              aria-describedby="descriptionInput"
            />
            <small
              id="descriptionInput"
              className="form-text text-muted mb-4"
            >
              Users will be able to...
            </small>
            {/* id: description */}
            <input
              type="textarea"
              id="tools"
              onChange={this.handleChange}
              value={this.state.tools}
              name="tools"
              className="form-control"
              placeholder="Feature Tools"
              aria-describedby="descriptionInput"
            />
            <small
              id="descriptionInput"
              className="form-text text-muted mb-4"
            >
              Redux, React, Jest, etc.
            </small>
            <div className="form-row">
              <div className="col">
                {/* id: friendTwo */}
                <input
                  type="text"
                  id="deliverableDeadline"
                  onChange={this.handleChange}
                  value={this.state.deadline}
                  name="deadline"
                  className="form-control"
                  placeholder="Deadline"
                  aria-describedby="deadlineInput"
                />
                <small
                  id="deadlineInput"
                  className="form-text text-muted mb-4"
                >
                  When is this due?
                </small>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                {/* id: friendTwo */}
                <input
                  type="text"
                  id="deliverableDeadline"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.notes}
                  name="notes"
                  placeholder="Notes"
                  aria-describedby="notesInput"
                />
                <small
                  id="notesInput"
                  className="form-text text-muted mb-4"
                >
                  Other notes?
                </small>
              </div>
            </div>

            {/* ENDING FORM */}

            <button
              className="btn btn-info my-4 btn-block"
              type="submit"
            >
              Let's Execute
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addFeature })(
  AddFeatureForm
);
