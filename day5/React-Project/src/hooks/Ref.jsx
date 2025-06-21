import React,{useRef,useEffect,useState} from 'react'
import '../pages/Skills.css'
const ref = () => {
    const[count,setCount]=useState(0);
    const value=useRef(0);
    useEffect(()=>{
        setTimeout(()=>{
            value.current=value.current+1;
            setCount(count+1)
        },2000)
    })
  return (
    <div className='counter-container'>
        <h1>setCount:{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>refCount:{value.current}</h1>
    </div>
  )
}

export default ref