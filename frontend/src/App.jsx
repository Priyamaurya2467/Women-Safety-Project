import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import "./input.css"
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import Cab_Verification from './components/Cab_Verification'
import SOS_Centre from './components/SOS_Centre'
import Safe_Journey from './components/Safe_Journey'
import Community from './components/Community'
import Ai_assistent from './components/Ai_assistent'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/registration' element={<Registration/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/cab_verification' element={<Cab_Verification/>} />
      <Route path='/sos-center' element={<SOS_Centre/>} />
      <Route path='/safe-journey' element={<Safe_Journey/>} />
      <Route path='/community' element={<Community/>} />
      <Route path='/ai-assistent' element={<Ai_assistent/>}/>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App