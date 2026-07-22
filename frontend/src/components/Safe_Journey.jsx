import React from 'react'
import Sidebar from './Elements/Sidebar'
import Status_card from './Pages/Safe Journey/Status_card'
import Information from './Pages/Safe Journey/Information'
import Insights_Area from './Pages/Safe Journey/Insights_Area'
import Recents from './Pages/Safe Journey/Recents'
function Safe_Journey() {
  return (
    <>

        <div className="bg-white text-gray-700">

      
      <Sidebar/>
   

      <main className="min-h-screen bg-gray-50 pt-20 md:ml-64 px-8 lg:px-10"> 
        <div className="mx-auto max-w-7xl space-y-2">
          <h1 className='text-3xl font-semibold'>Active Trip Monitoring</h1>
          <p className='text-s text-gray-500'>Real-time analysis powered by SafeHer AI</p>
          
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                <div className='lg:col-span-8 space-y-6'>
                    <Status_card/>
                    <Information/>
                </div>

                <div className='lg:col-span-4 space-y-6 mb-4'>
                    <Insights_Area/>
                    <Recents/>

                </div>
                
                

          </div>
          </div>
      </main>


    
    
      </div>

    </>
  )
}

export default Safe_Journey