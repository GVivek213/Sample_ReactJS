import React from 'react'

const GlobalFiltering = ({ filter, setGlobalFilter }) => {
    return (
        <span>
            Search :
            <input value={filter} onChange={(e) => setGlobalFilter(e.target.value)} />
        </span>
    )
}

export default GlobalFiltering
