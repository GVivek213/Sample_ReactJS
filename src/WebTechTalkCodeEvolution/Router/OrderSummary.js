import React from 'react'
import { useNavigate } from 'react-router-dom'
const OrderSummary = () => {
    const navigate = useNavigate()
    return (
        <div className='element-center'>
            <h3>Order Confirmed</h3>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default OrderSummary
