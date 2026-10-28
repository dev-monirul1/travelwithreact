import React, { useState } from 'react'

const Test = () => {


const [username, setUsername]= useState('Monirul')

const [value, setValue] = useState(0)
const [passtype, setPasstype]= useState("password")

    const handleIncrement = ()=>{
         
        setValue(value+1);
        
    }
    const handleDecrement = ()=>{
         
        setUsername("Nibir");
        
        
    }
    const handlePassShow = ()=>{
        if (passtype === "password") {
            setPasstype("text")
        }else{
            setPasstype("password")
        }
        
    }




  return (
    <div style={{padding: '100px'}}>
        <div style={{padding: '50px'}}>
            <input type={passtype} placeholder='Enter Your Password' /> <button onClick={handlePassShow}>Show</button>
        </div>
        <button onClick={handleIncrement}>Increment</button>
        <h1 style={{padding: '100px'}}>Count Value: {value} {username}</h1>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Test