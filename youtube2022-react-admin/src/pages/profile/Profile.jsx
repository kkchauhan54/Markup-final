import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { ProfileTab } from '../../components/profiletab/profiletab'
import './Profile.scss'

const Profile = () => {
  return (
    <div className="home-profile">
      <Sidebar />
      <div className="homeContainer-profile">
        <Navbar/>
        <ProfileTab/>
      </div>
    </div>
  )
}

export default Profile
