import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import "./input.css"
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import Cab_Verification from './components/Cab_Verification'
import SOS_Centre from './components/SOS_Centre'
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

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App