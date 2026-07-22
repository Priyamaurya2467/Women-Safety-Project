import React from 'react'

function Navbar() {
  return (
    <>
    <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white/80 px-4 shadow-sm backdrop-blur-xl md:hidden">
  {/* Logo */}
  <h1 className="text-xl font-bold text-blue-600">
    SafeHer
  </h1>

  {/* Right Icons */}
  <div className="flex items-center space-x-4">

    <span className="material-symbols-outlined cursor-pointer text-2xl text-blue-600 transition hover:text-blue-700">
      notifications
    </span>

    <span className="material-symbols-outlined cursor-pointer text-2xl text-blue-600 transition hover:text-blue-700">
      shield_person
    </span>

  </div>
</header>
    </>
  )
}

export default Navbar