import React from 'react'
import Sidebar from './Elements/Sidebar'
import Main from './Pages/Dashboard/Main'
import { FaRunning } from 'react-icons/fa'
import { ChevronRight , CarTaxiFront,Search,Check,Info,AlertTriangle } from 'lucide-react'
import Navbar from './Pages/Cab_Verification/Navbar'
import Verified_card from './Pages/Cab_Verification/Verified_card'
function Cab_Verification() {
  return (
    
    <>

    <div className='flex min-h-screen '>
        <Sidebar/>    
        
    

        <main className='flex-1 min-w-screen bg-gray-100'>
            <Navbar/>
          
          <hr className='border-gray-200'/>

          <Verified_card/>
          
         
        <div className="grid grid-cols-4 gap-6 ">

         {/* Left Side (75%) */}
            <div className="col-span-3 flex flex-col gap-6 pt-5 ">

              {/* Journey Card */}
              <div className="bg-white rounded-xl shadow p-8 pb-10 ">
                <div className="flex flex-col gap-4">

                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-700 p-2 rounded-full">
                      <FaRunning className="w-5 h-5 text-white" />
                    </div>

                    <h1 className="text-xl font-semibold text-black">
                      Start a Safe Journey
                    </h1>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-5">
                    Real-time location sharing and automated safety checks for your peace
                    of mind.
                  </p>

                  {/* Input + Button */}
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      className="flex-1 rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button className="flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition">
                      Start
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-1 bg-white rounded-xl shadow p-6">
                Card 2 (Recent Alerts / Live Map)
              </div>

            </div>

          {/* Right Side (25%) */}
            <div className="col-span-1 flex flex-col gap-6 pt-5">

          <div className="bg-white rounded-xl shadow p-4 ">

          {/* Top Content */}
          <div className="space-y-4">

            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="bg-blue-700 p-2 rounded-full">
                <CarTaxiFront className="w-5 h-5 text-white" />
              </div>

              <h2 className="text-lg font-semibold text-black">
                Verify Cab
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-5">
              Instantly verify the driver's identity and license plate before your trip.
            </p>

            {/* Input */}
            <input
              type="text"
              placeholder="Enter license plate"
              className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button className="mt-5 flex w-full items-center justify-center text-sm gap-2 rounded-xl border border-blue-700 py-2 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white">
            <Search size={18} />
            Verify Details
          </button>

          </div>

            
              <div className="bg-white rounded-xl shadow p-5 h-full">
              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-sm font-semibold text-gray-900">
                  Recent Alerts
                </h2>

                <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                  View All
                </button>
              </div>

              {/* Alerts */}
              <div className="space-y-5">

                {/* Alert 1 */}
                <div className="flex items-start gap-4  rounded-xl p-3 hover:bg-purple-50">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check size={14} className="text-green-600" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Home Check-in Successful
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">
                      Yesterday, 10:24 PM
                    </p>
                  </div>
                </div>

                {/* Alert 2 */}
                <div className="flex items-start gap-4  rounded-xl p-3 hover:bg-purple-50">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Info size={14} className="text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      New Safety Route Added
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">
                      Jan 24, 2:15 PM
                    </p>
                  </div>
                </div>

                {/* Alert 3 */}
                <div className="flex items-start gap-4 rounded-xl p-3 hover:bg-purple-50">
                  <div className="bg-red-100 p-2 rounded-full">
                    <AlertTriangle size={14} className="text-red-600" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Missed Check-in (Dismissed)
                    </h3>

                    <p className="text-xs text-gray-400 mt-1">
                      Jan 22, 11:05 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>
            </div>

  </div>




        </main>

    </div>
    
    </>
  )
}

export default Cab_Verification