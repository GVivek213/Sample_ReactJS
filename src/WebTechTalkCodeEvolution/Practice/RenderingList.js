import React from 'react'

const RenderingList = () => {
    const num = [1, 2, 3, 4, 5, 6, 7, 8]

    // const numList = [];
    // for (let n of num) {
    //     numList.push(<li>{n}</li>);
    // }
    const numList = num.map(numbers => <li key={numbers}>{numbers}</li>)

    return (
        <div>
            <h1>Rendering Lists</h1>
            <ul>
                {numList}
            </ul>
        </div>
    )
}

export default RenderingList
