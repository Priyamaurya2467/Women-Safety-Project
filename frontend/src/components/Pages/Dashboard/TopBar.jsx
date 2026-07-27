import React, { useContext } from 'react'
import { ProfileContext } from '../../../Context/ProfileContext'

function TopAppBar() {
  const {profile} = useContext(ProfileContext)
  return (
    <>
    
    <header className="w-full h-16 bg-white shadow-sm flex justify-between items-center px-6 lg:px-8 sticky top-0 z-40">

  <div className="flex items-center space-x-4">
    <div className="hidden md:block">
      <h2 className="text-2xl font-bold text-gray-900">
        Live Map
      </h2>
    </div>
  </div>

  <div className="flex items-center space-x-6">

    {/* Notification */}
    <div className="relative group">
      <span className="material-symbols-outlined text-gray-500 cursor-pointer hover:text-indigo-600 transition-colors">
        notifications
      </span>

      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
    </div>


    {/* Profile */}
    <div className="flex items-center space-x-2 cursor-pointer group">

      <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
        <img
      src={profile.profileImage}
      alt="profile"
      className="
        w-10
        h-10
        rounded-full
        object-cover
      "
   />
      </div>

      <span className="text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
        {profile.name}
      </span>

    </div>

  </div>

</header>
    </>
  )
}

export default TopAppBar