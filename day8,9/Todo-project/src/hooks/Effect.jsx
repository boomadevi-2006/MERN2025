import React, {useState,useEffect} from 'react'
import '../pages/Skills.css'
const Effect = () => {
    const [Count,setCount]=useState(0)
    const [user,setUser]=useState([])
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(Count+1);
    //     },0.1)
    // },[Count])
    //Functions Using UseState
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>(res.json()))
        .then((data)=>setUser(data))
    })
  return (
    
    <div>
        <ol>
            {user.map((data)=>(
                <>
                <p>S.No:{data.id}</p>
                <p>Name:{data.name}</p>
                <p>Email:{data.email}</p>
                <p>Latitude:{data.address.geo.lat}</p>
                </>
                
                ))}
        </ol>
    </div>
  )
}

export default Effect