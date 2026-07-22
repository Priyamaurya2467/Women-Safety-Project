import React from 'react'

function Left_content() {
  return (
    <>
    
    <div className="space-y-8 lg:col-span-8">

  {/* Header */}
  <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-start">

    <div className="max-w-2xl">
      <h2 className="mb-2 text-3xl font-bold text-gray-900">
        Community Safety Feed
      </h2>

      <p className="text-gray-600">
        Real-time updates and safety reports from verified community members in
        your vicinity. Stay informed, stay safe.
      </p>
    </div>

    <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-blue-700 active:scale-95">
      <span className="material-symbols-outlined text-xl">
        add_circle
      </span>
      Update Status
    </button>

  </div>

  {/* Feed */}
  <div className="space-y-6">

    {/* ===================== POST 1 ===================== */}
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      <div className="mb-5 flex items-start justify-between">

        <div className="flex items-center gap-3">

          <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>

            Verified
          </span>

          <span className="text-sm text-gray-500">
            12 minutes ago
          </span>

        </div>

        <button className="text-gray-500 transition hover:text-blue-600">
          <span className="material-symbols-outlined">
            more_horiz
          </span>
        </button>

      </div>

      <p className="mb-6 leading-7 text-gray-700">
        Increased lighting has been installed near the Main Street subway
        entrance. The area is now significantly brighter during evening hours.
        Community monitors are present.
      </p>

      <div className="flex items-center gap-8 text-gray-500">

        <button className="flex items-center gap-2 transition hover:text-blue-600">
          <span className="material-symbols-outlined">
            thumb_up
          </span>
          <span>24</span>
        </button>

        <button className="flex items-center gap-2 transition hover:text-blue-600">
          <span className="material-symbols-outlined">
            chat_bubble
          </span>
          <span>3</span>
        </button>

      </div>

    </div>

    {/* ===================== POST 2 ===================== */}

    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      <div className="mb-5 flex items-center gap-3">

        <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

          <span
            className="material-symbols-outlined text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>

          Verified
        </span>

        <span className="text-sm text-gray-500">
          45 minutes ago
        </span>

      </div>

      <p className="mb-5 leading-7 text-gray-700">
        Volunteer walk-home group active tonight at the University Quad starting
        at 8 PM. Join the group if you need a safe escort across campus.
      </p>

      <div className="mb-5 overflow-hidden rounded-xl border border-gray-200">

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx9aVMT4EqeJT6CGbWKM2BSbyhHvZtEYERNP4H1DbCxiK4K64AEFtTu7wzXLyiqCRJUSewDFWiwqnfdr3fdTORUm5MIvzqPSUPIqEvqAFo6a6_kkgFhx0SAGShck-XkIOLjEYgCrKRVjHRDhmhkeRzfE-5wJYP1no0Jtn3CFEAtpbi-xUZY6anIn728_suT8pGPnK0FZFN1lYf6MpsRvzUbtXbaPBP0Sm0uasYJI77Mllzt2E7LmcJxPX1xRDNgVYmzNWq9QBrGNHN"
          alt="Community Safety"
          className="h-60 w-full object-cover"
        />

      </div>

      <div className="flex items-center gap-8 text-gray-500">

        <button className="flex items-center gap-2 transition hover:text-blue-600">
          <span className="material-symbols-outlined">
            thumb_up
          </span>
          <span>56</span>
        </button>

        <button className="flex items-center gap-2 transition hover:text-blue-600">
          <span className="material-symbols-outlined">
            chat_bubble
          </span>
          <span>12</span>
        </button>

      </div>

    </div>

    {/* ===================== POST 3 ===================== */}

    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      <div className="mb-5 flex items-center gap-3">

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          Community Update
        </span>

        <span className="text-sm text-gray-500">
          2 hours ago
        </span>

      </div>

      <p className="leading-7 text-gray-700">
        Reminder: The SafeHer Support line is available 24/7 for anyone feeling
        uncomfortable or needing immediate guidance on local resources.
      </p>

    </div>

  </div>

    </div>

    </>
  )
}

export default Left_content