import React from 'react'
import myStudent from './Student.module.css';

const Student = ({ id, firstName, age, country, deleteStudent }) => {
    return (
        <div>
            <div className={myStudent.student} key={id}>
                <div className={myStudent.name}> {firstName}</div>
                <div className={myStudent.age}>{age}</div>
                <div className={myStudent.country}> {country}</div>
                <div className={myStudent.action}>
                    <button className={myStudent.deleteBtn} onClick={() => deleteStudent(id)}> Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Student
