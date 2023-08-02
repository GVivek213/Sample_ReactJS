import React from 'react'
import HOCCounter from './HOCCounter'
function B(props) {
    const {counter , incrementCount , name} = props
  return (
    <div>
      <button onMouseOver={incrementCount}> {name} {counter} </button>
    </div>
  )
}

export default HOCCounter(B,3)
