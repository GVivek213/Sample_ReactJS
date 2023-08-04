import React, { useState } from 'react'

function Counter() {

  const [counter, setCounter] = useState(0)


  const increment = () => {
    setCounter(counter + 1)
  }

  const asyncIncrement = () => {
    setTimeout(() => {
      setCounter(counter + 1)
    }, 3000)

  }
  return (
    <div>
      <p>Counter - {counter} </p>
      <button onClick={increment}>Increment</button>
      <button onClick={asyncIncrement}>Async Button</button>
    </div>
  )
}

export default Counter
