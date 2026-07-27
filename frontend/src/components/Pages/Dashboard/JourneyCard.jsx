import React from 'react'

function JourneyCard() {
  return (
    <>
    <div className="col-span-12 lg:col-span-8 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between overflow-hidden relative group">

  <div className="relative z-10 space-y-6">

    {/* Header */}
    <div className="flex items-center space-x-4">
      <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
        <span className="material-symbols-outlined">
          directions_run
        </span>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900">
        Start a Safe Journey
      </h3>
    </div>

    {/* Description */}
    <p className="text-base text-gray-500 max-w-md">
      Real-time location sharing and automated safety checks for your peace of mind.
    </p>

    {/* Input & Button */}
    <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl">

      <div className="relative w-full">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 opacity-60">
          location_on
        </span>

        <input
          type="text"
          placeholder="Where are you going?"
          className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
        />
      </div>

      <button className="w-full md:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all active:scale-95 shadow-md flex items-center justify-center space-x-2">
        <span>Start</span>
        <span className="material-symbols-outlined">
          chevron_right
        </span>
      </button>

    </div>
  </div>

  {/* Decorative Background */}
  <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
    <span className="material-symbols-outlined text-[240px]">
      shield
    </span>
  </div>

</div>
    
    </>
  )
}

export default JourneyCard