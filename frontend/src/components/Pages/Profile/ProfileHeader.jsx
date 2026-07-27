import React from 'react'
import { Pencil } from 'lucide-react'

function ProfileHeader({isEditing,setIsEditing}) {
  return (
    <>
    
    

<section className="flex justify-between items-end mb-10">
  <div>
    <h3 className="text-3xl font-bold text-gray-900 mb-1">
      Personal Information
    </h3>

    <p className="text-gray-500 text-base">
      Update your details and manage how your profile appears.
    </p>
  </div>

  <button 
  onClick={()=>setIsEditing(!isEditing)}
  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
    <Pencil size={18} />
   {isEditing ? "Save Changes" : "Edit Profile"}
  </button>
</section></>
  )
}

export default ProfileHeader