import React, { useState } from 'react'

function DemoUseEffect() {
    const [second, setSecond] = useState(0);
    useEffect(() =>{
        setTimeout(() => setSecond(second + 1),1000) , [second]
    })
  return (
    <div>
      <h1>second: {second}</h1>
    </div>
  )
}

export default DemoUseEffect
