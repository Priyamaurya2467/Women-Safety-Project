import React from 'react'

function Verification() {
  return (
    <>

    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

  {/* <!-- Header --> */}
  <div className="flex items-center justify-between border-b border-gray-200 p-6">
    <h3 className="text-xl font-bold text-gray-900">
      Live Verification Chain
    </h3>

    <span className="font-mono text-xs text-gray-500">
      ENCRYPTED END-TO-END
    </span>
  </div>

  {/* <!-- Timeline --> */}
  <div className="space-y-6 p-6">
{/* 
    <!-- Item 1 --> */}
    <div className="flex items-start gap-4">

      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-600">
        <span className="material-symbols-outlined text-[18px] text-white">
          face
        </span>
      </div>

      <div className="grow pt-1">

        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-900">
            Biometric Driver Verification
          </p>

          <span className="text-xs font-bold text-green-600">
            SUCCESS
          </span>
        </div>

        <p className="text-sm text-gray-600">
          Live facial recognition matched with DMV database records from Dec
          2023.
        </p>

      </div>

    </div>

    {/* <!-- Item 2 --> */}
    <div className="relative flex items-start gap-4">

      {/* <!-- Vertical Line --> */}
      <div className="absolute left-4 top-8 bottom-[-24px] w-px bg-gray-300"></div>

      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-600">
        <span className="material-symbols-outlined text-[18px] text-white">
          security
        </span>
      </div>

      <div className="pt-1">

        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-900">
            Vehicle Documentation
          </p>

          <span className="text-xs font-bold text-green-600">
            VALIDATED
          </span>
        </div>

        <p className="text-sm text-gray-600">
          Insurance and commercial permit #CP-887 are active and verified
          through enterprise portal.
        </p>

      </div>

    </div>

    {/* <!-- Item 3 --> */}
    <div className="flex items-start gap-4">

      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-100">
        <div className="h-2 w-2 animate-pulse rounded-full bg-blue-600"></div>
      </div>

      <div className="grow pt-1">

        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-900">
            Geographic Sync
          </p>

          <span className="text-xs font-bold text-blue-600">
            ACTIVE SYNCING...
          </span>
        </div>

        <p className="text-sm text-gray-600">
          Confirming vehicle proximity to your current location (Est. 12
          meters).
        </p>

      </div>

    </div>

    </div>



    </div>
    </>
  )
}

export default Verification