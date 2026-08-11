import React from 'react'

function Display() {
    const isDisplay = true;

  return (
    <div>
      {/* {isDisplay && <h1>Element displayed</h1>}
      {!isDisplay && <h1>Element not displayed</h1>} */}

      {isDisplay ? (<h1>Element displayed</h1>):(<h1>Element not displayed</h1>)} 
      {ifElse(isDisplay)}
      
    </div>
  )
}
function ifElse({ isDisplay }) {
  if (isDisplay) {
    return <h1>Element displayed</h1>;
  } else {
    return <h1>Element not displayed</h1>;
  }
}

export default Display;
