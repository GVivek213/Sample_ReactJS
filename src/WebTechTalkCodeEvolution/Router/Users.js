import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active';
    return (
        <div>
            <Link to="/userId">User 1</Link>
            <Link to="/userId">User 2</Link>
            <Link to="/userId">User 3</Link>
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
                <button onClick={() => setSearchParams({})}> Reset Filter</button>
            </div>
            <div>
                {showActiveUsers ? <h2>showActiveUsers</h2> : <h2> showing All users</h2>}
            </div>
        </div>
    )
}

export default Users
