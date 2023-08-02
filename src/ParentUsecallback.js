import React, { useState, useCallback } from 'react'
import Title from './app/Title'
import Count from './app/Count'
import Button from './app/Button'
function ParentUsecallback() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    },[salary])

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}> Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}> Increment Salary</Button>

        </div>
    )
}

export default ParentUsecallback
