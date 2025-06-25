import React,{useState} from 'react'
import './Skills.css'
const Skills = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
    <div className='counter-container'>
        <h1>Number: {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>+</button>
    <button onClick={()=>{setCount(0)}}>Reset</button>
    <button onClick={()=>{setCount(count-1)}}>-</button>
    <br></br>
    </div>
    </div>
  )
}


export default Skills