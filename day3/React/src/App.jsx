import React from 'react'
import Child from './components/Child'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skill from './pages/Skill'
import Login from './pages/Login'
import Counter from './components/Counter'
const App=()=> {
  var items=['boomadevi','abisharebekkal','dharanya','gowri','yogeshwaran'];
  var details={name:'booma',rollno:'23itr016',dept:'IT',age:20}
  return (
      <div>
        <Child name="boomadevi" phoneno="0987654321" dept="IT"/>
        <Home items={items}/>
        <About details={details}/>
        <Contact/>
        <Skill/>
        <Login/>
        <Counter/>

      </div>
  )
}

export default App
