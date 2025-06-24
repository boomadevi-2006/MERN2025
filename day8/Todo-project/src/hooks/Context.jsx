import React,{createContext} from 'react'

const Context = createContext();
export const UserContext =({children})=>{
    const user ={name:"Boomadevi",phno:"0987654321"}
  return (
    <Context.Provider value={user}>
        {children}
    </Context.Provider>
  )
}

export default Context