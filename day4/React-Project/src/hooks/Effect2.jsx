import React, {useState,useEffect} from 'react'
import '../pages/Skills.css'
const Effect2 = () => {
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
                <p>Username:{data.username}</p>
                <p>Email:{data.email}</p>
                <p>Address:</p>
                <ul>
                <p> Street:{data.address.street} </p>
                <p> Suite:{data.address.suite} </p>
                <p> City:{data.address.city} </p>
                <p>Zipcode:{data.address.zipcode} </p>
                <p>Geo:</p>
                <ul>
                <p>Latitude:{data.address.geo.lat}</p>
                <p>Longitude:{data.address.geo.lng}</p>
                </ul>
                </ul>
                <p>Phone:{data.phone}</p>
                <p>Website:{data.website}</p>
                <p>Company:</p>
                <ul>
                <p>Name:{data.company.name}</p>
                <p>Catchphrase:{data.company.catchphrase}</p>
                <p><p>Bs:{data.company.bs}</p></p>
                </ul>
                <br/>
                </>
                
                ))}
        </ol>
    </div>
  )
}

export default Effect2