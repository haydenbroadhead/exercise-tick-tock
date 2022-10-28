import React, { useState, useEffect } from "react";

interface Time {
  seconds: number;
  minutes: number;
  hour: number;
  date: string;
  day: string;
}

const weekday: Array<string> = [
  "Sun",
  "Mon",
  "Tues",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

const start = 270;
const tick = 360 / 60; // degrees / hour

const circle: React.CSSProperties = {
  width: "40vh",
  height: "40vh",
  background: "#a1a1a1",
  border: "3px solid #000",
  borderRadius: "50%",
  position: "relative",
};

const spacer = {
  width: "50%",
};

const date: React.CSSProperties = {
  position: "absolute",
  fontSize: "0.8em",
  borderRadius: "4px",
  top: "45%",
  left: "70%",
  background: "white",
  color: "black",
  padding: "1px 3px",
  border: "1px solid black",
};

const hour: React.CSSProperties = {
  height: "3px",
  width: "30%",
  backgroundColor: "black",
  content: "",
};

const minutes: React.CSSProperties = {
  height: "3px",
  width: "45%",
  backgroundColor: "black",
  content: "",
};

const seconds: React.CSSProperties = {
  height: "2px",
  width: "50%",
  backgroundColor: "red",
  content: "",
};

export function AnalogueFace() {
  const [time, setTime] = useState<Time>({
    seconds: start,
    minutes: start,
    hour: start,
    date: "01",
    day: "Mon",
  });

  const secondsLine: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    height: "3px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    transform: `rotate(${time.seconds}deg)`,
  };

  const minutesLine: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    height: "3px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    transform: `rotate(${time.minutes}deg)`,
  };

  const hourLine: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    height: "px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    transform: `rotate(${time.hour}deg)`,
  };

  useEffect(() => {
    setInterval(() => {
      let dateObj = new Date();
      setTime({
        seconds: dateObj.getSeconds() * tick + start,
        minutes: dateObj.getMinutes() * tick + start,
        hour: dateObj.getHours() * tick + start,
        date: dateObj.getDate().toString(),
        day: weekday[dateObj.getDay()],
      });
    }, 1000);
  });

  return (
    <div style={circle}>
      <div style={date}>
        {time.day} {time.date}
      </div>
      <div style={minutesLine}>
        <div style={spacer}></div>
        <div style={minutes}></div>
      </div>
      <div style={hourLine}>
        <div style={spacer}></div>
        <div style={hour}></div>
      </div>
      <div style={secondsLine}>
        <div style={spacer}></div>
        <div style={seconds}></div>
      </div>
    </div>
  );
}
