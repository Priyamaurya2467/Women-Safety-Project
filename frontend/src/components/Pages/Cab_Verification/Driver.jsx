import { CheckCircle, CheckCircleIcon , Star} from 'lucide-react'
import React from 'react'

function Driver() {
    
  return (
    <>

    <div>

        {/* Profile */}
        <div className='flex flex-col items-center gap-3' >

            <div className='w-25 h-25 bg-red-700 rounded-full border-4 border-gray-400'>
                <CheckCircleIcon className='position relative left-19 top-15 bg-green-900 p-1 h-9 rounded-xl  text-white' />

            </div>

        
            <h2 className='text-xl font-semibold'>Marcus Aris</h2>
            <p className='flex justify-center items-center  gap-2 font-medium text-red-700 text-sm'> <Star className='fill-red-700' size={12}/> 4.98 (2, 450+ rides )</p>

        </div>



        <div className='flex flex-col gap-4 py-1'>

            {/* Experience */}
            <div className='flex justify-between'>
                <p className='text-gray-500'>Experience</p>
                <p className='text-m font-bold'>8 Years</p>
            </div>

            <hr className='text-gray-50'/>

            {/* Experience */}
            <div className='flex justify-between'>
                <p className='text-gray-500'>Background Check</p>
                <p className='text-xs font-bold text-green-900 bg-gray-100 px-2 py-1 rounded-md'>PASSED</p>
            </div>
            
             <hr className='text-gray-50'/>
            {/* Background Check */}
            <div className='flex justify-between'>
                <p className='text-gray-500'>Identity Match</p>
                <p className='font-bold text-green-800'>100% Match</p>
            </div>

            {/* Identity Match */}
            <div>
                <p></p>
                <p></p>
            </div>

            
        </div>

    </div>

    
    </>
  )
}

export default Driver