import React, { useState } from 'react';

const HOCCounter = (WrappedComponent, num) => {
    function HOCCounter(props) {
        const [counter, setCounter] = useState(0)
        const incrementCount = () => {
            setCounter(prev => prev + num)
        }
        return (
            <div>
                <WrappedComponent counter={counter} incrementCount={incrementCount} {...props}></WrappedComponent>
            </div>
        )
    }
    return HOCCounter;
}

export default HOCCounter
