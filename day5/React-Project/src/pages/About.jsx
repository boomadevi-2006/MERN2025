import React from 'react';
import react from '../assets/react.svg'
const About = ({ items }) => {
  return (
    <div>
      <h1>About</h1>
      <h2>List of Fruits</h2>
      <ul>
        {items.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
      <center><img src={react} alt='react' height={'100px'} width={'100px'}></img></center>
    </div>
  );
};

export default About;
