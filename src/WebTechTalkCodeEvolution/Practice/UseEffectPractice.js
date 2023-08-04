import React from 'react'
import { useEffect, useState } from 'react'

const UseEffectPractice = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Fetch from Database")
    }, [count])

    const increment = () => {
        console.log("Increment is called")
        setCount(prev => prev + 1)
    }
    return (
        <div>
            <h1>Use Effect hook</h1>
            Count - {count}<br />
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default UseEffectPractice
