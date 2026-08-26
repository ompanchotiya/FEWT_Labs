import React, { useState } from 'react'
import C from './C'

function B(props) {
    const [input, setInput] = useState("")
  return (
    <>
      <input type="text" value={input}
      onChange={(e)=>{setInput(e.target.value)} }/>

      <button onClick={()=>{props.setName(input)}}>setName</button>

      <C name={props.name}/>
    </>
  )
}

export default B
