import React, { useState } from 'react'

const Test = () => {


const [username, setUsername]= useState('Monirul')

const [value, setValue] = useState(0)
const [passtype, setPasstype]= useState(true)

    const handleIncrement = ()=>{
         
        setValue(value+1);
        
    }
    const handleDecrement = ()=>{
         
        setUsername("Nibir");
        
        
    }
    // const handlePassShow = ()=>{
    //     if (passtype === "password") {
    //         setPasstype("text")
    //     }else{
    //         setPasstype("password")
    //     }
        
    // }

    // const handlePassShow = ()=>{
    //     setPasstype(!passtype)
        
    // }




  return (
    <div style={{padding: '100px'}}>
        {/* <div style={{padding: '50px'}}>
            <input type={`${passtype ? 'password' : 'text'}`} placeholder='Enter Your Password' /> <button onClick={()=>setPasstype(false)}>Show</button>
        </div> */}
        <div style={{padding: '50px'}}>
            <input type={`${passtype ? 'password' : 'text'}`} placeholder='Enter Your Password' /> 
            <button onClick={()=>setPasstype(!passtype)}>{passtype ? 'Show' : 'Hide'}</button>
        </div>
        <button onClick={handleIncrement}>Increment</button>
        <h1 style={{padding: '100px'}}>Count Value: {value} {username}</h1>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Test