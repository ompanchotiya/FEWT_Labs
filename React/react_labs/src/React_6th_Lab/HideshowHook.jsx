import React, { useState } from 'react'

function HideshowHook() {
    const [text, setText] = useState("true");
  return (
    <div>
      {text && <h1>Hello World</h1>}

      {text && <button onClick={()=>setText("")}>hide</button>}
      {!text && <button onClick={()=>setText("Hello World")}>show</button>}
    </div>
  )
}

export default HideshowHook
