import React from 'react'

function Header() {
  return (
    <>


    <div className="flex items-center justify-between rounded-xl bg-white p-6 shadow-sm border border-gray-200 mb-5">
{/* Nam */}
    <div className="flex items-center gap-4">
      
      {/* <!-- Icon --> */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
        <span
          className
  ="material-symbols-outlined text-3xl text-red-600"
          style={{fontVariationSettings:"'FILL' 1"}}
        >
          emergency
        </span>
      </div>

      {/* <!-- Title --> */}
      <div>
        <h1 className
  ="text-xl font-bold text-gray-900">
          EMERGENCY IN PROGRESS <span className='bg-red-900 text-white text-xs p-1 rounded-xl'>LIVE</span>
        </h1>
        <p className
  ="text-xs text-gray-500">
          PROTOCOL SH-911 • SECURE CHANNEL
        </p>
      </div>

    </div>

    {/* <!-- Status Badge --> */}
    <div className="flex flex-col items-center px-5 py-2">

     

      <span className="text-2xl font-bold uppercase tracking-widest">
        00:09:36
      </span>
      <p className='text-xs font-medium'>TIME ELAPSED</p>

    </div>

    </div>



    
    
    </>
  )
}

export default Header