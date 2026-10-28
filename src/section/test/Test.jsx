import React, { useState } from 'react'

const Test = () => {


const [username, setUsername]= useState('Monirul')

const [value, setValue] = useState(0)

    const handleIncrement = ()=>{
         
        setValue(value+1);
        
    }
    const handleDecrement = ()=>{
         
        setUsername("Nibir");
        
        
    }




  return (
    <div style={{padding: '100px'}}>
        <button onClick={handleIncrement}>Increment</button>
        <h1 style={{padding: '100px'}}>Count Value: {value} {username}</h1>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Test