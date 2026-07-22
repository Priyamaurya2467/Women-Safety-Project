import React from 'react'

function Status_card() {
  return (
    <>

    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
  <div className="flex flex-col md:flex-row">

    {/* Left Section */}
    <div className="flex flex-1 flex-col justify-between p-6">

      <div>
        {/* Status Badges */}
        <div className="mb-6 flex flex-wrap items-center gap-3">

          <span className="flex items-center gap-2 rounded-lg bg-blue-100 text-xs px-3 py-1 text-sm font-semibold text-blue-600">
            <span
              className="material-symbols-outlined animate-pulse text-xs"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              radar
            </span>
            Active Monitoring
          </span>

          <span className="rounded-lg bg-green-100 text-xs px-3 py-1 text-sm font-semibold text-green-600">
            Safety Level: High
          </span>

        </div>

        {/* Destination */}
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Grand Central Terminal
        </h2>

        <p className="mb-8 text-sm text-gray-500">
          ETA: 12:42 PM (14 mins remaining)
        </p>

        {/* Information */}
        <div className="space-y-6">

          {/* Route */}
          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <span className="material-symbols-outlined">
                route
              </span>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Route Status
              </p>

              <p className="font-semibold text-xs text-gray-900">
                Nominal
                <span className="ml-2 font-normal text-gray-500">
                  (AI monitored)
                </span>
              </p>
            </div>

          </div>

          {/* Battery */}
          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                battery_horiz_075
              </span>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Device Health
              </p>

              <div className="flex items-center gap-3">

                <p className="font-semibold text-gray-900 text-sm">
                  84% Battery
                </p>

                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <span className="material-symbols-outlined text-base">
                    5g
                  </span>
                  Excellent
                </span>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap text-xs gap-4">

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-blue-700 active:scale-95">

          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            share
          </span>

          Share Live
        </button>

        <button className="rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 hover:bg-gray-100 active:scale-95">
          Request Check-in
        </button>

        <button className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white shadow hover:bg-red-700 active:scale-95">

          <span className="material-symbols-outlined">
            emergency
          </span>

          SOS
        </button>

      </div>

    </div>

    {/* Right Section */}
    <div className="relative h-72 w-full overflow-hidden bg-gray-100 md:h-auto md:w-96">

      {/* Map */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBO_32FWaNFgcrihbTUGdMmppImQp3ZQGCdxoYPL_dECjEHu_V0px57cZ2GRsOXGVK6kme0EsAd3albBe2ZTI7_IrULCvMzCJxkMmUk8QsDV4n5yLuKLfGQW6OvhnOVlv-HxfyE8lsyMV4SK-cag-I_D-7NSw5BS5TSMLzJRM_kSZhyoosB9j6fq1A6OhMjarMhaXj9hMZJTP9SiXs1RHZfvZijN4xCMeqdzDaWKcUZRDTnCmF9ygWbjFHYrgM-AaISyXWC8LF2Ns83')",
        }}
      />

      {/* Controls */}
      <div className="absolute right-4 top-4 flex flex-col gap-2">

        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow hover:text-blue-600">
          <span className="material-symbols-outlined">
            fullscreen
          </span>
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow hover:text-blue-600">
          <span className="material-symbols-outlined">
            my_location
          </span>
        </button>

      </div>

      {/* Current Location */}
      <div className="absolute bottom-4 left-4 rounded-xl border border-white/50 bg-white/90 p-3 shadow backdrop-blur">

        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Current Location
        </p>

        <p className="font-semibold text-gray-900">
          3rd Ave &amp; E 44th St
        </p>

      </div>

    </div>

  </div>
    </div>


    
    
    </>
  )
}

export default Status_card