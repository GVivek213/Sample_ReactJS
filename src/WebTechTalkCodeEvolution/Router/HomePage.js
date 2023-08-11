import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div >
            <h3>Home Page</h3><br /><br />
            <button onClick={() => navigate("order-summary")} className='button-home'>Place Order</button>
        </div>
    )
}

export default HomePage
