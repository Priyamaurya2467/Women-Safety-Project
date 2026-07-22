import React from 'react'
import Navbar from './Pages/Community/Navbar'
import Minimal from './Pages/Community/Minimal'
import Left_content from './Pages/Community/Left_content'
import Live_Safety from './Pages/Community/Live_Safety'
import Quick_Resource from './Pages/Community/Quick_Resource'
import Sidebar from './Elements/Sidebar'
function Community() {
  return (
    <>
    <Sidebar/>

    <div className='md: ml-64 min-h-screen flex flex-col lg:w-full'>

        <Navbar/>

        <div className='mx-auto grid w-full max-w-[1880px] grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-12 lg:px-8'>
            <Left_content/>
            <div className='lg:col-span-4 space-y-10'>
                <Live_Safety/>
                <Quick_Resource/>
                <Minimal/>
            </div>

        </div>
    </div>


    
    
    </>
  )
}

export default Community