import { CheckCircle, CheckCircleIcon , Star} from 'lucide-react'
import React from 'react'

function Driver() {
    
  return (
    <>

    
  {/* <!-- Driver Card --> */}
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col items-center text-center">

    {/* <!-- Driver Image --> */}
    <div className="relative mb-4">
      <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-gray-100">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8eEk5GaslfMEP9FFYrs8mIB0OLTc2T-RnaQt7QzpPnpkOJcPM60GDFkNiGA0FMNK_coDBaq2sA9yMgRnOftNw-kGfD5rgvsiNRptm02UrWRmp19fy-9in9yX3dcLAa-V5qvt8rxZeVdyzxzqjHn-5DBRTm5lVeeaXqwou556mqOsEt9qEyW7lTEI63aWd5qY68zFzZCiJH68iz5rTV46DOEOTdsHIEtwH6wfb0GGT4ZJLjT90-lEYynJyTICUjk1T3GO49p0qnOcr"
          alt="Driver"
          className="h-full w-full object-cover"
        />
      </div>

      {/* <!-- Verified Badge --> */}
      <div className="absolute bottom-0 right-0 rounded-full border-2 border-white bg-blue-500 p-1 pb-3">
        <span className="material-symbols-outlined text-base text-white">
          check_circle
        </span>
      </div>
    </div>

    {/* <!-- Driver Info --> */}
    <h2 className="text-xl font-bold text-gray-900">
      Marcus Aris
    </h2>

    <div className="mt-1 flex items-center gap-1 text-red-600 fill-red-600">
      <span
        className="material-symbols-outlined text-xs"
        style={{fontVariationSettings:"'FILL' 1"}}
      >
        star
      </span>
      <span className="text-sm font-bold text-red-700">
        4.98 (2,450+ rides)
      </span>
    </div>
{/* 
    <!-- Details --> */}
    <div className="mt-6 w-full space-y-3">

      <div className="flex items-center justify-between border-b border-gray-200 py-3">
        <span className="text-sm text-gray-500">Experience</span>
        <span className="text-sm font-semibold text-gray-900">8 Years</span>
      </div>

      <div className="flex items-center justify-between border-b border-gray-200 py-3">
        <span className="text-sm text-gray-500">Background Check</span>

        <span className="rounded-md bg-green-100 px-2 py-1 text-xs font-bold uppercase text-green-700">
          Passed
        </span>
      </div>

      <div className="flex items-center justify-between py-3">
        <span className="text-sm text-gray-500">Identity Match</span>

        <span className="text-sm font-bold text-green-600">
          100% Match
        </span>
      </div>

    </div>

  </div>

  {/* <!-- Safety Tips --> */}
  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">

    <h3 className="mb-5 flex items-center gap-2 text-base font-semibold text-gray-900">
      <span className="material-symbols-outlined text-blue-600">
        shield
      </span>
      Safety Protocol Tips
    </h3>

    <ul className="space-y-4">

      <li className="flex gap-3">
        <span className="material-symbols-outlined mt-1 text-blue-600">
          check_circle
        </span>

        <p className="text-sm leading-6 text-gray-600">
          Ask the driver to confirm your name before entering the vehicle.
        </p>
      </li>

      <li className="flex gap-3">
        <span className="material-symbols-outlined mt-1 text-blue-600">
          check_circle
        </span>

        <p className="text-sm leading-6 text-gray-600">
          Check if the child lock is disengaged from the rear interior.
        </p>
      </li>

      <li className="flex gap-3">
        <span className="material-symbols-outlined mt-1 text-blue-600">
          check_circle
        </span>

        <p className="text-sm leading-6 text-gray-600">
          Ensure the license plate matches the one shown in the app.
        </p>
      </li>

    </ul>

  </div>



    
    </>
  )
}

export default Driver