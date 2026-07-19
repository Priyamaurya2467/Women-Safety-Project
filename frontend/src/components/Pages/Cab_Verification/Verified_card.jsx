import { DotIcon, ShieldCheckIcon, VerifiedIcon } from 'lucide-react'
import React from 'react'

function Verified_card() {
  return (
    <>

    <div className='bg-white min-w-screen h-20 mx-4 rounded-xl'>

        <div className='flex flex-row justify-between items-center p-4' >
            
            <div className='flex gap-4 '>

                <ShieldCheckIcon className='text-white fill-green-800 bg-gray-200 p-2 rounded-4xl' size={45}/>
                <div>
                    <h1 className='text-xl font-semibold'>Vehicle Verification</h1>
                    <p className='text-l font-w600 text-gray-800 '>Reviewing safety protocols for ride #SH-9821</p>
                </div>
            
            </div>
                
            
            <div className='flex bg-green-50 px-4 justify-center items-center rounded-2xl border-1 border-green-800'>
                <DotIcon size={35} className='font-bold text-green-900 transition-transform duration-1000'/> <p className='text-center text-sm font-bold text-green-900 '>VERIFIED</p>
            </div>
            
        </div>

    </div>
    
    </>
  )
}

export default Verified_card