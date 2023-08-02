import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './Icecream';

const IcecreamView = () => {
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    const [value, setValue] = useState(1)
    return (
        <div>
            <h2>Num of Icecreams - {numOfIcecreams} </h2>
            <button style={{ marginLeft: '40px' }} onClick={() => dispatch(ordered())}>Order Icecreams</button>
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <button style={{ marginLeft: '40px' }} onClick={() => dispatch(restocked(value))}>Restock Icecreams</button>

        </div>
    )
}

export default IcecreamView
