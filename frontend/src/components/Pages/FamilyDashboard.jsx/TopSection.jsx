import React from 'react'

function TopSection() {
  return (
    <>

    <section className="mb-8 flex flex-wrap items-center justify-between gap-6">
  <div className="flex flex-wrap gap-4">
    <button className="flex h-12 items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 text-gray-800 transition-all hover:bg-gray-100">
      <span className="material-symbols-outlined text-blue-600">
        person_add
      </span>
      <span className="text-sm font-medium">Add Member</span>
    </button>

    <button className="flex h-12 items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 text-gray-800 transition-all hover:bg-gray-100">
      <span className="material-symbols-outlined text-blue-600">
        grid_view
      </span>
      <span className="text-sm font-medium">Manage Zones</span>
    </button>
  </div>

  <button className="flex h-12 items-center gap-2 rounded-lg bg-violet-600 px-8 font-bold text-white shadow-lg transition-all active:scale-95 hover:bg-violet-700">
    <span className="material-symbols-outlined">sos</span>
    <span>SOS SIGNAL</span>
  </button>
    </section>
    
    </>
  )
}

export default TopSection