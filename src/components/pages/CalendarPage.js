import React, { Component, useState } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import {
  DateRangePickerCalendar,
  START_DATE,
} from "react-nice-dates";
import "react-nice-dates/build/style.css";

function DateRangePickerCalendarExample() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focus, setFocus] = useState(START_DATE);
  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };
  return (
    <div>
      {/* <p>Currently selecting: {focus}.</p> */}
      <DateRangePickerCalendar
        startDate={startDate}
        endDate={endDate}
        focus={focus}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onFocusChange={handleFocusChange}
        locale={enGB}
      />
      <p>
        Selected start date:{" "}
        {startDate
          ? format(startDate, "dd MMM yyyy", {
              locale: enGB,
            })
          : "none"}
        .
      </p>
      <p>
        Selected end date:{" "}
        {endDate
          ? format(endDate, "dd MMM yyyy", { locale: enGB })
          : "none"}
        .
      </p>
    </div>
  );
}

export default class CalendarPage extends Component {
  render() {
    return (
      <div>
        <div
          className="justify-content-center"
          style={{ width: "50%" }}
        >
          <DateRangePickerCalendarExample />
        </div>
      </div>
    );
  }
}
