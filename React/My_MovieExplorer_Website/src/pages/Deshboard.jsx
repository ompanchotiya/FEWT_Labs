import React from 'react'
import { useNavigate } from 'react-router-dom'

function Deshboard({ user, password, handleLogout }) {
  const navigate = useNavigate()

  const onLogout = () => {
    if (handleLogout) handleLogout()
    navigate('/login')
  }

  if (!user) {
    return (
      <div className="dashboard-container">
        <div className="auth-card text-center">
          <h2>You are not logged in</h2>
          <p style={{ margin: '16px 0', color: 'var(--text-muted)' }}>Please login to view your dashboard.</p>
          <button onClick={() => navigate('/login')} className="btn btn-primary w-full">
            Go to Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-container">
      <div className="auth-card" style={{ maxWidth: '550px', margin: '40px auto' }}>
        <h1 className="auth-title" style={{ textAlign: 'center', marginBottom: '24px' }}>
          This is Deshboard Page
        </h1>

        <div className="profile-details">
          <div className="profile-info-item">
            <span className="info-label">User Name:</span>
            <span className="info-value">{user}</span>
          </div>

          <div className="profile-info-item">
            <span className="info-label">Password:</span>
            <span className="info-value">{password}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '14px', marginTop: '24px' }}>
          <button onClick={onLogout} className="btn btn-danger" style={{ flex: 1 }}>
            Logout
          </button>
          <button onClick={() => navigate('/')} className="btn btn-primary" style={{ flex: 1 }}>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Deshboard
