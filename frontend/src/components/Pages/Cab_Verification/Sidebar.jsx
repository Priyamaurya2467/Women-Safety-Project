import React from 'react'

function Sidebar() {
  return (
    <>

        <nav class="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col border-r border-gray-200 bg-white px-4 py-6 shadow-sm md:flex">
    {/* 
    <!-- Logo --> */}
    <div class="mb-10 flex items-center gap-3 px-4">
        <h1 class="text-2xl font-black text-blue-600">
        SafeHer
        </h1>
    </div>

    {/* <!-- Navigation --> */}
    <div class="flex grow flex-col gap-2">

        {/* <!-- Dashboard --> */}
        <a
        href="#"
        class="flex items-center gap-4 rounded-lg px-4 py-3 text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
        >
        <span class="material-symbols-outlined">dashboard</span>
        <span class="font-medium">Dashboard</span>
        </a>

        {/* <!-- Active --> */}
        <a
        href="#"
        class="translate-x-1 flex items-center gap-4 rounded-lg bg-blue-100 px-4 py-3 font-semibold text-blue-700 transition-transform"
        >
        <span class="material-symbols-outlined">
            emergency_recording
        </span>
        <span>Live Monitoring</span>
        </a>

        {/* <!-- Evidence --> */}
        <a
        href="#"
        class="flex items-center gap-4 rounded-lg px-4 py-3 text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
        >
        <span class="material-symbols-outlined">
            folder_shared
        </span>
        <span class="font-medium">
            Evidence Vault
        </span>
        </a>
    {/* 
        <!-- Family --> */}
        <a
        href="#"
        class="flex items-center gap-4 rounded-lg px-4 py-3 text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
        >
        <span class="material-symbols-outlined">
            family_restroom
        </span>
        <span class="font-medium">
            Family Portal
        </span>
        </a>

        {/* <!-- Analytics --> */}
        <a
        href="#"
        class="flex items-center gap-4 rounded-lg px-4 py-3 text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
        >
        <span class="material-symbols-outlined">
            analytics
        </span>
        <span class="font-medium">
            Analytics
        </span>
        </a>

    </div>

    {/* <!-- Bottom --> */}
    <div class="border-t border-gray-200 pt-6">

        <a
        href="#"
        class="mb-2 flex items-center gap-4 rounded-lg px-4 py-3 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
        >
        <span class="material-symbols-outlined">
            settings
        </span>
        <span class="font-medium">
            Settings
        </span>
        </a>

        <a
        href="#"
        class="flex items-center gap-4 rounded-lg px-4 py-3 text-red-500 transition hover:bg-red-50"
        >
        <span class="material-symbols-outlined">
            logout
        </span>
        <span class="font-medium">
            Logout
        </span>
        </a>

    </div>

        </nav>
    
    
    </>
  )
}

export default Sidebar