import { useState, useEffect } from "react";
import "../style/DynamicDateTable.css";

const CalendarAndClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the clock every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="calendar-clock-container">
      {/* Header */}
      <div className="head">
        <h1 className="header-title">Calendar & Real-Time Clock</h1>
        <p className="header-subtitle">Stay on top of the date and time</p>
      </div>

      {/* Real-time Date and Clock */}
      <div className="real-time-display">
        <div className="real-time-item">
          <h2>Current Time:</h2>
          <p>{currentTime.toLocaleTimeString()}</p>
        </div>
      </div>

      {/* Static Calendar */}
      <div className="calendar">
        <iframe
          title="Google Calendar"
          src="https://calendar.google.com/calendar/embed?showTitle=0&showPrint=0&showCalendars=0&mode=MONTH"
          style={{
            border: "none",
            width: "100%",
            height: "500px",
            borderRadius: "10px",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default CalendarAndClock;
