import React from 'react'

function Information() {
  return (
    <>
    
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

  {/* Family Notified */}
  <div className="flex items-center gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">

    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
      <span className="material-symbols-outlined">
        family_restroom
      </span>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-900">
        Family Notified
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        Trusted contacts are viewing your live path.
      </p>
    </div>

  </div>

  {/* Safe Haven */}
  <div className="flex items-center gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">

    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
      <span
        className="material-symbols-outlined"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        shield_moon
      </span>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-900">
        Safe Haven Mode
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        Nearby verified secure zones identified on route.
      </p>
    </div>

  </div>

    </div>
    
    </>
  )
}

export default Information