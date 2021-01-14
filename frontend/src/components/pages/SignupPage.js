import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../../redux/actions/userActions";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.addUser = this.addUser.bind(this);
  }
  addUser = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
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
      <div>
        <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <form
                className="text-center"
                onSubmit={this.addUser}
              >
                <p className="h4 mb-4">Sign up</p>
                <div className="form-row mb-4">
                  <div className="col">
                    <input
                      type="text"
                      id="defaultRegisterFormFirstName"
                      className="form-control"
                      name="name"
                      onChange={this.handleChange}
                      value={this.state.name}
                      placeholder="name"
                    />
                  </div>
                </div>
                <input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  id="defaultRegisterFormEmail"
                  className="form-control mb-4"
                  placeholder="E-mail"
                />
                make small text on the left, and then make
                the text in the placeholder light grey{" "}
                <input
                  type="password"
                  id="defaultRegisterFormPassword"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  aria-describedby="defaultRegisterFormPasswordHelpBlock"
                />
                <small
                  id="defaultRegisterFormPasswordHelpBlock"
                  className="form-text text-muted mb-4"
                >
                  At least 8 characters and 1 digit
                </small>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="defaultRegisterFormNewsletter"
                  />
                  <label
                    className="custom-control-label"
                    for="defaultRegisterFormNewsletter"
                  >
                    I'm ready to execute
                  </label>
                </div>
                <button
                  className="btn btn-info my-4 btn-block"
                  type="submit"
                >
                  Say no to procrastination
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default connect(null, { addUser })(SignupPage);
