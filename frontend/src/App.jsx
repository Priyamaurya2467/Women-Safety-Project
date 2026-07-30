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
import Family_Dashboard from './components/Family_Dashboard'
import ProtectedRoute from './components/ProtectedRoutes'
import Profile_Page from './components/Profile_Page'
import TrustedContact from './components/Pages/TrustedContact/TrustedContact'

import JourneyPage from './components/Pages/JourneyPage'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/registration' element={<Registration/>} />
      
      <Route path='/dashboard' element = {
        <ProtectedRoute><Dashboard/></ProtectedRoute>
      } />       
      <Route path='/cab_verification' element={
        <ProtectedRoute><Cab_Verification/></ProtectedRoute>}
         />
      <Route path='/sos-center' element={
        <ProtectedRoute><SOS_Centre/></ProtectedRoute>
      } />
      <Route path='/safe-journey' element={
        <ProtectedRoute><Safe_Journey/></ProtectedRoute>
      } />
      <Route path='/community' element={
        <ProtectedRoute><Community/></ProtectedRoute>
      } />
      <Route path='/ai-assistent' element={
        <ProtectedRoute><Ai_assistent/></ProtectedRoute>
      }/>
      <Route path='/family-dashboard' element={
        <ProtectedRoute><Family_Dashboard/></ProtectedRoute>
      }/>
      <Route path='/settings' element={
        <ProtectedRoute><Profile_Page/></ProtectedRoute>
      }/>
      

      <Route path='/trusted-contact' element={
        <ProtectedRoute><TrustedContact/></ProtectedRoute>
      }/>

      <Route path='/journey' element={<JourneyPage/>}/>

    </Routes>

    </BrowserRouter>
    
    </>
  )
}

export default App