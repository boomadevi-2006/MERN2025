
import React,{useState} from 'react'
const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
        <h1>Number: {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button><br></br>

    </div>
  )
}

export default Counter