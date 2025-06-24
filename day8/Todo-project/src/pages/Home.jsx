import React from 'react'
import About from './About'
const Home = ({items}) => {
  return (
    <div>Home
      <About items={items}/>
    </div>
  )
}

export default Home