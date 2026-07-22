import { HelpCircle, Search } from 'lucide-react'
import React from 'react'
import { MdNotificationAdd } from 'react-icons/md'

function Navbar() {
  return (

    <header
  className="fixed top-0 left-0 right-0 z-40 h-16 border-b border-gray-200 bg-white/80 backdrop-blur-xl dark:border-gray-100 dark:bg-gray-100/80"
>
  <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">

 
    <div className="flex items-center gap-3">
      <h1 className="text-2xl font-bold text-blue-700">
        SafeHer
      </h1>
    </div>

    {/* <!-- Right Section --> */}
    <div className="flex items-center gap-6">

      {/* <!-- Search --> */}
      <div
        className="flex items-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-4 py-2"
      >
        <span className="material-symbols-outlined text-gray-500 text-[20px]">
          search
        </span>

        <input
          type="text"
          placeholder="Search trips..."
          className="w-48 bg-transparent text-sm outline-none placeholder:text-gray-500 dark:text-white"
        />
      </div>

      {/* <!-- Icons --> */}
      <div className="flex items-center gap-4">

        <button
          className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <span className="material-symbols-outlined text-black">notifications</span>
        </button>

        <button
          className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <span className="material-symbols-outlined text-black">help</span>
        </button>
{/* 
        <!-- Profile --> */}
        <div
          className="h-9 w-9 overflow-hidden rounded-full border border-gray-300 dark:border-gray-700"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyb4xX1L-oka1zeUDkzqBVwH-ntupEoRRN8f80_39az8oUG6Df25o-Sfkok6N9cEGv_-cilLOvewVaPy2b_kdGHyp1EUUa2p-AiISCBVNjH7B-Qv6Slyq5HO7TAMKVB1X2O8RWxpPTntMF38qb-DbVLjcwL4PGDMBLMDSH4_-4W0zwvLJylkLW-fYwY4A-S_rf0mx3zYT7f1Tlfg2a6JWE7GLzbP3d-oKvDc9qmmb9bqc1oLfSXbVG-yGNNmLgkCJzoC4oBqFaScQl"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </div>

  </div>
</header>
    
  )
}

export default Navbar