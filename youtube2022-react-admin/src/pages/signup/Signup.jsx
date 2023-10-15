import React from 'react';
import '../login/login.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState(''); // Initialize username state
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/users', {
        username, // Use the username state
        email,
        password,
      });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        history('/login')(); // Use history('/login')() to navigate
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  }

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
        <div className="left-form">
          <div className="login-form">
            <h2>Sign Up Now.It's Free.</h2>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <button type="submit" className="login-button" onClick={submit}>
                Sign Up
              </button>
            </form>
            <div style={{ margin: '5px' }}>or sign in with</div>
            <div className="login-top" style={{ margin: '0px' }}>
              <div className="login-connect">
                <div>
                  <img
                    src="https://www.androidpolice.com/wp-content/uploads/2019/12/google-logo-hd.png"
                    alt="logo"
                  />
                </div>
                <div style={{ paddingRight: '55px', paddingTop: '5px' }}>
                  Google
                </div>
              </div>
              <div className="login-connect">
                <div>
                  <img
                    src="https://i.pinimg.com/originals/e9/ae/33/e9ae3302f088c652025e0fb139f1e706.png"
                    alt="logo"
                  />
                </div>
                <div style={{ paddingRight: '55px', paddingTop: '5px' }}>
                  Microsoft
                </div>
              </div>
            </div>
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

export default Signup;
