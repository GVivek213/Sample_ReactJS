import React, { useState } from 'react'

const Theme = () => {
    const [darkTheme, setDarkTheme] = useState(false)

    const theme = {
        darkTheme: {
            backgroundColor: "gray",
            color: "white",
            padding: "20px"
        },
        lightTheme: {
            backgroundColor: "pink",
            color: "white",
            padding: "20px"
        }
    }

    return (
        <>
            Enable Dark Theme :
            <input type="checkbox" onChange={() => setDarkTheme(prevTheme => !prevTheme)} />
            <div style={darkTheme ? theme.darkTheme : theme.lightTheme}>
                <h1>UseState hook in react</h1>
                <p>
                    UseState allows hook to use state in functional components.
                </p>
            </div>
        </>
    )
}

export default Theme
