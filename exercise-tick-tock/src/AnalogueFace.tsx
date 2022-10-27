import React, { useState, useEffect } from 'react';

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

const time = {
  color: 'black'
}



export function AnalogueFace() {
  const [date,  setDate ] = useState(new Date());
    
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
      console.log(date.getSeconds());
    }, 1000);
  })

  return (
    <div style={ circle }>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}

      <div style={time}>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>
    </div>
  );
}