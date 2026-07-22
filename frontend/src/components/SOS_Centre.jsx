import React from 'react'
import { Star } from 'lucide-react'
function SOS_Centre() {
  return (
    <>
    <div className='min-h-screen'>
        <nav>
            <h1>SafeHer</h1>
        </nav>

        <div className='h-15 border-1 flex  items-center justify-between m-4 p-4 p rounded-2xl  shadow  border-gray-400 shadow-[-7px_0_3px_-3px_rgba(255,0,0,1)]'>
            <div className='flex gap-5'>
                <Star className=' w-5 h-8 p-1 rounded-2xl bg-red-100 fill-red-700 text-red-700' size={11}/>
                
                <div>
                <h2 className='font-bold text-xs '>EMERGENCY IN PROGRESS <span className='w-5 h-2 bg-red-600 px-2.5 py-0.5 text-white rounded-xl  '>LIVE</span></h2>
                <h5 className='text-xs text-gray-500 mt-1'>PROTOCOL SH-911 • SECURE CHANNEL</h5>
                </div>

            </div>
            <div>
            <p className='font-semibold'>00:27:49</p>
            <p className='text-xs'>TIME ELAPSED</p>
            </div>
        </div>

        <div class="grid grid-flow-col grid-rows-3 gap-4">
                <div class="row-span-3 ...">01</div>
                <div class="col-span-2 ...">02</div>
                <div class="col-span-2 row-span-2 ...">03</div>
        </div>

    </div>
    </>
  )
}

export default SOS_Centre