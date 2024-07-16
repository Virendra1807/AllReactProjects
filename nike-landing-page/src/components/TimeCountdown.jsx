import React, { useEffect, useState } from 'react'

function TimeCountdown() {

    const [count, setCount] = useState(0);

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (count > 0) {
            setTimeout(() => {
                setCount(count - 1)
            }, 1000)
        }

    }, [count])

    return (
        <div>
            <h1>Time CountDown</h1>
            <input type="text" onChange={(e)=> setSeconds(e.target.value)}  />
            <button onClick={()=>setCount(seconds)}>Start</button>
            <h3>{count}</h3>
        </div>
    )
}

export default TimeCountdown