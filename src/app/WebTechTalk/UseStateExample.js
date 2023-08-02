import React, { useState } from 'react'

const UseStateExample = () => {
    const [counter, setCounter] = useState(0)
    const increaseCount = () => {
        setCounter(counter => counter + 1)
    }
    const decreaseCount = () => {
        setCounter(counter => counter - 1)
    }
    const resetCount = () => {
        setCounter(0)
    }
    return (
        <div style={{ marginLeft: "30px" }}>
            Counter value -  {counter}
            <div style={{ marginLeft: "30px" }}>
                <button onClick={increaseCount} >Increase</button>
                <button onClick={decreaseCount} style={{ marginLeft: "30px" }}>Decresement</button>
                <button onClick={resetCount} style={{ marginLeft: "30px" }}>Reset</button>
            </div>
        </div>
    )
}

export default UseStateExample
