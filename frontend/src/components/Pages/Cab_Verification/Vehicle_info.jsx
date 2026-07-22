import React from 'react'

function Vehicle_info() {
  return (
    <>
    <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

  <div class="flex flex-col gap-6 md:flex-row">

    {/* <!-- Vehicle Image --> */}
    <div class="md:w-1/2">
      <div class="relative h-48 overflow-hidden rounded-xl bg-gray-100">

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfgkR-iM3l3BAk607Xr-IvMNSdX6QhIrPVS0gV5xAkwwTXiSjfJuDTTRYPwSvnQoo9mKrkerscOvatMX0P3FFQa0Kpjek9b8UqjVJwhkVLVb4HYJhsqNwMYeR9mZYxa-WdXHEKg0AO0i1ZpHCPFKqpEqxnArSxJHQt1YUQWaFmxtBM32m4J5q4F3B2RkEbsZAPXJn0VklwFdNzAn4wSLk7vfNyAolpT5aYo1nLOsrkvipKmCGxPfd-cKtNdrFmpu654-qw_f9GEKLU"
          alt="Tesla Model 3"
          class="h-full w-full object-cover"
        />
{/* 
        <!-- VIN Badge --> */}
        <div class="absolute right-4 top-4 flex items-center gap-2 rounded-lg border border-gray-200 bg-white/90 px-3 py-2 backdrop-blur">

          <span class="material-symbols-outlined text-base text-blue-600">
            qr_code_2
          </span>

          <span class="text-xs font-semibold text-gray-800">
            Digital VIN Match
          </span>

        </div>

      </div>
    </div>

    {/* <!-- Vehicle Details --> */}
    <div class="space-y-4 md:w-1/2">

      <div>
        <h3 class="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-500">
          Vehicle Model
        </h3>

        <p class="text-2xl font-bold text-gray-900">
          Tesla Model 3 • Midnight Black
        </p>
      </div>

      {/* <!-- Cards --> */}
      <div class="grid grid-cols-2 gap-4">

        <div class="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p class="mb-1 text-xs font-semibold uppercase text-gray-500">
            Plate Number
          </p>

          <p class="text-xl font-bold tracking-widest text-blue-600">
            SH-2024-X
          </p>
        </div>

        <div class="rounded-lg border border-gray-200 bg-gray-50 p-4">

          <p class="mb-1 text-xs font-semibold uppercase text-gray-500">
            Security Rating
          </p>

          <div class="flex items-center gap-2">

            <span class="material-symbols-outlined text-lg text-green-600">
              verified
            </span>

            <span class="text-xl font-bold text-gray-900">
              Grade A
            </span>

          </div>

        </div>

      </div>

      {/* <!-- GPS Status --> */}
      <div class="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-3">

        <span class="material-symbols-outlined text-green-600">
          sensors
        </span>

        <span class="text-sm font-medium text-green-700">
          Real-time GPS synchronization established.
        </span>

      </div>

    </div>

  </div>
 </div> 
    
    </>
  )
}

export default Vehicle_info