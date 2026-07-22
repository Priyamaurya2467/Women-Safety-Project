import React from 'react'

function Navbar() {
  return (
    <>

    <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
  <div className="mx-auto flex h-16 max-w-[1800px] items-center justify-between px-6 lg:px-8">

    {/* Logo & Search */}
    <div className="flex items-center gap-6">

      <h1 className="text-2xl font-bold text-blue-600">
        SafeHer Hub
      </h1>

      {/* Search */}
      <div className="hidden items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 lg:flex">

        <span className="material-symbols-outlined mr-2 text-gray-500">
          search
        </span>

        <input
          type="text"
          placeholder="Search community..."
          className="w-56 bg-transparent text-sm outline-none placeholder:text-gray-400"
        />

      </div>

    </div>

    {/* Right Side */}
    <div className="flex items-center gap-3">

      {/* Notification */}
      <button className="rounded-full p-2 text-gray-500 transition hover:bg-blue-50 hover:text-blue-600 active:scale-95">
        <span className="material-symbols-outlined">
          notifications
        </span>
      </button>

      {/* Safety */}
      <button className="rounded-full p-2 text-gray-500 transition hover:bg-blue-50 hover:text-blue-600 active:scale-95">
        <span className="material-symbols-outlined">
          shield_with_heart
        </span>
      </button>

      {/* Profile */}
      <div className="h-9 w-9 overflow-hidden rounded-full border border-gray-300">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB104ikxNMTum4IJVfVp7WLL5C-nKAMXNfDim6jowg_qTmVu_PqEdC4lv1EQ5zZ25-dbfSuRecd7aW4ur-7tvXALI5_1MfLdm-2zDfjiMhSyjAID8z6Irew86reQ79ho8VZQZd2fz60UPeBlbyWpmppVXGYpv01VhOQ8zp_jv9uoeRFncotj96GpTiRM7p9hkn8ZQLmyqmGH46uBG4nUNbvRlaA5yXiAliuqbUD54kpR5wTJICJXqWsBYMFN57N13-W_1fqbf__aBWm"
          alt="Profile"
          className="h-full w-full object-cover"
        />
      </div>

    </div>

  </div>
    </header>
    
    </>
  )
}

export default Navbar