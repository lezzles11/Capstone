import React, { Component } from "react";
import { connect } from "react-redux";
function PastProjectCard({ project }) {
  return (
    <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
      <div className="card hoverable">
        <img
          className="card-img-top"
          src={project.image_url}
          alt="Card image cap"
        />

        <div className="card-body">
          <a href="#!" className="black-text">
            {project.name}
          </a>

          <p className="card-title text-muted font-small mt-3 mb-2">
            {project.purpose}
          </p>

          <button
            type="button"
            className="btn btn-flat text-primary p-0 mx-0"
          >
            See how it was executed
          </button>
        </div>
      </div>
      <br />
    </div>
  );
}

const initialState = [
  {
    id: 1,
    user_id: 1,
    done: false,
    name: "Project Management",
    image_url:
      "https://mdbootstrap.com/img/Photos/Others/images/50.jpg",
    deadline: "Jan 12, 2021",
    color: "green",
    purpose: "The purpose of this project is to ",
    friendOneEmail: "anubhav@xccelerate.co",
    friendTwoEmail: "samo@xccelerate.co",
  },
  {
    id: 2,
    user_id: 1,
    done: false,
    image_url:
      "https://mdbootstrap.com/img/Photos/Others/images/49.jpg",
    name: "UDemy Data Structures",
    deadline: "Feb 12, 2021",
    purpose:
      "The purpose of this project is to people better problem solve.",
    color: "orange",
    friendOneEmail: "anubhav@xccelerate.co",
    friendTwoEmail: "samo@xccelerate.co",
  },
  {
    id: 3,
    user_id: 1,
    done: false,
    image_url:
      "https://mdbootstrap.com/img/Photos/Others/images/48.jpg",
    name: "Finish Videos",
    deadline: "March 12, 2021",
    purpose:
      "The purpose of this project is to people better problem solve.",
    color: "pink",
    friendOneEmail: "anubhav@xccelerate.co",
    friendTwoEmail: "samo@xccelerate.co",
  },
  {
    id: 4,
    user_id: 1,
    done: true,
    image_url:
      "https://mdbootstrap.com/img/Photos/Others/images/47.jpg",
    name: "Hygge App",
    deadline: "",
    purpose:
      "We wanted to create a platform in which people could have more authentic conversations.",
    color: "blue",
    friendOneEmail: "anubhav@xccelerate.co",
    friendTwoEmail: "samo@xccelerate.co",
  },
  {
    id: 5,
    user_id: 1,
    done: true,
    image_url:
      "https://mdbootstrap.com/img/Photos/Others/images/33.jpg",
    name: "Twitter",
    deadline: "",
    purpose:
      "We wanted to create a platform in which people could tweet their thoughts in 250 words or less because people talk too much.",
    color: "blue",
    friendOneEmail: "anubhav@xccelerate.co",
    friendTwoEmail: "samo@xccelerate.co",
  },
  {
    id: 6,
    user_id: 1,
    done: true,
    image_url:
      "https://mdbootstrap.com/img/Photos/Others/images/34.jpg",
    name: "Facebook",
    deadline: "",
    purpose:
      "This project saved the world. You might have heard of it.",
    color: "blue",
    friendOneEmail: "anubhav@xccelerate.co",
    friendTwoEmail: "samo@xccelerate.co",
  },
];

class Cards extends Component {
  loadProjects = (projects) => {
    let list = [];
    for (let i = 0; i < projects.length; i++) {
      list.push(<PastProjectCard project={projects[i]} />);
    }
    return list;
  };
  render() {
    const projects = this.props.projects;
    return (
      <div className="container mt-5">
        <section className="">
          <div className="flex-center">
            <ul className="mb-0 list-unstyled">
              <li>
                <h2 className="h2-responsive">
                  A good life doesn’t require us to banish
                  procrastination entirely, it involves
                  making choices about where we will allow
                  ourselves to remain inefficient, in the
                  name of having a shot at excellence
                  elsewhere.
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
          <div className="row flex">
            {this.loadProjects(projects)}
          </div>
        </section>
      </div>
    );
  }
}
function PastProjectsPage() {
  return (
    <div>
      <Cards />
    </div>
  );
}

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, null)(Cards);
