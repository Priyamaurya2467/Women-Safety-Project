import React from 'react'

function Map() {
  return (
    <>

        {/* Main Map Area */}
        <div className="grid grid-cols-12 gap-6">

  {/* Left Section */}
  <div className="col-span-12 flex flex-col gap-4 lg:col-span-8">

    {/* Map Card */}
    <div className="relative h-[500px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md md:h-[600px]">

      <div
        className="h-full w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGcdfMWZ20mo8X6y1IkOE8tYbQk0TgaFDyJPjifA_x3VZLbMKxNkolgcgu52Re57j7QfwDddF95Zj0YKU7b0i0rz03KDiaeIqhwNjZf-7O9ZVDluVllSp_DIDaT3vI5OZmSz41dc1n62ZUCwO2XdIKuCjrpKeooC4x__Am053dF-lQzXaxevwpDGDFLeW2_zLg2HCjrE45cjaq-ff-1FmqLhkulDgr_LW0UewEp7ai15B868PCRAXPBHUj2m5Jgktt2YfSC7XAiT9O')",
        }}
      />

      {/* User Location */}
      <div className="absolute left-4 top-4 rounded-xl border border-gray-200 bg-white/95 p-4 shadow backdrop-blur">
        <div className="flex items-center gap-3">
          <span
            className="material-symbols-outlined text-blue-600"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            my_location
          </span>

          <div>
            <p className="text-xs font-semibold uppercase text-gray-500">
              User Location
            </p>

            <p className="font-bold text-gray-900">
              40.7128° N, 74.0060° W
            </p>
          </div>
        </div>
      </div>

      {/* ETA */}
      <div className="absolute bottom-4 right-4 rounded-xl border border-gray-200 bg-white/95 p-4 shadow backdrop-blur">
        <div className="flex items-center gap-5">

          <div className="text-center">
            <h2 className="text-3xl font-black text-red-600">3</h2>
            <p className="text-xs uppercase text-gray-500">MIN</p>
          </div>

          <div className="h-10 w-px bg-gray-300" />

          <div>
            <h3 className="font-semibold">
              Unit 402 - Officer Vance
            </h3>

            <p className="text-sm text-gray-500">
              Distance: 0.8 miles
            </p>
          </div>

        </div>
      </div>

    </div>

    {/* Footer Buttons */}
    <div className="grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow sm:grid-cols-2 xl:grid-cols-4">

      <button className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:brightness-110">
        Broadcast
      </button>

      <button className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:brightness-110">
        Dispatch
      </button>

      <button className="rounded-full bg-gray-100 px-6 py-3 font-semibold transition hover:bg-gray-200">
        De-escalate
      </button>

      <button className="rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50">
        Cancel SOS
      </button>

    </div>

  </div>

  {/* Right Section */}
  <div className="col-span-12 flex flex-col gap-4 lg:col-span-4">

    {/* Right side cards go here */}

  </div>

</div>

    </>
  )
}

export default Map