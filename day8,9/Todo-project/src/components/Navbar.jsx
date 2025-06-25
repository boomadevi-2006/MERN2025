import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='brand'>BOOMADEVI</div>
        <div className='nav-links'>
          <Link to='/home' className='link'>Home</Link>
          <Link to='/about' className='link'>About</Link>
          <Link to='/todo' className='link'>Todo</Link>
          <Link to='/skills' className='link'>Skills</Link>
          <Link to='/hookes' className='link'>Hookes</Link>
          <Link to='/contact' className='link'>Contact</Link>
          <Link to='/signup' className='link'>Signup</Link>

          <Link to='/login' className='link'>Login</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
