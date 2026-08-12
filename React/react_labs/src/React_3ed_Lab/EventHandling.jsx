import React from 'react'

function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <div>
      <h1>React Event Handling</h1>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );

export default EventHandling
