import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUserThunk } from "../../redux/actions/userActions";

/**********************************************
 * How authentication works
 * ==================================
 * Signup and Signin Views
 * Pass authentication information to backend
 ***********************************************/

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.users.isAuthenticated,
    users: state.users.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginRedux: (email, password) => {
      dispatch(loginUserThunk(email, password));
    },
  };
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  login = () => {
    this.props.loginRedux(
      this.state.email,
      this.state.password
    );
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
                {this.props.isAuthenticated}
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

            <form>
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

              <button
                onClick={this.login}
                type="submit"
                className="btn btn-cyan waves-effect "
              >
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
