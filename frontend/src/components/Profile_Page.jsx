import React from 'react'
import Sidebar from './Elements/Sidebar'
import ProfileHeader from './Pages/Profile/ProfileHeader'
import IdentityVerification from './Pages/Profile/IdentityVerification'
import Header from './Pages/Profile/Header'
import AccountPreferences from './Pages/Profile/Account_pref'
import EmergencyContactCard from './Pages/Profile/EmergencyContactCard'
import ProfileCard from './Pages/Profile/ProfileCard'
import { useState , useEffect,useContext } from 'react'

import { getProfile } from '../services/profileApi'
import { ProfileContext } from '../Context/ProfileContext'


function Profile_Page() {
    const {profile,updateProfile} = useContext(ProfileContext)
    const [isEditing , setIsEditing] = useState(false)
    useEffect(()=>{
        fetchProfile();
    },[])


    const fetchProfile = async() => {
        try{
            const res = await getProfile();
            updateProfile(res.data.data);
        }catch(err){
            console.log(err)
        }
    }
    if(!profile){
        return <h2>Loading..</h2>
    }

    const handleImageChange=(e)=>{
        const file = e.target.files[0];
        if(file){
            const imageURL = URL.createObjectURL(file);

            updateProfile({
                
                profileImage: imageURL
            });
        }
    }



  return (
    <>

    <div className="bg-white text-gray-900 text-base font-normal overflow-x-hidden">
        <Sidebar/>

        <main className='ml-64 mt-16 p-8 min-h-screen bg-gray-50'>
            <div className='max-w-4xl mx-auto'>
                <ProfileHeader isEditing={isEditing} setIsEditing={setIsEditing} />
                <ProfileCard profile={profile} updateProfile={updateProfile} isEditing={isEditing} setIsEditing={setIsEditing} />
                
                <IdentityVerification profile={profile}/>
                <Header profile={profile}/>
                <AccountPreferences profile={profile}/>
                
                
                
            </div>

        </main>

    </div>
    
    </>
  )
}

export default Profile_Page