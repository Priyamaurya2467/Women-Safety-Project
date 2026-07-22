import React from 'react'

function Minimal() {
  return (
    <>

    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
    Community Pulse
  </p>

  <div className="mb-2 flex items-end justify-between">
    <span className="text-4xl font-bold text-blue-600">
      98%
    </span>

    <span className="text-sm text-gray-500">
      Verified Safety Score
    </span>
  </div>

  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
    <div className="h-full w-[98%] rounded-full bg-blue-600"></div>
  </div>
</div>
    
    
    </>
  )
}

export default Minimal