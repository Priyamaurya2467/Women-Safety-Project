import React from 'react'

function VerifyCab() {
  return (
    <>
    
    <div className="col-span-12 lg:col-span-4 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">

  {/* Header */}
  <div className="flex items-center space-x-4">
    <div className="w-10 h-10 bg-gray-100 text-indigo-600 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">
        taxi_alert
      </span>
    </div>

    <h3 className="text-lg font-bold text-gray-900">
      Verify Cab
    </h3>
  </div>

  {/* Description */}
  <p className="text-sm text-gray-500">
    Instant driver record and license plate verification.
  </p>

  {/* Input & Button */}
  <div className="space-y-3">

    <input
      type="text"
      placeholder="Enter license plate (e.g. MH 01 AA 1234)"
      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
    />

    <button className="w-full py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-bold hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center space-x-2">
      <span className="material-symbols-outlined text-[20px]">
        search
      </span>

      <span>Verify Details</span>
    </button>

  </div>

</div>
    
    </>
  )
}

export default VerifyCab