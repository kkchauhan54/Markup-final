import React from 'react'
import './profiletab.scss'

export const ProfileTab = () => {
  return (
    <div className="ProfileTab">
      <span>Profile</span>
      <div className="profilecontainer">
        <div className="profiledown">
          <form className="name-p">
            <label htmlFor="searchQuery"> Your Name</label>
            <div className="namein-p">
              <div className="search-go-p">
                <input type="text" placeholder="Enter Your Name" />
                <button>Update</button>
              </div>
            </div>
          </form>
          <form className="url-p">
            <label htmlFor="searchQuery">Email Address </label>
            <div className="urlin-p">
              <div className="search-go-p">
                <input type="text" placeholder="Enter Your Email" />
                <button>Update</button>
              </div>
            </div>
          </form>
          <form className="pass">
            <label>Password</label>
            <div className="passin">
              <div className="search-go-p">
                <input type="password" placeholder="Enter Your Password" />
                <button>Update</button>
              </div>
            </div>
          </form>
          <hr />
          <div className="submitlogo-p">
            <label htmlFor="submit">Avatar</label>
            <div className="iconin-p">
              <img src="images/logo.png" alt="your logo" />
              <button className="icon">Upload New Icon</button>
            </div>
          </div>
          <hr />
        </div>
        <div className="profilefoot">
          <span>Delete Your Account</span>
          <button>Delete Your Account</button>
        </div>
      </div>
    </div>
  )
}
