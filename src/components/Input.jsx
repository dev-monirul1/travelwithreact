import React from 'react'

const Input = ({type, placeholder, name, id, onchange, className}) => {
  return (
    <input type={type} placeholder={placeholder} name={name} id={id} onchange={onchange} className={className} />
  )
}

export default Input