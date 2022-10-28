import React, { useState, useEffect } from "react";

const container = {
  padding: "0.2em",
  backgroundColor: "white",
  color: "black",
  margin: '1em',
  fontSize: "2em",
  border: "3px black solid",
  borderRadius: "10px"
};

interface Time {
  hour: string;
  minutes: string;
  seconds: string;
}

export function DigitalFace() {
  const [time, setTime] = useState<Time>({ hour: '0', minutes: '0', seconds: '0' });

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const time: Time = {
        hour:  date.getHours().toString().padStart(2,"0"),
        minutes: date.getMinutes().toString().padStart(2,"0"),
        seconds: date.getSeconds().toString().padStart(2,"0")
      };
      setTime(time);
    }, 1000);
  });

  return (
    <div style={container}>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}

      <div>
        {time.hour}:{time.minutes}:{time.seconds}
      </div>
    </div>
  );
}
