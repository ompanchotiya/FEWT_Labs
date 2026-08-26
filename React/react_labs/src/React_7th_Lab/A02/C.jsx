import React from 'react'
import D from './D'

function C(props) {
  return (
    <>
    <button onClick={()=>{props.setName(props.input)}}>setName</button>
    
    <D name={props.name}/>
    </>
  )
}

export default C
