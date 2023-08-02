import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HocData() {
    const [users, setUsers] = useState([[]])
    const [records, setRecords] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setUsers(res.data)
                setRecords(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    const handleUser = (e) => {
        setRecords(users.filter(f => f.username.toLowerCase().includes(e.target.value).toLowerCase()))
    }
    return (
        <div>
            <input type="text" onChange={handleUser} />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>username</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((res, i) => (
                            <tr key={i}>
                                <td>{res.id}</td>
                                <td>{res.username}</td>
                                <td>{res.email}</td>
                            </tr>
                        )
                        )
                    }

                </tbody>
            </table>

        </div>
    )
}

export default HocData
