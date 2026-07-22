import React from 'react'

function User_Status_Card() {
  return (
    <>

    {/* User Information Card */}
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">

    {/* Profile Header */}
    <div className="mb-8 flex items-center gap-4">
        <div className="relative">
        <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE5tKDAce5MtbR7_1EjKuNCxHKUcKSV2hHRM4BQwJo2nBgOBS8VflM1WHHSd-cf7T1rtTh1Xrr3tRtalWfKsON_dpob6DVN2cEX7hI1-Mgxc5fF6tBGoaDCu2bITmG2dJUiNTXwzPJz2-77d_rrq6wn4isty95WcMbFy5esg4u5XFi5OlniPizXRLloZgl9ZoiC67KSZqf5rVHsqKFbyHgs0eAPVilTu_Ld83fO2-Zc6tq-w_bugrnvKhi8LS1oWeMNojLLIiArmi3"
            alt="Maya Rodriguez"
            className="h-16 w-16 rounded-full object-cover ring-2 ring-blue-500 ring-offset-2"
        />

        {/* Online Indicator */}
        <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-500"></span>
        </div>

        <div>
        <h2 className="text-lg font-bold text-gray-900">
            Maya Rodriguez
        </h2>

        <p className="text-xs font-medium text-gray-500">
            ID: SH-10928 • Premium User
        </p>
        </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 gap-3">

        {/* Heart Rate */}
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
        <div className="mb-1 flex items-center gap-1">
            <span
            className="material-symbols-outlined text-sm text-red-500"
            style={{ fontVariationSettings: "'FILL' 1" }}
            >
            favorite
            </span>

            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
            Heart Rate
            </span>
        </div>

        <p className="text-xl font-bold text-gray-900">
            98 <span className="text-xs font-normal">BPM</span>
        </p>
        </div>

        {/* Device Battery */}
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
        <div className="mb-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-blue-600">
            battery_5_bar
            </span>

            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
            Device
            </span>
        </div>

        <p className="text-xl font-bold text-gray-900">
            84%
        </p>
        </div>

        {/* Network */}
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
        <div className="mb-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-gray-500">
            signal_cellular_alt
            </span>

            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
            Network
            </span>
        </div>

        <p className="text-xl font-bold text-gray-900">
            LTE+
        </p>
        </div>

        {/* Accuracy */}
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
        <div className="mb-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-gray-500">
            location_searching
            </span>

            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
            Accuracy
            </span>
        </div>

        <p className="text-xl font-bold text-gray-900">
            ±2m
        </p>
        </div>

    </div>
    </section>

    </>
  )
}

export default User_Status_Card