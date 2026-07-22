import React from 'react'
import Sidebar from './Elements/Sidebar'
import Navbar from './Pages/Ai_Assistent/Navbar'
import ChatArea from './Pages/Ai_Assistent/ChatArea'
import Analytics from './Pages/Ai_Assistent/Analytics'

function Ai_assistent() {
  return (
    <>
    <div className='min-h-screen bg-gray-50 text-gray-900 antialiased'>
        <Sidebar/>
        <Navbar/>
        <main className='md:pl-64 pt-16 md: pt-0 min-h-screen flex flex-col md:flex-row'>
            <section className="relative flex flex-1 flex-col h-[calc(100vh-64px)] overflow-hidden bg-gray-50 md:h-screen">
                <ChatArea/>
            </section>

            <Analytics/>

        </main>
    </div>
    </>
  )
}

export default Ai_assistent