import React, { Component } from "react";

class PaymentPage extends Component {
  render() {
    return (
      <div>
        <div className="container my-5">
          <section className="text-center dark-grey-text">
            <h3 className="font-weight-bold pb-2 mb-4">
              Our pricing plans
            </h3>
            <p className="text-muted w-responsive mx-auto mb-5">
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Fugit, error amet numquam
              iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a
              pariatur veniam.
            </p>

            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="mb-4">Basic plan</h5>
                    <div className="d-flex justify-content-center">
                      <div className="card-circle d-flex justify-content-center align-items-center">
                        <i className="fas fa-home indigo-text"></i>
                      </div>
                    </div>

                    <h2 className="font-weight-bold my-4">
                      $5
                    </h2>
                    <p className="grey-text">
                      Add Limitless Projects
                    </p>
                    <a className="btn blue lighten-4 btn-rounded">
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="card blue lighten-4">
                  <div className="card-body white-text">
                    <h5 className="mb-4">Premium plan</h5>
                    <div className="d-flex justify-content-center">
                      <div className="card-circle d-flex justify-content-center align-items-center">
                        <i className="fas fa-users"></i>
                      </div>
                    </div>

                    <h2 className="font-weight-bold my-4">
                      $6
                    </h2>
                    <p>
                      Esse corporis saepe laudantium velit
                      adipisci cumque iste ratione facere
                      non distinctio cupiditate sequi atque.
                    </p>
                    <a className="btn btn-outline-white btn-rounded">
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default PaymentPage;
