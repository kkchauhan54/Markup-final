import React, { useContext, useEffect, useState } from "react";
import "./login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Link from "antd/es/typography/Link";
import { MyContext } from "../../App";

const Login = ({ logged, setLogged }) => {
  const navigate = useNavigate();
  const { currentImg } = useContext(MyContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submit(e) {
    e.preventDefault(); 
    axios
      .post(
        "http://localhost:8000/api/users/logIn",
        { email, password },
        {
          message: "login succesfull",
          method: "post",
        }
      )
      .then((response) => {
        // handle successful login
        localStorage.setItem("token", response.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        setLogged(true);
        navigate("/");
        console.log(response.data);
      })
      .catch((error) => {
        // handle login failure
        // setError('Invalid email or password.');
        console.error("Error logging in:", error);
      });
  }

  return (
    <div className="login-container">
      <div className="left-half">
        <div className="login-top">
          <a href="/">
            <img src="images/logo.png" alt="Logo" className="logo" />
          </a>
          <a href="/signup">
            <button
              className="login-button"
              style={{
                width: '7vw',
                backgroundColor: '#f1f5f8',
                border: '2px solid black',
                color: 'black',
              }}
            >
              Sign Up
            </button>
          </a>
        </div>
        <div className="left-form">
          <div className="login-form">
            <h2>Sign In</h2>
            <form>
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
                Sign In
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
            <a href="/forget-pass" style={{ textDecoration: 'none' }}>
              Forget your Password?
            </a>
          </div>
        </div>
      </div>
      <div className="right-half">
        {/* Background Image */}
        <img src="images/phototo.webp" alt="Background" />
      </div>
    </div>
  )
};

export default Login;
