import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout({ user, handleLogout }) {
  return (
    <div className="layout-container">
      <Navbar user={user} handleLogout={handleLogout} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
