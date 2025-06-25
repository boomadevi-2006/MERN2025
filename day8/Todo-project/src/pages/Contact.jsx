import React,{useContext} from 'react'
import Context from '../hooks/Context'
const Contact = () => {
  const user=useContext(Context);
  return (
    <div>
    <h1>{user.name}</h1>
    <h1>{user.phno}</h1>
    </div>
  )
}

export default Contact
