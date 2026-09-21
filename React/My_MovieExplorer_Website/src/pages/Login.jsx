import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ handleLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username=="om" && password=="12345") {
      if (handleLogin) {
        handleLogin(username, password)
      }
      alert('Login successful!')
      navigate('/deshboard')
    } else {
      alert('Please enter both correct username and password.')
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Login Page</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">UserName</label>
            <input
              type="text"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-auth w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
