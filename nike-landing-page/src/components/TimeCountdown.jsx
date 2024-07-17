import React, { useEffect, useState } from 'react'
import AutoBgColorChanger from './AutoBgColorChanger';

function TimeCountdown() {

    const [count, setCount] = useState(0);

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (count > 0) {
            setTimeout(() => {
                setCount(count - 1)
            }, 1000)
            document.getElementById('inputSec').value = "";
        }

    }, [count])

    return (
        <div>
            <h1>Time CountDown</h1>
            <input id='inputSec' type="text" onChange={(e)=> setSeconds(e.target.value)} placeholder='Enter Seconds to Start'  />
            <button onClick={()=>setCount(seconds)}>Start</button>
            <h3>{count}</h3>
            <AutoBgColorChanger count = {count}/>
        </div>
    )
}

export default TimeCountdown