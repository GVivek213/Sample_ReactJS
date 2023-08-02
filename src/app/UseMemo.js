import React ,{useRef}from 'react'

function useMemo() {

    const focusRef = useRef("")
    const handleFocus = () =>{
        focusRef.current.focus();
    }
  return (
    <div>
      <input type ="text" ref={focusRef}/>
      <button onClick={handleFocus}></button>
    </div>
  )
}

export default useMemo
