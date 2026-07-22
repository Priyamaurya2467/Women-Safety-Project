import React from 'react'

function Recents() {
  return (
    <>

    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
  {/* Header */}
  <h3 className="mb-6 text-xl font-bold text-gray-900">
    Journey Log
  </h3>

  {/* Timeline */}
  <div className="space-y-6">

    {/* Item 1 */}
    <div className="flex gap-4">
      <span className="mt-1 w-12 text-xs font-semibold text-gray-500">
        12:28
      </span>

      <div>
        <p className="font-semibold text-gray-900">
          Trip Started
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Leaving office, Lexington Ave.
        </p>
      </div>
    </div>

    {/* Item 2 */}
    <div className="flex gap-4">
      <span className="mt-1 w-12 text-xs font-semibold text-gray-500">
        12:30
      </span>

      <div>
        <p className="font-semibold text-gray-900">
          AI Scan: Optimal
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Baseline environment established.
        </p>
      </div>
    </div>

    {/* Item 3 */}
    <div className="flex gap-4">
      <span className="mt-1 w-12 text-xs font-semibold text-gray-500">
        12:35
      </span>

      <div>
        <p className="font-semibold text-gray-900">
          Check-in Automated
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Confirmed normal movement pattern.
        </p>
      </div>
    </div>

  </div>

  {/* Button */}
  <button className="mt-6 w-full rounded-xl border border-blue-100 bg-blue-50 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-100">
    View Detailed Timeline
  </button>
    </div>
       
    </>
  )
}

export default Recents