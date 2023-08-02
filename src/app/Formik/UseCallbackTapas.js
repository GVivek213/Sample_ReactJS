import React, { useState } from 'react'
import './UseCallbackTapas.css'

function UseCallbackTapas() {
    const [color, setColor] = useState('#6d0e0e');

    const getRandomColor = () => {
        const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        return random;
    }
    const changeColor = () => {
        const randomColor = getRandomColor();
        console.log("color is changed ", randomColor)
        setColor(randomColor);
    }
    return (
        <div className="colorizer">
            Colorizer
            <div className="box" style={{ backgroundColor: color }}>
                {color}
            </div>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default UseCallbackTapas
