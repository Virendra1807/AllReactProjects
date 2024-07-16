import React, { useState } from 'react'

function TimeCountdown() {

    const [count, setCount] = useState(0);
    
  return (
    <div>
        <h1>Time CountDown</h1>
        <h3>{count}</h3>
    </div>
  )
}

export default TimeCountdown