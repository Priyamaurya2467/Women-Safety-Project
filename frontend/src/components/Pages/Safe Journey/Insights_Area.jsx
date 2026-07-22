import React from 'react'

function Insights_Area() {
  return (
    <>

    <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-6 text-white shadow-xl">

  {/* Content */}
  <div className="relative z-10">

    {/* Header */}
    <div className="mb-5 flex items-center gap-2">
      <span
        className="material-symbols-outlined animate-pulse text-emerald-400"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        psychology
      </span>

      <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
        AI INSIGHT
      </span>
    </div>

    {/* Title */}
    <h3 className="mb-3 text-xl font-bold">
      Environmental Scan
    </h3>

    {/* Description */}
    <p className="leading-7 text-gray-300 text-xs">
      AI has detected standard pedestrian traffic density for this hour.
      Lighting levels at Grand Central are optimal. No unusual activity
      reported by local infrastructure.
    </p>

    {/* Divider */}
    <hr className="my-6 border-gray-700" />

    {/* Footer */}
    <div className="flex items-center justify-between">

      <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
        Threat Probability
      </span>

      <span className="text-lg font-bold text-emerald-400">
        0.02%
      </span>

    </div>

  </div>

  {/* Background Glow */}
  <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />

    </div>

    </>
  )
}

export default Insights_Area