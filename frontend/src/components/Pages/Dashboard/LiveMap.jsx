import React from 'react'

function LiveMap() {
  return (
    <>

    <div className="col-span-12 lg:col-span-8 h-96 rounded-2xl border border-gray-200 shadow-sm overflow-hidden relative">

  {/* Map Background */}
  <div className="absolute inset-0 z-0 grayscale-[0.5] hover:grayscale-0 transition-all duration-700">
    <div
      className="w-full h-full bg-gray-200 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGZ1Vj0drhyLc_wu8lLyN5zg1Dgb20Hj-FUcVNvPhSbcEY5IFeOi_EqXhTEDNW6wpf6GwmxOuSOzTimqIg5Fn5mXHYo2mxbLdynTOj6MLjIjb7GP9jZI8jVag_3a4RlKZ_IFQ4qs1nkTMJkh5p6dv5B2HxmHQWjZKM-5SMNqPEdW57WUFf73RmVTVXlUNXW23mkKpaUI2CvFEX-Hh2UWJXIti_nhEHcrgKokgq8HYYJ9vtsRB2BYF_zXeEFczXSbS9p0p8YfEDqtX8')",
      }}
    />
  </div>

  {/* Status Badge */}
  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
    <div className="flex items-center space-x-2">
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
      <span className="text-sm font-semibold text-gray-900">
        Active Monitoring: On
      </span>
    </div>
  </div>

  {/* Zoom Controls */}
  <div className="absolute bottom-4 right-4 z-10 flex flex-col space-y-2">

    <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:text-indigo-600 transition-colors">
      <span className="material-symbols-outlined">add</span>
    </button>

    <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:text-indigo-600 transition-colors">
      <span className="material-symbols-outlined">remove</span>
    </button>

  </div>

</div>
    
    
    </>
  )
}

export default LiveMap