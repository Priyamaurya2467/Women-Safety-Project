import { CheckCircle, Shield } from 'lucide-react'
import React from 'react'

function Safety_Protocol() {

    const protocols = [
        
            "Ask the driver to confirm your name before entering the vehicle"
        ,
         
        "Check if the child lock is disengaged from the rear interior."

        ,
        "Ensure the lisence plate matches the one shown in the app.",
    ]
    
    return (
    <>

    <div>
        <p className='flex text-xs font-bold gap-4 '><Shield className='text-blue-800' size={18}/>Safety Protocol Tips </p>

        {protocols.map((protocol,index)=>(
            <p key={index} className='flex gap-5 py-2 justify-center  text-gray-600'><CheckCircle className='text-blue-600' size={15}/>{[protocol]}</p>
        

        ))}       
        
        
    </div>
    
    </>
  )
}

export default Safety_Protocol