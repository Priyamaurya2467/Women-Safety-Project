import React from 'react'
import Header from './Pages/Sos Center/Header'
import Sidebar from './Elements/Sidebar'
import Map from './Pages/Sos Center/Map'
import { Star } from 'lucide-react'
import User_Status_Card from './Pages/Sos Center/User_Status_Card'
import Trusted from './Pages/Sos Center/Trusted'
import Evidence from './Pages/Sos Center/Evidence'
function SOS_Centre() {
  return (
    <>

    <div className="bg-white text-gray-700">

      <Sidebar/>
      
   

      <main className='min-h-screen bg-gray-50 pt-20 md:ml-64 px-6 lg:px-8 sm:px-6 xl:px-10 pb-8'>
        <div className="mx-auto w-full max-w-[2000px]">
          <Header/>
          <div className='grid grid-cols-12 gap-4 xl:gap-6 xl:flex flex-row'>
            <div className='col-span-12 xl:col-span-10'>
                <Map/>
            </div>
          <div className="col-span-12 xl:col-span-3 flex flex-col gap-2">
           
                <User_Status_Card />
                <Trusted />
                <Evidence />
            
          </div>
          </div>
          

        </div>
        

       
      </main>
    </div>

    </>
  )
}

export default SOS_Centre