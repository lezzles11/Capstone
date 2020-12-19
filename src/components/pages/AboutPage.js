import React from "react";
import ChecklistIcon from "./components/icons/ChecklistIcon";

import DeadlineIcon from "./components/icons/DeadlineIcon";
import HeartIcon from "./components/icons/HeartIcon";
import MusicIcon from "./components/icons/MusicIcon";
import OneThingIcon from "./components/icons/OneThingIcon";
import StoryIcon from "./components/icons/StoryIcon";
function InfoCard() {
  return (
    <div className="container my-5 p-5 z-depth-1">
      <section className="dark-grey-text">
        <h2 className="text-center font-weight-bold mb-4 pb-2">
          Fighting Procrastination
        </h2>

        <div className="row">
          <div className="col-md-4">
            <div className="row mb-3">
              <div className="col-12">
                <h5>
                  <OneThingIcon /> Do One Thing At A Time
                </h5>
                <p className="grey-text">
                  <OneThingIcon /> We are naturally very
                  easily drawn off course and need all the
                  help we can get to devote ourselves to
                  tasks we are theoretically committed to.
                  If we are to think and achieve to a high
                  standard, we may need to make a lot of
                  changes to our routines and the structure
                  of our lives. We shouldn’t just blame our
                  willpower. We can blame the whole
                  architectural and social setup around the
                  way we work.
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
                  Our own productivity might be transformed
                  if we were to follow our odder instincts
                  and properly shape our lives around the
                  real requirements of our working
                  temperament.
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
                  In life as a whole, things can get very
                  boring – and therefore very unproductive –
                  when we lose sight of the plot. We may
                  start to ask ourselves why we should be
                  doing a particular job or why we should be
                  putting in so much effort into a
                  relationship. Across several years of a
                  major project, we may lose sight of quite
                  why what we’re doing matters. We need to
                  remind us ourselves of the ongoing logic
                  of what we’re meant to be doing and have
                  signed up to. We need to tell the story of
                  our lives in a way that can keep
                  illuminating the purpose of the small and
                  large challenges of the days ahead.
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
                  Do It Right The First Time
                </h5>
                <p className="grey-text">
                  Sloppiness is one of the enemies of
                  efficiency. And to fix it, we need to
                  understand it. Its source isn’t laziness.
                  It’s misplaced idealism: the belief that
                  the important things don’t connect with
                  the details; the conviction that concern
                  with little things means you cannot be
                  looking at the big ones too. So, rather
                  than try to terrify ourselves into paying
                  greater attention to the apparently small
                  stuff, the better fix is to get a more
                  accurate vision of things. We should dare
                  to re-glamourise the little tasks which
                  turn out to be, in fact, crucial for
                  efficiency.
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
                  Take a shower, go for a drive. We often
                  have our best ideas when theoretically
                  we’re not supposed to be working at all.
                  The mind is so scared of thinking, it
                  tends to wait to let out its more valuable
                  thoughts until we are on a break.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <DeadlineIcon />
              </div>
              <div className="col-10">
                <h5 className="font-weight-bold mb-3">
                  Deadlines
                </h5>
                <p className="grey-text mb-0">
                  Painfully – but productively – what we
                  need to do is to create deadlines for
                  ourselves. We need to become our own inner
                  bosses. Furthermore, we have to tell
                  others about our intentions and
                  figuratively sign them up to expect a
                  specific amount of progress from us by a
                  particular date. We have to invite a
                  degree of nagging from people with no
                  prior interest in delivering it – because
                  this is better than the alternative:
                  wasting our lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <small className="form-text text-muted mb-4">
          Taken from the school of life
        </small>
      </div>
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
