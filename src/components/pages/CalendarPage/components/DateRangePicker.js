import React, { Component, useState } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { getDay } from "date-fns";
import "./calendar.css";
import {
  DateRangePickerCalendar,
  START_DATE,
} from "react-nice-dates";
import "react-nice-dates/build/style.css";
// Event Calendar Imports
import FullCalendar, {
  formatDate,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const modifiers = {
  //   disabled: (date) => getDay(date) === 6, // Disables Saturdays
  highlight: (date) => getDay(date) === 2, // Highlights Tuesdays
};
const modifiersClassNames = {
  highlight: "-highlight",
};
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
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
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
