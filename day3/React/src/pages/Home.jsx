import React from 'react'

const Home = ({items}) => {
  return (
    <div>
        <center>Home</center>
        <h1>list of names:</h1>
        <ol>
            {items.map((names)=><li>{names}</li>)}
        </ol>
    </div>
  )
}

export default Home