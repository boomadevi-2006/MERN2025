import React, { useReducer } from 'react'
import '../pages/Skills.css'
const intitialValue={count:0};
const reducerFunction=(state,action)=>{
  switch(action.type){
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    case "Reset":
      return { count: 0 };
    default:
      return state;
  }
}
const Reducer = () => {
  const[state,dispatch]=useReducer(reducerFunction,intitialValue);

  return (
    <div className='counter-container'>
      <h1>Number:{state.count}</h1>
      <button onClick={()=>dispatch({type:"Decrement"})}>-</button>
      <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
      <button onClick={()=>dispatch({type:"Increment"})}>+</button>


    </div>
  )
}

export default Reducer