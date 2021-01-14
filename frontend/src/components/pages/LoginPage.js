import React, { Component } from "react";
import { connect } from "react-redux";
/**********************************************
 * How authentication works
 * ==================================
 * Signup and Signin Views
 * Pass authentication information to backend
 ***********************************************/

function LoginForm() {
  return (
    <div className="card">
      <div className="card-body">
        <form className="text-center">
          <h3 className="font-weight-body my-4 pb-2 text-center dark-grey-text">
            Log In
          </h3>
          <input
            type="email"
            className="form-control mb-4"
            placeholder="Email"
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <button
            type="button"
            className="btn btn-outline-orange btn-rounded my-4 waves-effect"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
function Form() {
  return (
    <form
      className="text-center border border-light p-5"
      action="#!"
    >
      <p className="h4 mb-4">Sign in</p>
      <input
        type="email"
        id="defaultLoginFormEmail"
        className="form-control mb-4"
        placeholder="E-mail"
      />

      <input
        type="password"
        id="defaultLoginFormPassword"
        className="form-control mb-4"
        placeholder="Password"
      />

      <div className="d-flex justify-content-around">
        <div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="defaultLoginFormRemember"
            />
            <label
              className="custom-control-label"
              for="defaultLoginFormRemember"
            >
              Remember me
            </label>
          </div>
          <br />
        </div>
      </div>
      <div>
        <a href="">Forgot password?</a>
      </div>
      <button
        className="btn btn-info btn-block my-4"
        type="submit"
      >
        Sign in
      </button>

      <p>
        Not a member?
        <a href="">Register</a>
      </p>

      <p>or sign in with:</p>
    </form>
  );
}

function Page() {
  return (
    // <section className="view">
    <div className="row">
      <div className="col-md-6">
        <div className="view">
          <img
            src="https://images.pexels.com/photos/325045/pexels-photo-325045.jpeg"
            className="img-fluid"
            alt="smaple image"
          />
          <div className="mask flex-center hm-gradient"></div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="d-flex flex-column justify-content-center  h-100">
          {/* Form, here  */}

          <Form />
        </div>
      </div>
    </div>
    // </section>
  );
}
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.addUser = this.addUser.bind(this);
  }
  addUser = (event) => {
    console.log("Clicked!");
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
      <div className="container">
        <div className="row">
          <div className="col-lg-7 align-self-center text-center text-lg-left">
            <div className="lead">
              <span style={{ fontSize: "1.5em" }}>
                Let's get working
              </span>
              <br />
              What we call being lazy is really a symptom
              and consequence of anxiety. Oddly, it tends to
              be very easy to get down to work on things
              that don’t matter very much. Their lack of
              importance encourages our lighter, more
              carefree and more productive sides. We find
              we’re done with them in no time and it doesn’t
              even feel like work; it’s closer to play.
            </div>

            <form onSubmit={this.addUser}>
              <div className="md-form md-outline form-lg">
                <input
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  type="text"
                  id="form1"
                  className="form-control form-control-lg"
                />
                <label for="form1">Email</label>
              </div>

              <div className="md-form md-outline form-lg">
                <input
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  type="password"
                  id="form2"
                  className="form-control form-control-lg"
                />
                <label for="form2">Password</label>
              </div>

              <button className="btn btn-cyan waves-effect ">
                game time
              </button>
            </form>
          </div>
          <div className="col-lg-5 mb-4">
            <div className="view overlay">
              <img
                className="img-fluid mx-auto"
                src="https://mdbootstrap.com/img/illustrations/app-user-colour.svg"
                alt="Sample image"
              />
              <a>
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
