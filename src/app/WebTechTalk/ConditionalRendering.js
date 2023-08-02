import React, { useState } from 'react'
// import myConditional from './ConditionalRendering.module.css'
import ChildComponent from './ChildComponent';


const ConditionalRendering = () => {
    const [boxColor, setBoxColor] = useState("red")
    const [count, setCount] = useState(0)
    console.log("Parent is rendering");
    // const renderElement = () => {
    //     if (boxColor === "red") {
    //         return <div className={myConditional.redBox}></div>
    //     }
    //     else {
    //         return <div className={myConditional.greenBox}></div>
    //     }
    // }
    // const renderElement = () => {
    //     return boxColor === "red" ? (
    //         <div className={myConditional.redBox}></div>
    //     ) : (<div className={myConditional.greenBox}></div>)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const city = e.target.city.value;
        console.log(name)
        console.log(city)

    }
    return (
        <div>
            {/* <h1>ConditionalRendering</h1>
            <div className={myConditional.btnContainer}>
                <button className={myConditional.redBtn} onClick={() => setBoxColor("red")}>Red</button>
                <button className={myConditional.greenBtn} onClick={() => setBoxColor("green")}>Green</button>
            </div>
            <div className={myConditional.boxContainer}>
                 {renderElement()} 

                {boxColor === "red" && <div className={myConditional.redBox}></div>}
                {boxColor === "green" && <div className={myConditional.greenBox}></div>}
            </div> */}
            {/* <form onSubmit={handleSubmit}>
                <input type='text' name="name" placeholder='name' /><br />
                <input type="text" name="City" placeholder='city' /><br />
                <button type= "submit">Submit</button>
            </form> */}
            <div className='parent'>
                <p> Your child - {count} times</p>
                <button onClick={() => setCount(prev => prev + 1)}>Click me</button>
            </div>

            <ChildComponent header={`I am a ${count} child`} />
        </div>
    )
}

export default ConditionalRendering
