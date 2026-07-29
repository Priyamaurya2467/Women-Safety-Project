import { StrictMode } from 'react'

import App from './App.jsx'
import "leaflet/dist/leaflet.css";
import './utils/fixLeafletIcon.js'
import { createRoot } from 'react-dom/client'
import { ProfileProvider } from './Context/ProfileContext.jsx'
import { TrustedContactProvider } from './Context/TrustedContactContext.jsx'
import { LocationProvider } from './Context/LocationContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileProvider>
      <TrustedContactProvider>

        <LocationProvider>

          <App/>

        </LocationProvider>
        
          
      </TrustedContactProvider>
      
    </ProfileProvider>
  </StrictMode>,
)
