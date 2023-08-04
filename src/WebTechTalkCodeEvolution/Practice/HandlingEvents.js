import React from 'react'

const HandlingEvents = () => {

    const showAlert = () => {
        alert("Welcome to webtechtalk")
    }
    const onTextChange = (e) => {
        console.log("event Triggered", e.target.value)
    }

    return (
        <div style={{ marginTop: "60px" }}>
            {/* <button onClick={showAlert}>Click Me</button> */}
            <input name="name" onChange={onTextChange} />
        </div>
    )
}

export default HandlingEvents
