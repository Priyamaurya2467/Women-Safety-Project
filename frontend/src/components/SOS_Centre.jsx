import React, { useEffect, useState } from 'react'
import Header from './Pages/Sos Center/Header'
import Sidebar from './Elements/Sidebar'
import Map from './Pages/Sos Center/Map'
import { Star } from 'lucide-react'
import User_Status_Card from './Pages/Sos Center/User\_Status\_Card'
import Trusted from './Pages/Sos Center/Trusted'
import Evidence from './Pages/Sos Center/Evidence'

import { getSOSHistory } from '../../../backend/src/services/sosService';

function SOS_Centre() {

  const [sosHistory,setSosHistory] = useState([]);
  const [currentSos , setCurrentSos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error , setError] = useState("");

  useEffect(()=>{
    fetchSosHistory();
  },[])

  const fetchSosHistory = async()=>{
    try{
      setLoading(true);
      setError("");

      const response = await getSOSHistory();
      const history = response.data || [];
      setSosHistory(history);

      const activeSOS = history.find(
        (sos) =>
          sos.status !== "CANCELLED" &&
          sos.status !== "RESOLVED"
      );
         setCurrentSOS(activeSOS || null);
    } catch (err) {
      console.error("Failed to fetch SOS history:", err);

      setError(
        err.response?.data?.message ||
          "Unable to load SOS information"
      );
    } finally {
      setLoading(false);
    
    }

  }

  return (
    <>


      <div className="bg-white text-gray-700">

        <Sidebar/>
        


        <main className='min-h-screen bg-gray-50 pt-20 md:ml-64 px-6 lg:px-8 sm:px-6 xl:px-10 pb-8'>
          <div className="mx-auto w-full max-w-[2000px]">
            <Header
              currentSos={currentSos}
              loading={loading}
            />
              {error && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
            )}
            <div className='grid grid-cols-12 gap-4 xl:gap-6 xl:flex flex-row'>
              <div className='col-span-12 xl:col-span-10'>
                  <Map currentSos={currentSos}/>
              </div>
            <div className="col-span-12 xl:col-span-3 flex flex-col gap-2">
            
                  <User_Status_Card 
                    currentSos={currentSos}
                    loading={loading}
                  />
                  <Trusted currentSos={currentSos}/>
                  <Evidence currentSos={currentSos} sosHistory={sosHistory}/>
              
            </div>
            </div>
            

          </div>
          

        
        </main>
      </div>

    </>

)
}

export default SOS_Centre