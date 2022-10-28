import React, { useState, useEffect } from 'react';

interface Time {
  seconds: number,
  minutes: number,
  hour: number,
  date: string,
  day: string
}

const weekday: Array<string> = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];

const circle: React.CSSProperties = {
  width: '50vh',
  height: '50vh',
  background: '#a1a1a1',
  border: '3px solid #000',
  borderRadius: '50%',
  position: 'relative'
}

const spacer = {
  width: '50%'
}

const date: React.CSSProperties =  { 
  position: 'absolute',
  fontSize: '0.8em',
  borderRadius: '4px',
  top: '43%',
  left: '70%',
  background: 'white',
  color: 'black',
  padding: '3px',
  border: '1px solid black'
}

export function AnalogueFace() {
  // const [date,  setDate ] = useState(new Date());
  const [time, setTime] = useState<Time>({ seconds: 270, minutes: 270, hour: 270, date: '01', day: 'Mon'})
  
  const secondsLine: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    height: '3px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    transform: `rotate(${time.seconds}deg)`
  }

  const seconds = {
    height: '2px',
    width: '50%',
    backgroundColor: 'red',
    content: '',
  }

  const minutesLine: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    height: '3px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    transform: `rotate(${time.minutes}deg)`
  }

  const minutes = {
    height: '3px',
    width: '45%',
    backgroundColor: 'black',
    content: '',
  }

  const hourLine: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    height: 'px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    transform: `rotate(${time.hour}deg)`
  }

  const hour = {
    height: '3px',
    width: '30%',
    backgroundColor: 'black',
    content: '',
  }


  useEffect(() => {
    setInterval(() => {
      let dateObj = new Date
      // console.log(time.seconds);
      setTime({
        seconds: (dateObj.getSeconds()*6 + 270),
        minutes: (dateObj.getMinutes()*6 + 270),
        hour: (dateObj.getHours()*6 + 270),
        date: dateObj.getDate().toString(),
        day: weekday[dateObj.getDay()]
      })
    }, 1000);
  })

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