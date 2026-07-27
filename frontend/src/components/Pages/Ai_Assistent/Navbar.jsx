import React, { useContext } from 'react'
import { ProfileContext } from '../../../Context/ProfileContext'
function Navbar() {

  const {profile} = useContext(ProfileContext)
  
  return (
    <>

    <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white/80 px-4 shadow-sm backdrop-blur-xl md:hidden">
    {/* Logo */}
    <h1 className="text-xl font-bold text-blue-600">
      SafeHer
    </h1>

     {/* Right Icons */}
    <div className="flex items-center space-x-4">

      <span className="material-symbols-outlined cursor-pointer text-2xl text-blue-600 transition hover:text-blue-700">
        notifications
      </span>

      <img src={profile.profileImage} alt="profile"
          className='w-10 h-10 rounded-full object-cover'
      
      />

    </div>
    </header>

    </>
  )
}

export default Navbar