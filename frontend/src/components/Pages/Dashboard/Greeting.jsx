import React,{useContext} from 'react'
import { ProfileContext } from '../../../Context/ProfileContext'
function Greeting() {
  console.log(ProfileContext)
   const {profile,updateProfile} = useContext(ProfileContext)
  const value = useContext(ProfileContext);
  console.log(value)
  return (
    <>
    <section className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">
            Welcome back, {profile?.fullName}
        </h1>

        <p className="text-base text-gray-500 opacity-80">
            Your safety is our priority.
        </p>
    </section>
    
    </>
  )
}

export default Greeting