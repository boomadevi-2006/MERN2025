import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css'
const Hookes = () => {
  return (
    <div >
      <div className='navbar' style={{backgroundColor:"black", display:"flex",gap:"10px"}}>
        <Link to='/state' className='link'>useState</Link>
        <Link to='/effect'className='link'>useEffect</Link>
        <Link to='/effect2'className='link'>useEffect eg2</Link>
      </div>
    </div>
  )
}

export default Hookes