import React from 'react'
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const Parent = () => {

    return (
        <div className='parent'>
            <h3>Hello from Parent</h3>
            <div className='children-container'>
                <ChildOne />
                <ChildTwo />
            </div>
        </div>
    )
}

export default Parent
