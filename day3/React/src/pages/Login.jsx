import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div>
      <center>Login</center>
  <form align="center" onsubmit="alert('Logged in!'); return false;" class="container">
    <h2>Login</h2>
    <input type="email" placeholder="Email" required /><br></br><br></br>
    <input type="password" placeholder="Password" required /><br></br><br></br>
    <button type="submit">Login</button>
  </form>

    </div>
  )
}

export default Login