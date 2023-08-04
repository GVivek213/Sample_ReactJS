import React from 'react'
import { useRef } from 'react'

const UseRefPractice = () => {
    // const [inputValue, setInputValue] = useState("")
    const inputRef = useRef(null);
    const onSubmit = () => {
        console.log(inputRef.current.value)
        //inputRef.current.focus();
        inputRef.current.value = ""
    }
    return (
        <div>
            <h1>Use Ref</h1>
            <div>
                <input type="text" ref={inputRef} />
            </div>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default UseRefPractice
