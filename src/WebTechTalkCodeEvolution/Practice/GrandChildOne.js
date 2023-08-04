import React from 'react'
import MyContext from './MyContext'
import { useContext } from 'react'

const GrandChildOne = () => {
 const [isSubscribed, setIsSubscribed] = useContext(MyContext)
  return (
    <div className='grandchild first'>
      <h3>Grand Child One Component</h3>
      <button onClick={() => setIsSubscribed(true)}>Subscribe</button>
    </div>
  )
}

export default GrandChildOne
