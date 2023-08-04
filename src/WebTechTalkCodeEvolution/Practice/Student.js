import React from 'react'

function Student({ name, country, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <h3>Age : {age}</h3>
      <h3>{country}</h3>
    </div>
  )
}

export default Student
