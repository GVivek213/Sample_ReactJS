import React from 'react'
import GrandChildOne from './GrandChildOne'
const ChildOne = () => {
  return (
    <div className='child first'>
      <h2>First Child Component</h2>
      <GrandChildOne  />
    </div>
  )
}

export default ChildOne
