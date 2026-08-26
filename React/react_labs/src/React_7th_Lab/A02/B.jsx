import React, { useState } from 'react'
import C from './C'

function B(props) {
    const [input, setInput] = useState("")
  return (
    <>
      <input type="text" value={input}
      onChange={(e)=>{setInput(e.target.value)} }/>

      

      <C name={props.name} input={input} setName={props.setName}/>
    </>
  )
}

export default B
