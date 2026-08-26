import React, { useState } from 'react'
import Deshboard from './Deshboard';
import LoginPage from './LoginPage';
import Newpassword from './Newpassword';

function AppContent() {
    const [currentuser , setCurrentuser] = useState(null);
    const handleLogin = (user) => {
        setCurrentuser(user);
    }
    const handleLogout = () => {
        setCurrentuser(null);
    }
    const handlePassword = () => {
        <Newpassword/>
    }
  return (
    <div>
      {currentuser ? (<Deshboard currentuser={currentuser} handleLogout={handleLogout}/>) : (<LoginPage handleLogin={handleLogin}/>) }
    </div>
  )
}

export default AppContent
