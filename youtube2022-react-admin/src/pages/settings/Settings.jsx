import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { Settingstab } from '../../components/settingstab/Settingstab'
import './settings.scss'

const Settings = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        <Settingstab/>
      </div>
    </div>
  )
}

export default Settings
