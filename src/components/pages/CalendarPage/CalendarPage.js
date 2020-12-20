import React, { Component, useState } from "react";
import "./components/calendar.css";
// Event Calendar Imports
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
    id: createEventId(),
    title: "All-day event",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
  },
  {
    id: createEventId(),
    title: "Finish the ",
    start: "2020-12-21" + "T12:00:00",
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
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
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
          <div className="d-flex justify-content-between">
            <div className="col-11 text-truncate pl-0 mb-3">
              <a className="font-weight-bold">
                Instructions
              </a>
            </div>
          </div>
          <div className="single-news mb-3">
            <div className="d-flex justify-content-between">
              <div className="col-11 text-truncate pl-0 mb-3">
                <a>24 Food Swaps That Slash Calories.</a>
              </div>
            </div>
          </div>
          <h2>Instructions</h2>
          <ul>
            <li>
              Select dates and you will be prompted to
              create a new event
            </li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className="demo-app-sidebar-section">
          <label>
            <input
              type="checkbox"
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className="demo-app-sidebar-section">
          <h2>
            All Events ({this.state.currentEvents.length})
          </h2>
          <ul>
            {this.state.currentEvents.map(
              renderSidebarEvent
            )}
          </ul>
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
        {" "}
        <div className="demo-app">
          {this.renderSidebar()}
          <div className="demo-app-main">
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
              initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
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
      </div>
    );
  }
}
export default class CalendarPage extends React.Component {
  render() {
    return (
      <div className="justify-content-center font3">
        <EventCalendar />
      </div>
    );
  }
}
