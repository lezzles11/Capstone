import React from "react";

function Cards() {
  return (
    <div className="container mt-5">
      <section className="">
        <div className="flex-center">
          <ul className="mb-0 list-unstyled">
            <li>
              <h2 className="h2-responsive">
                A good life doesn’t require us to banish
                procrastination entirely, it involves making
                choices about where we will allow ourselves
                to remain inefficient, in the name of having
                a shot at excellence elsewhere.
                <i
                  className="fas fa-quote-right"
                  aria-hidden="true"
                ></i>
              </h2>
            </li>
            <li className="mb-0">
              <h5 className="text-center font-italic mb-0">
                ~ The School of Life
              </h5>
            </li>
          </ul>
        </div>

        <br />
        <br />
        <h3 className="text-center font-weight-bold mb-5">
          Past Projects
        </h3>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
            <div className="card hoverable">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
                alt="Card image cap"
              />

              <div className="card-body">
                <a href="#!" className="black-text">
                  Hygge Chats
                </a>

                <p className="card-title text-muted font-small mt-3 mb-2">
                  We wanted to create a platform in which
                  people could have more authentic
                  conversations.
                </p>

                <button
                  type="button"
                  className="btn btn-flat text-primary p-0 mx-0"
                >
                  See how it was executed
                  <i className="fa fa-angle-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
            <div className="card hoverable">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
                alt="Card image cap"
              />

              <div className="card-body">
                <a href="#!" className="black-text">
                  Twitter
                </a>

                <p className="card-title text-muted font-small mt-3 mb-2">
                  We wanted to create a platform in which
                  people could tweet their thoughts in 250
                  words or less because people talk too
                  much.
                </p>

                <button
                  type="button"
                  className="btn btn-flat text-primary p-0 mx-0"
                >
                  See how it was executed
                  <i className="fa fa-angle-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-0">
            <div className="card hoverable">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
                alt="Card image cap"
              />

              <div className="card-body">
                <a href="#!" className="black-text">
                  Facebook
                </a>

                <p className="card-title text-muted font-small mt-3 mb-2">
                  This project saved the world. You might
                  have heard of it.
                </p>

                <button
                  type="button"
                  className="btn btn-flat text-primary p-0 mx-0"
                >
                  See how it was executed
                  <i className="fa fa-angle-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <a href="#!">
            Browse all previous awesome projects
          </a>
        </div>
      </section>
    </div>
  );
}
export default function PastProjectsPage() {
  return (
    <div>
      <Cards />
    </div>
  );
}
