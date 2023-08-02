import React, { useState } from 'react'

const Loading = () => {
    const [isLoading, setLoading] = useState(false)
    const handleLoading = () => {
        setLoading(prevState => !prevState)
    }
    return (
        <div>
            <h1>Usestate with boolean Type</h1>
            <button onClick={handleLoading}>Toggle Loading</button>
            {isLoading ? <p>Loading ...</p> : <h3>Data will display here</h3>}
        </div>
    )
}

export default Loading
