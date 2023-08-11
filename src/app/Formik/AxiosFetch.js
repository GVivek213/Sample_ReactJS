import React from 'react'
import { useEffect, useState } from 'react'
import axios from './Axios'

 
const AxiosFetch = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState("")

    const getApi = async () => {
        try {
            const res = await axios.get('/users')
            setData(res.data)
        } catch (error) {
            setError(error.message)
        }

    }
    useEffect(() => {
        getApi();
    }, [])
    return (
        <div className='App'>
            {error !== "" && <h2>{error}</h2>}
            {data.map(d => {
                return (
                    <div key={d.id}>
                        <li>{d.id}</li>
                        <li>{d.name}</li>
                        <li>{d.username}</li>
                    </div>
                )
            })}
        </div>
    )
}

export default AxiosFetch
