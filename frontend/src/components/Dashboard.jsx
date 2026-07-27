import Sidebar from './Elements/Sidebar'
import Alerts from './Pages/Dashboard/Alerts'
import Greeting from './Pages/Dashboard/Greeting'
import JourneyCard from './Pages/Dashboard/JourneyCard'
import LiveMap from './Pages/Dashboard/LiveMap'
import TopAppBar from './Pages/Dashboard/TopBar'
import VerifyCab from './Pages/Dashboard/VerifyCab'
function Dashboard() {
  return (
    
    <>

    <div className="bg-white text-gray-900">
      <Sidebar/>
      <div className='ml-64 min-h-screen bg-gray-50'>
        <TopAppBar/>
        <div className='max-w-7xl mx-auto px-6 py-6 lg:px-8 space-y-8'>
            <Greeting/>
            <div className='grid grid-cols-12 gap-6'>
                <JourneyCard/>
                <VerifyCab/>
                <LiveMap/>
                <Alerts/>
            </div>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Dashboard