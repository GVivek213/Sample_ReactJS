import React, { useState, useMemo } from 'react'

const UseMemoCounterOne = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    const handleCounterOne = () => {
        console.log("Handle Counter One is called");
        setCounterOne(prev => prev + 1)
    }
    const handleCounterTwo = () => {
        console.log("Handle Counter Two is called");
        setCounterTwo(prev => prev + 1)
    }
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])
    return (
        <div>
            <button onClick={handleCounterOne}>CounterOne - {counterOne} </button>
            <span>{isEven ? "Even" : "Odd"}</span><br /><br />
            <button onClick={handleCounterTwo}> Counter Two - {counterTwo}<br /></button>
        </div>
    )
}

export default UseMemoCounterOne
