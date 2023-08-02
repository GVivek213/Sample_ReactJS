import React, { useMemo, useState } from 'react'
import UseCard from './UseCard';

const UseMemoHook = () => {
    const userList = [
        { id: 1, name: "Nisha" },
        { id: 2, name: "Suhana" },
        { id: 3, name: "Sneha" },
        { id: 4, name: "Aparna" },
        { id: 5, name: "Gopi" },
    ]

    const [users, setUsers] = useState(userList)
    const [counter, setCounter] = useState(0)
    const displayList = useMemo(() => users.map(user => {
        console.log("Preparing Card")
        return <UseCard key={user.id} data={user} />
    }), [users]);

    const handleClick = () => {
        setCounter(counter => counter + 1)
    }

    return (
        <div>
            <h1>UseMemo Hook</h1>
            {displayList}<br /><br />
            <div>
                Count  - {counter}
            </div> <br /> <br />
            <div>
                <button onClick={handleClick}>Increment</button>
            </div>
        </div>
    )
}

export default UseMemoHook
