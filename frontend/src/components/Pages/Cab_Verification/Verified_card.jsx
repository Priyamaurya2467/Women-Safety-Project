import { DotIcon, ShieldCheckIcon, VerifiedIcon } from 'lucide-react'
import React from 'react'

function Verified_card() {
  return (
    <>

   <div className="flex items-center justify-between rounded-xl bg-white p-6 shadow-sm border border-gray-200">
{/* Nam */}
  <div className="flex items-center gap-4">
    
    {/* <!-- Icon --> */}
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
      <span
        className
="material-symbols-outlined text-3xl text-green-600"
        style={{fontVariationSettings:"'FILL' 1"}}
      >
        verified_user
      </span>
    </div>

    {/* <!-- Title --> */}
    <div>
      <h1 className
="text-xl font-bold text-gray-900">
        Vehicle Verification
      </h1>
      <p className
="text-sm text-gray-500">
        Reviewing safety protocols for ride #SH-9821
      </p>
    </div>

  </div>

  {/* <!-- Status Badge --> */}
  <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-100 px-5 py-2">

    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500"></div>

    <span className="text-xs font-bold uppercase tracking-widest text-green-700">
      Verified
    </span>

  </div>

</div>
    
    </>
  )
}

export default Verified_card