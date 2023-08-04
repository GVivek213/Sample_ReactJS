import React from 'react'
import { useState } from 'react'

const WebUseState = () => {
    const [count, setCount] = useState(0)
    const [isSubscribed, setIsSubscribed] = useState(false)

    const increment = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const reset = () => {
        setCount(0)
    }
    const subscribe = () => {
        setIsSubscribed(true)
    }
    return (
        <div >
            Count - {count} <br /><br />
            <button onClick={increment} style={{ marginLeft: "20px" }}  >Increment</button>
            <button onClick={decrement} style={{ marginLeft: "20px" }} >Decrement</button>
            <button onClick={reset} style={{ marginLeft: "20px" }} >Reset</button>
            <button onClick={subscribe} style={{ marginLeft: "20px" }} >Pleasee subscribe</button>
        </div>
    )
}

export default WebUseState
