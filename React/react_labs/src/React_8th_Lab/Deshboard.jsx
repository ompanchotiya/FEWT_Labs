import React from 'react'
import ProfilePage from './ProfilePage'

function Deshboard({currentuser = "currentuser" , handleLogout = "handleLogout"}) {
  return (
    <div>
      <h1>This is DeshBoard Page</h1>

      <ProfilePage currentuser={currentuser} handleLogout={handleLogout}/>
    </div>
  )
}

export default Deshboard
