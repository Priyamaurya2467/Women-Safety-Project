import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "leaflet/dist/leaflet.css";

import App from './App.jsx';
import './utils/fixLeafletIcon.js';

import { ProfileProvider } from './Context/ProfileContext.jsx';
import { TrustedContactProvider } from './Context/TrustedContactContext.jsx';
import { LocationProvider } from './Context/LocationContext.jsx';
import { JourneyProvider } from './Context/JourneyContext.jsx';
import { SOSProvider } from './Context/SOSContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileProvider>
      <SOSProvider>
        <LocationProvider>
          <JourneyProvider>
            <TrustedContactProvider>
              <App />
            </TrustedContactProvider>
              
          </JourneyProvider>
        </LocationProvider>
      </SOSProvider>
    </ProfileProvider>
  </StrictMode>
);