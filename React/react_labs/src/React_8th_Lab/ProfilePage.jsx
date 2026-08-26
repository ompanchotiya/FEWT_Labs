import React from 'react'

function ProfilePage({currentuser = "currentuser" , handleLogout = "handleLogout" , handlePassword = "handlePassword"}) {
  return (
    <div>
      <h1>This is Profile Page</h1>

      <h1>userName : {currentuser}</h1>

      <button onClick={handleLogout}>Logout</button>

      <button onClick={handlePassword}>changePassword</button>
    </div>
  )
}

export default ProfilePage
