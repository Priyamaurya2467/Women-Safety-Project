import React from 'react'

function Live_Safety() {
  return (
    <>

    <div>
  {/* Header */}
  <div className="mb-5 flex items-center justify-between">
    <h3 className="text-xl font-bold text-gray-900">
      Live Safety Map
    </h3>

    <span className="flex items-center gap-2 text-sm font-semibold text-green-600">
      <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
      Live
    </span>
  </div>

  {/* Map Card */}
  <div className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">

    {/* Background Map */}
    <div
      className="h-full w-full bg-cover bg-center grayscale opacity-70 transition duration-300 group-hover:scale-105"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKPJD_fFyF5oSAZXLRHOmLbhWG4i5wF7doF6hlq7gjzCgSxFo_8m_UkKuAlOAqbOsz8kgD9hKapPUWq1l0oWwg54tqaSLoDW3kJJ02JysyZqTVR_WF5Dg7JRgC4WNh-1n816rqm843gKkzLKfV5inlI6h9trwbSiaK4Wmb_0ItKP6zWplhxOPno-p5jYEgTSXVNfTKhHzXAlmQD3o8CgeXouvQibgk3tHoOkqv-daF6UqQG4c2LrrQKcgljefRj6B9kXNE0pNgYJFO')",
      }}
    />

    {/* User Marker */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">

        {/* Pulse */}
        <div className="absolute -inset-4 animate-ping rounded-full bg-blue-500/20" />

        {/* Marker */}
        <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-blue-600 shadow-lg">
          <span
            className="material-symbols-outlined text-sm text-white"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            person_pin_circle
          </span>
        </div>

      </div>
    </div>

    {/* Bottom Info */}
    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/40 bg-white/90 p-3 shadow backdrop-blur">

      <span className="text-sm font-medium text-gray-900">
        Safe Zone: Upper West Side
      </span>

      <span className="material-symbols-outlined text-blue-600">
        chevron_right
      </span>

    </div>

  </div>
</div>
    
    
    </>
  )
}

export default Live_Safety