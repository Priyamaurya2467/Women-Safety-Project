import React from 'react'

function Evidence() {
  return (
    <>

    <div className="flex gap-4 rounded-xl border border-blue-200 bg-blue-50 p-4">
        <span className="material-symbols-outlined text-blue-600">
            info
        </span>

        <p className="text-[11px] font-medium leading-relaxed text-blue-700">
            <strong>Evidence Collection Active:</strong> All audio and location data
            are being logged on encrypted SafeHer servers.
        </p>
    </div>
    
    </>
  )
}

export default Evidence