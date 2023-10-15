import React from 'react'
import "./settingstab.scss"

export const Settingstab = () => {
  return (
    <div className="SettingsTab">
      <span>Settings</span>
      <div className="settingcontainer">
        <div className="settingtop">
          <button>Workspace</button>
          <hr />
        </div>
        <div className="settingdown">
          <form className="name">
            <label htmlFor="searchQuery"> Workspace Name </label>
            <div className="namein">
              <div className="search-go">
                <input type="text" placeholder="Enter New Workspace Name" />
                <button>Update</button>
              </div>
            </div>
          </form>
          <form className="url">
            <label htmlFor="searchQuery">Workspace URL </label>
            <div className="urlin">
              <div className="search-go">
                <input type="text" placeholder="Enter New Workspace URL" />
                <button>Update</button>
              </div>
            </div>
          </form>
          <div className="submitlogo">
            <label htmlFor="submit">Workspace Icon</label>
            <div className="iconin">
              <img src="images/logo.png" alt="your logo" />
              <button className="icon">Upload New Icon</button>
            </div>
          </div>
          <hr />
        </div>
        <div className="settingfoot">
          <span>Delete Your Workspace</span>
          <button>Delete Your Workspace</button>
        </div>
      </div>
    </div>
  )
}
