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
import Ref from './hooks/Ref'
import Reducer from './hooks/Reducer'
import Signup from './pages/Signup'
import Todo from './components/Todo'
function App() {
  var fruits=["Apple","Mango","orange"];
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home items={fruits}/>}/>
        <Route path='/about' element={<About items={fruits}/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/hookes' element={<Hookes/>}/>
        <Route path='/state' element={<State/>}/>  
        <Route path='/effect' element={<Effect/>}/>
        <Route path='/effect2' element={<Effect2/>}/>
        <Route path='/ref' element={<Ref/>}/>
         <Route path='/reducer' element={<Reducer/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </>
  )
}

export default App
