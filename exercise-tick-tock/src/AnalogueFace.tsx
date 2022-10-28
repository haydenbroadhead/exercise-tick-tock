import React, { useState, useEffect } from 'react';

interface Time {
  seconds: number
}

const circle = {
    width: '50vh',
    height: '50vh',
    background: '#a1a1a1',
    border: '3px solid #000',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export function AnalogueFace() {
  // const [date,  setDate ] = useState(new Date());
  const [time, setTime] = useState<Time>({ seconds: 90})
  
  const secondsLine = {
    height: '3px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    transform: `rotate(${time.seconds}deg)`
  }

  const seconds = {
    height: '3px',
    width: '30%',
    backgroundColor: 'black',
    content: '',
  }

  const spacer = {
    width: '50%'
  }

  useEffect(() => {
    setInterval(() => {
      let date = new Date
      // console.log(time.seconds);
      setTime({
        seconds: (date.getSeconds()*6 + 90)
      })
    }, 1000);
  })

  return (
    <div style={ circle }>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}

      {/* <div style={time}>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div> */}
      {/* <div style={seconds}></div> */}
      <div style={secondsLine}>
        <div style={spacer}></div>
        <div style={seconds}></div>
        {/* <div style={seconds}></div> */}
      </div>
      


    </div>
  );
}