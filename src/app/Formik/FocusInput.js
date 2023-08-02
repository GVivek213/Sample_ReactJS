import React, { useRef, useState } from 'react'

function FocusInput() {
    // const focusRef = useRef("")
    // const cityRef = useRef("")
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [display, setDisplay] = useState([{ name: 'yoge', city: 'Ban' }])
    const handleFocus = (e) => {
        e.preventDefault()
        const data = { name, city }
        const data1 = JSON.parse(JSON.stringify(display));
        data1.push(data)
        setDisplay(data1)

    }

    return (
        <div>
            <form>
                <div >
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="city" id="city" onChange={(e) => setCity(e.target.value)}>City :</label>
                    <input type="text" /><br />
                </div>
                <button onClick={(e) => handleFocus(e)}>Submit</button>
                {display.map((d) => (
                    <ul>
                        <li style={{ color: 'red' }}>{d.name}</li>
                        <li style={{ color: 'red' }}>{d.city}</li>
                    </ul>))}
            </form>
        </div>
    )
}

export default FocusInput
