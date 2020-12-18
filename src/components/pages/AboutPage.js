import React from "react";
import ChecklistIcon from "./components/icons/ChecklistIcon";
import HeartIcon from "./components/icons/HeartIcon";
import MusicIcon from "./components/icons/MusicIcon";
import OneThingIcon from "./components/icons/OneThingIcon";
import StoryIcon from "./components/icons/StoryIcon";
function InfoCard() {
  return (
    <div className="container my-5 p-5 z-depth-1">
      <section className="dark-grey-text">
        <h2 className="text-center font-weight-bold mb-4 pb-2">
          Why is it so great?
        </h2>
        <p className="text-center lead grey-text mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <div className="row">
          <div className="col-md-4">
            <div className="row mb-3">
              <div className="col-2">
                <OneThingIcon />
              </div>
              <div className="col-10">
                <h5 className="font-weight-bold mb-3">
                  Do One Thing At A Time
                </h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Reprehenderit maiores
                  nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-2">
                <ChecklistIcon />
              </div>
              <div className="col-10">
                <h5 className="font-weight-bold mb-3">
                  Use Checklists
                </h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Reprehenderit maiores
                  nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>
            <div className="row mb-md-0 mb-3">
              <div className="col-2">
                <StoryIcon />
              </div>
              <div className="col-10">
                <h5 className="font-weight-bold mb-3">
                  Your Story Matters
                </h5>
                <p className="grey-text mb-md-0">
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Reprehenderit maiores
                  nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
              alt="Sample image"
            />
          </div>

          <div className="col-md-4">
            <div className="row mb-3">
              <div className="col-2">
                <HeartIcon />
              </div>
              <div className="col-10">
                <h5 className="font-weight-bold mb-3">
                  Care
                </h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Reprehenderit maiores
                  nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-2">
                <MusicIcon />
              </div>
              <div className="col-10">
                <h5 className="font-weight-bold mb-3">
                  Environment Matters
                </h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Reprehenderit maiores
                  nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="fas fa-2x fa-magic deep-purple-text"></i>
              </div>
              <div className="col-10">
                <h5 className="font-weight-bold mb-3">
                  Magical
                </h5>
                <p className="grey-text mb-0">
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Reprehenderit maiores
                  nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      <InfoCard />
    </div>
  );
}
