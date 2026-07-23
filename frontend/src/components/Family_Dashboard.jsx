import React from 'react'
import TopSection from './Pages/FamilyDashboard.jsx/TopSection'
import Card_Section from './Pages/FamilyDashboard.jsx/Card_Section'
import TimeLine from './Pages/FamilyDashboard.jsx/TimeLine'
import Sidebar from './Elements/Sidebar'

function Family_Dashboard() {
  return (
    <>
    
    <body className='text-sm font-normal leading-5 antialiased overflow-x-hidden'>
        <Sidebar/>
        <main className='md:ml-64 pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto'>
            <TopSection/>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <Card_Section/>
                <TimeLine/>

            </div>
        </main>
        

    </body>
    
    </>
  )
}

export default Family_Dashboard