import React from 'react'
import MyContext from './MyContext'
import { useContext } from 'react'
const AnotherComponent = () => {
    const value = useContext(MyContext)
    return (
        <div>
            <h3>Another Component - {value} </h3>
        </div>
    )
}

export default AnotherComponent
