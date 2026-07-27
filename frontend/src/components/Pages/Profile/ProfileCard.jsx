import React, { useRef } from "react";
import { Camera ,User,Mail,Phone,Venus,Calendar,Droplets,MapPin} from "lucide-react";
import EmergencyContactCard from "./EmergencyContactCard";
import pfp from "../../../assets/pfp.jpg"
import { useTrustedContacts } from "../../../Context/TrustedContactContext";
function ProfileCard({profile,updateProfile,isEditing,setIsEditing}) {
  const fileInputRef = useRef(null) 
  const handleImageChange = (e) => {
    
    const file = e.target.files[0];

    if(file){

      const imageURL = URL.createObjectURL(file);

      updateProfile({
        
        profileImage: imageURL
      });

    }

  };
  const [contacts,setContacts] = useTrustedContacts()
  return (
    <div className="grid grid-cols-12 gap-6">

      {/* Avatar Card */}

      <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">

        
    <div className="relative w-32 h-32">

      {/* Profile Image Preview */}
      <img
        src={
          profile.profileImage || pfp
          
        }
        alt="profile"
        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
      />


      {/* Hidden File Picker */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />


      {/* Camera Button */}
      <button
        onClick={() => fileInputRef.current.click()}
        className="
          absolute 
          bottom-1 
          right-1 
          w-10 
          h-10 
          rounded-full 
          bg-blue-600 
          text-white 
          flex 
          items-center 
          justify-center 
          border-4 
          border-white 
          hover:bg-blue-700 
          transition
        "
      >

        <Camera size={18}/>

      </button>


    </div>

        <h3 className="text-2xl font-bold text-gray-900">
        {profile.fullName}
        </h3>

        

        <div className="w-full border-t border-gray-200 my-6"></div>

        <div className="w-full flex justify-around">

          <div>

            <p className="text-2xl font-bold text-gray-900">
              12
            </p>

            <p className="text-sm text-gray-500">
              Safe Trips
            </p>

          </div>

          <div>

            <p className="text-2xl font-bold text-gray-900">
              {contacts.length}
            </p>

            <p className="text-sm text-gray-500">
              Contacts
            </p>

          </div>

        </div>

      </div>

     
    <div className="col-span-12 md:col-span-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Full Name
          </label>

          <div className="flex items-center px-4 py-3 border border-gray-300 rounded-lg bg-gray-50">
            <User size={18} className="text-gray-400 mr-3" />

            <input
              type="text"
              value={profile.fullName}
              readOnly
              className="w-full bg-transparent outline-none text-gray-800"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Email Address
          </label>

          <div className="flex items-center px-4 py-3 border border-gray-300 rounded-lg bg-gray-50">
            <Mail size={18} className="text-gray-400 mr-3" />

            <input
              type="email"
              value={profile.email}
              readOnly
              className="w-full bg-transparent outline-none text-gray-800"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Phone Number
          </label>

          <div className="flex items-center px-4 py-3 border border-gray-300 rounded-lg bg-gray-50">
            <Phone size={18} className="text-gray-400 mr-3" />

            <input
              type="text"
              value={profile.phone}
              readOnly
              className="w-full bg-transparent outline-none text-gray-800"
            />
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Gender
          </label>

          <div className="flex items-center px-4 py-3 border rounded-lg bg-gray-50">
            <Venus size={18} className="mr-3 text-gray-400" />
            <input
              type="text"
              value={profile.gender}
              readOnly
              
              className="w-full bg-transparent outline-none"
            />
          </div>

      </div>

      </div>


    <div className="col-span-12 md:col-span-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Full Name
          </label>

          <div className="flex items-center px-4 py-3 border rounded-lg bg-gray-50">
            <User size={18} className="mr-3 text-gray-400" />
            <input
              type="text"
              value={profile.fullName || ""}
              readOnly={!isEditing}
              onChange={(e)=>

                updateProfile({
                  ...profile,
                  fullName: e.target.value
                })
                
              }
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Email Address
          </label>

          <div className="flex items-center px-4 py-3 border rounded-lg bg-gray-50">
            <Mail size={18} className="mr-3 text-gray-400" />
            <input
              type="email"
              value={profile.email || ""}
              readOnly={!isEditing}
              onChange={(e)=>
                updateProfile({
                  ...profile,
                  email: e.target.value
                })
              }
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Phone Number
          </label>

          <div className="flex items-center px-4 py-3 border rounded-lg bg-gray-50">
            <Phone size={18} className="mr-3 text-gray-400" />
            <input
              type="text"
              value={profile.phone||''}
              readOnly={!isEditing}
              onChange={(e)=>
                updateProfile({
                  ...profile,
                  phone: e.target.value
                })
              }
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Gender
          </label>

          <div className="flex items-center px-4 py-3 border rounded-lg bg-gray-50">
            <Venus size={18} className="mr-3 text-gray-400" />
            <input
              type="text"
              value={profile.gender || ""}
              readOnly={!isEditing}
              onChange={(e)=>
                updateProfile({
                  ...profile,
                  gender: e.target.value
                })
              }
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Date of Birth
          </label>

          <div className="flex items-center px-4 py-3 border rounded-lg bg-gray-50">
            <Calendar size={18} className="mr-3 text-gray-400" />
            <input
              type="text"
              value={profile.dob}
              readOnly={!isEditing}
              onChange={(e)=>
                updateProfile({
                  ...profile,
                  dob: e.target.value
                })
              }
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Blood Group */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Blood Group
          </label>

          <div className="flex items-center px-4 py-3 border rounded-lg bg-gray-50">
            <Droplets size={18} className="mr-3 text-red-500" />
            <input
              type="text"
              value={profile.bloodGroup}
              readOnly={!isEditing}
              onChange={(e)=>
                updateProfile({
                  ...profile,
                  bloodGroup: e.target.value
                })
              }
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Home Address
          </label>

          <div className="flex items-start px-4 py-3 border rounded-lg bg-gray-50">
            <MapPin size={18} className="mr-3 mt-1 text-gray-400" />

            <textarea
              rows={3}
              className="w-full bg-transparent outline-none resize-none"
              value={profile.address}

            />
          </div>
        </div>

      </div>
      
    </div>

    <EmergencyContactCard/>

    
 

    </div>
    </div>

    
  );
}

export default ProfileCard;