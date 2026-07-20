import { Home,Route , ShieldCheck,Siren,Users,Bot,UserRound,Settings,ChartColumn, UsersRound ,HelpCircle,LogOutIcon} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>




    <aside className="w-64 h-screen border-r border-gray-200 bg-white p-4 text-gray-700">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-blue-700 p-2 rounded-xl">
          <ShieldCheck size={22} className="text-white" />
        </div>

        <h1 className="text-2xl font-bold text-blue-700">
          SafeHer
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col h-[calc(100%-70px)]">

        {/* Top Menu */}
        <div className="space-y-1 text-xs font-semibold">

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors duration-300"
          >
            <Home className="w-5 h-5 flex-shrink-0" />
            <span>Dashboard</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors duration-300"
          >
            <Route className="w-5 h-5 flex-shrink-0" />
            <span>Safe Journey</span>
          </a>

          <Link
            to="/cab_verification"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors duration-300"
          >
            <ShieldCheck className="w-5 h-5 flex-shrink-0" />
            <span>Cab Verification</span>
          </Link>

          <Link
            to="/sos-center"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors duration-300"
          >
            <Siren className="w-5 h-5 flex-shrink-0" />
            <span>SOS Center</span>
          </Link>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors duration-300"
          >
            <Users className="w-5 h-5 flex-shrink-0" />
            <span>Community</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors duration-300"
          >
            <Bot className="w-5 h-5 flex-shrink-0" />
            <span>AI Assistant</span>
          </a>

           <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors duration-300"
          >
            <UsersRound className="w-5 h-5 flex-shrink-0" />
            <span>Family Dashboard</span>
          </a>

          <hr className="my-4 border-gray-300" />

           <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors duration-300"
          >
            <Settings className="w-5 h-5 flex-shrink-0" />
            <span>Profile & Settings</span>
          </a>

          <div className='flex flex-col h-35 justify-between'>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors duration-300"
          >
            <ChartColumn className="w-5 h-5 flex-shrink-0" />
            <span>Admin Analytics</span>
          </a>

          <button
            className="w-full bg-red-400 hover:bg-red-600 transition-colors duration-1000 text-white font-semibold py-3 rounded-xl mb-4"
          >
            Trigger SOS
          </button>

        </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto text-xs font-semibold mt-1">

          <hr className='text-gray-300'/>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-purple-50 transition-colors duration-300"
          >
            <HelpCircle className="w-4 h-4 flex-shrink-0" />
            <span>Help</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-1 rounded-xl hover:bg-purple-50 transition-colors duration-300"
          >
            <LogOutIcon className="w-4 h-4 flex-shrink-0" />
            <span>Logout</span>
          </a>

        </div>

      </nav>

    </aside>
  
    
    </>
  )
}

export default Sidebar