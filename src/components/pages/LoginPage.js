import React from "react";
/**********************************************
 * How authentication works
 * ==================================
 * Signup and Signin Views 
 * Pass authentication information to backend 
 ***********************************************/

export default function LoginPage() {
  return (
    <div className="container">
      <div>
        <div className="row">
          <div className="col-md-6 mx-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
}
