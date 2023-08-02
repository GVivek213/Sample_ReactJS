import React from 'react'
import HOCCounter from './HOCCounter';
function A(props) {
    //const { counter, incrementCount, name } = props
    
    return (
        <div>
            <button onClick={incrementCount}>{} {counter} </button>
        </div>
    )
}

export default HOCCounter(A, 5)
