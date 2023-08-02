import React, { useEffect, useState } from 'react'

function RandomNumber() {
    const [number, setNumber] = useState()
    useEffect(() => {
        console.log("Inside useEffect")
        const interval = setInterval(() => setNumber(Math.floor(Math.random() * 10)), 4000)

        return () => {
            console.log("Delete useEffect")
            clearInterval(interval);
        }
    })
    return (
        <div>
            Random Number - {number}
        </div>
    )
}

export default RandomNumber
