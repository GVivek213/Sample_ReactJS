import React from 'react'
import GrandChildTwo from './GrandChildTwo'
const ChildTwo = () => {
    return (
        <div className='child second'>
            <h2>Second Child Component</h2>
            <GrandChildTwo />
        </div>
    )
}

export default ChildTwo
