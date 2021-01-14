import React, { Component, useState } from "react";
import "./components/calendar.css";
// Event Calendar Imports
import { connect } from "react-redux";
import FullCalendar, {
  formatDate,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

const INITIAL_EVENTS = [
  {
    id: 1,
    title: "User Interface",
    keyInfo: "",
    tools: "MDBootstrap, Bootstrap",
    description:
      "Users will be able to visualize the entire user interface and understand how the user flow works.",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2020-12-18" + "T12:00:00",
    end: "2020-12-20" + "T12:00:00",
  },
  {
    id: 2,
    title: "Tests",
    keyInfo: "",
    tools: "Enzyme, Jest",
    description:
      "Users will be able to understand how to test react, react-redux, express, and database components.",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2020-12-21" + "T12:00:00",
    end: "2020-12-23" + "T12:00:00",
  },
  {
    id: 3,
    title: "Database",
    keyInfo: "",
    tools: "Knex, Postgres",
    description:
      "Users will be able to understand how to construct a user flow",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2020-12-24" + "T12:00:00",
    end: "2020-12-25" + "T12:00:00",
  },
  {
    id: 4,
    title: "API",
    keyInfo: "",
    tools: "Express, Axios",
    description:
      "Users will be able to see how the routes connect with one another.",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2020-12-26" + "T12:00:00",
    end: "2020-12-28" + "T12:00:00",
  },
  {
    id: 5,
    title: "Redux Store (State management)",
    keyInfo: "",
    tools: "React-Redux, Redux",
    description:
      "Users will be able to understand how state is passed throughout the application.",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2020-12-29" + "T12:00:00",
    end: "2020-12-31" + "T12:00:00",
  },
  {
    id: 6,
    title: "Authentication",
    keyInfo: "",
    tools: "JWT",
    description:
      "Users will be able to understand how users are authenticated.",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2021-01-01" + "T12:00:00",
    end: "2021-01-03" + "T12:00:00",
  },
  {
    id: 7,
    title: "Payment",
    keyInfo: "",
    tools: "Stripe",
    description:
      "Users will be able how to implement payment for their applications.",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2021-01-04" + "T12:00:00",
    end: "2021-01-06" + "T12:00:00",
  },
  {
    id: 8,
    title: "Deployment",
    keyInfo: "",
    tools: "AWS",
    description:
      "Users will be able to understand how to deploy their applications.",
    notes: "",
    structure: "",
    tasks: [
      {
        id: 1,
        task: "Finish the signup page",
        done: true,
      },
      {
        id: 2,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 3,
        task: "Finish the calendar page",
        done: true,
      },
      {
        id: 4,
        task: "Finish the ongoing projects page",
        done: true,
      },
    ],
    start: "2021-01-07" + "T12:00:00",
    end: "2021-01-09" + "T12:00:00",
  },
];

function createEventId() {
  return String(eventGuid++);
}
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={event.id}
      />
      <label className="form-check-label" for={event.id}>
        {" "}
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        : <i>{event.title}</i>
      </label>
    </div>
  );
}

class EventCalendar extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
  };
  renderSidebar() {
    return (
      <div className="demo-app-sidebar">
        <div className="demo-app-sidebar-section">
          <h2>
            Current Project: <br />
            <br />
            Fight Procrastination! <br />(
            {this.state.currentEvents.length} deliverables)
          </h2>
          <br />
          {this.state.currentEvents.map(renderSidebarEvent)}
        </div>
      </div>
    );
  }
  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    });
  };
  handleDateSelect = (selectInfo) => {
    let title = prompt(
      "Please enter a new title for your event"
    );
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };
  handleEventClick = (clickInfo) => {
    if (
      alert(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  handleEvents = (events) => {
    this.setState({
      currentEvents: events,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            {this.renderSidebar()}
          </div>
          <div className="col-9">
            <FullCalendar
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right:
                  "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={this.state.weekendsVisible}
              initialEvents={this.props.features} // alternatively, use the `events` setting to fetch from a feed
              select={this.handleDateSelect}
              eventContent={renderEventContent} // custom render function
              eventClick={this.handleEventClick}
              eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
              /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
            />
          </div>
        </div>
        <br />
        <div className="row">
          <h2>Instructions</h2>
        </div>
        <div className="row">
          <ul>
            <li>
              Select dates and you will be prompted to
              create a new event
            </li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
      </div>
    );
  }
}
class CalendarPage extends React.Component {
  render() {
    let features = this.props.features;
    return (
      <div className="justify-content-center font3">
        <EventCalendar features={features} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  features: state.features,
});

export default connect(mapStateToProps, null)(CalendarPage);
