import React, { useEffect, useRef, useState } from 'react'

function UseRefTapas() {

  const [value, setValue] = useState()
  const inputElemRef = useRef()
  const cityRef = useRef()
  const handleSubmit = () => {
   let name = inputElemRef.current.value;
    let city = cityRef.current.value;
  }
  return (
    <div>
      <div>
        <input type="text" name="name" ref={inputElemRef} /><br />
        <input type="text" name=" city " ref={cityRef} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {/* {value.map(data => <li>{data.value}</li>)} */}
    </div>
  )
}

export default UseRefTapas
