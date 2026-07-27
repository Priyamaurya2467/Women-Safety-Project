import React from 'react'

function Alerts() {
  return (
    <>

    <div className="col-span-12 lg:col-span-4 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col">

  {/* Header */}
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-lg font-bold text-gray-900">
      Recent Alerts
    </h3>

    <a
      href="#"
      className="text-indigo-600 text-sm font-medium hover:underline"
    >
      View All
    </a>
  </div>

  {/* Alerts */}
  <div className="flex-1 space-y-4">

    {/* Alert 1 */}
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
      <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
        <span
          className="material-symbols-outlined text-[20px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
      </div>

      <div className="space-y-1">
        <p className="text-base font-semibold text-gray-900">
          Home Check-in Successful
        </p>

        <p className="text-sm text-gray-500 opacity-70">
          Yesterday, 10:24 PM
        </p>
      </div>
    </div>

    {/* Alert 2 */}
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
      <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
        <span
          className="material-symbols-outlined text-[20px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          info
        </span>
      </div>

      <div className="space-y-1">
        <p className="text-base font-semibold text-gray-900">
          New Safety Route Added
        </p>

        <p className="text-sm text-gray-500 opacity-70">
          Jan 24, 2:15 PM
        </p>
      </div>
    </div>

    {/* Alert 3 */}
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
      <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
        <span
          className="material-symbols-outlined text-[20px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          warning
        </span>
      </div>

      <div className="space-y-1">
        <p className="text-base font-semibold text-gray-900">
          Missed Check-in (Dismissed)
        </p>

        <p className="text-sm text-gray-500 opacity-70">
          Jan 22, 11:05 PM
        </p>
      </div>
    </div>

  </div>

</div>
    
    
    </>
  )
}

export default Alerts