import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';
const CakeView = () => {
  const cakeView = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of cakes - {cakeView} </h2>
      <button style={{ marginLeft: '40px' }} onClick={() => dispatch(ordered())}>Order Cake</button>
      <button style={{ marginLeft: '40px' }} onClick={() => dispatch(restocked(1))}>Restock Cakes</button>
    </div>
  )
}

export default CakeView