import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Hookes from './pages/Hookes'
import State from './hooks/State'
import Effect from './hooks/Effect'
import Effect2 from './hooks/Effect2'
import Signup from './pages/Signup'
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/hookes' element={<Hookes/>}/>
        <Route path='/state' element={<State/>}/>  
        <Route path='/effect' element={<Effect/>}/>
        <Route path='/effect2' element={<Effect2/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
