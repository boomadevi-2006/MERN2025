import React from 'react'

const Child = ({name,phoneno,dept}) => {
  return (
    <div>
        <center>Child</center>
        <h1>Name: {name}</h1>
        <h1>Phoneno:{phoneno}</h1>
        <h1>Dept:{dept}</h1>
        
    </div>
  )
}

export default Child