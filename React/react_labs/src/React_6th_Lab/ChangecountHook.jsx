import React, { useState } from 'react'

function ChangecountHook() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>count: {count}</h1>

        <button onClick={() => setCount(count + 1)}>Incress Count</button>
        <button onClick={() => setCount(count - 1)}>Decrese Count</button>
        <button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  )
}

export default ChangecountHook;

