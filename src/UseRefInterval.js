import React, { useEffect, useRef, useState } from 'react'

const UseRefInterval = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(() => {
        console.log("Interval is calling")
        intervalRef.current = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000)
        return () => {
            console.log("Interval is ended")
            clearInterval(intervalRef.current);
        }
    })

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(intervalRef.current)}> Stop Timer</button>
        </div>
    )
}

export default UseRefInterval
