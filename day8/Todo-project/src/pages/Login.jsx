import React from 'react'
import { useState } from 'react'
import './Login.css'
const Login = () => {
  const [formData,setFormdata]=useState({
    email:'',
    password:''
  })
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formData)
    setFormdata({
      email:"",
      password:""
    })
  }
  const handleChange=(e)=>{
    setFormdata((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  return (
    <div>
  <form  class="login-container" onSubmit={handleSubmit} >
    <h2>Login</h2>
    <input type="email" size="30" name='email'placeholder="Email" value={formData.email} onChange={handleChange} required /><br></br><br></br>
    <input type="password" size="30" name='password' value={formData.password} placeholder="Password"  onChange={handleChange} required /><br></br><br></br>
    <button type="submit">Login</button>
  </form>

    </div>
  )
}

export default Login