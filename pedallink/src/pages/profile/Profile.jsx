import React from 'react'
import Footer from '../../components/common/footer/Footer'
import Header from '../../components/common/header/Header'
import ProfileComponent from './ProfileComponent'
import './Profile.css'
const Profile = () => {
  return (
    <div>
    <div className="fixed w-[100%] z-10 ">
    <Header />
    </div>
    <div className='profile'>
        <ProfileComponent/>
    </div>
    <div className='footer'>
      <Footer/>
    </div>
  </div>
  )
}

export default Profile
