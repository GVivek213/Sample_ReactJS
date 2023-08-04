import React from 'react'
import { useState } from 'react'
import './ConditionalRenderingPractice.css';

const ConditionalRenderingPractice = () => {
    const [boxColor, setBoxColor] = useState("red")

    return (
        <div>
            <h1>Conditional Rendering</h1>
            <div className='btn-container'>
                <button className={`redBtn ${boxColor === 'red' ? ' active' : null}`} onClick={() => setBoxColor('red')}>Red</button>
                <button className={`greenBtn ${boxColor === 'green' ? 'active' : null}`} onClick={() => setBoxColor('green')}>Green</button>
            </div>
            <div className='box-container'>

                {boxColor === "red" && <div className='redBox'></div>}
                {boxColor === 'green' && <div className='greenBox'></div>}
            </div>
        </div>
    )
}

export default ConditionalRenderingPractice
