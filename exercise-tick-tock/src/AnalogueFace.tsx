import React, { useState, useEffect } from 'react';

interface Time {
  seconds: number,
  minutes: number,
  hour: number
}

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

export function AnalogueFace() {
  // const [date,  setDate ] = useState(new Date());
  const [time, setTime] = useState<Time>({ seconds: 270, minutes: 270, hour: 270})
  
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
      let date = new Date
      // console.log(time.seconds);
      setTime({
        seconds: (date.getSeconds()*6 + 270),
        minutes: (date.getMinutes()*6 + 270),
        hour: (date.getHours()*6 + 270)
      })
    }, 1000);
  })

  return (
    <div style={ circle }>
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