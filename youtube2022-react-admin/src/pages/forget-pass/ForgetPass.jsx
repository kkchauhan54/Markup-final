import React from 'react'
import '../login/login.scss'

const ForgetPass = () => {
  return (
    <div className="login-container">
      <div className="left-half">
        <div className="login-top">
          <a href="/">
            <img src="images/logo.png" alt="Logo" className="logo" />
          </a>
          <a href="/login">
            <button
              className="login-button"
              style={{
                width: '7vw',
                backgroundColor: '#f1f5f8',
                border: '2px solid black',
                color: 'black',
              }}
            >
              Sign In
            </button>
          </a>
        </div>
        <div className="left-form" style={{ marginTop: '150px' }}>
          <div className="login-form">
            <h2>Forget Password?</h2>
            <div style={{ margin: '5px' }}>
              Enter the email address associated with your account and we will
              send you a link to reset your password.
            </div>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <button type="submit" className="login-button">
                Send Link
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="right-half">
        {/* Background Image */}
        <img src="images/phototo.webp" alt="Background" />
      </div>
    </div>
  )
}

export default ForgetPass
