import React from 'react'

const About = ({details}) => {
  return (
    <div>
        <center>About</center>
        <h1>Details</h1>
        <h2>Name:{details.name}</h2>
        <h2>Rollno:{details.rollno}</h2>
        <h2>Dept:{details.dept}</h2>
        <h2>Age:{details.age}</h2>
    </div>
  )
}

export default About