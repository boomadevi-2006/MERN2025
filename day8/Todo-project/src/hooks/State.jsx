import React, {useState} from 'react'
import '../pages/Skills.css'
const State = () => {
    const [Count,setCount]=useState(0)
    //Functions Using UseState
        // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(Count+1);
    //     },0.1)
    // },[Count])
    const Increment = () =>{
        setCount(Count+1)
    }
    const Decrement = () =>{
        setCount(Count-1)
    }
    const Reset = () =>{
        setCount(0)
    }
  return (
    
    <div className='counter-container'>
        <h2>Number: {Count}</h2>

        <button onClick={Increment}>+</button>
                <button onClick={Reset}>Reset</button>
        <button onClick={Decrement}>-</button>
    </div>
  )
}

export default State