import React from "react";
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
    <section className="view">
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
    </section>
  );
}
export default function LoginPage() {
  return (
    <div className="container">
      <Page />
    </div>
  );
}
