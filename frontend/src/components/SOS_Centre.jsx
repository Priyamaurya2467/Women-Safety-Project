import React from 'react'
import { Star } from 'lucide-react'
function SOS_Centre() {
  return (
    <>
    <div className='min-h-screen'>
        <nav>
            <h1>SafeHer</h1>
        </nav>

        <div className='h-10 border-1 flex text-xs '>
            <Star/>
            <h2>EMERGENCY IN PROGRESS <span>LIVE</span></h2>
            <p>PROTOCOL SH-911 • SECURE CHANNEL</p>

            00:19:31
            <p>TIME ELAPSED</p>
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