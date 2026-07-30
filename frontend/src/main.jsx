import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "leaflet/dist/leaflet.css";

import App from './App.jsx';
import './utils/fixLeafletIcon.js';

import { ProfileProvider } from './Context/ProfileContext.jsx';
import { TrustedContactProvider } from './Context/TrustedContactContext.jsx';
import { LocationProvider } from './Context/LocationContext.jsx';
import { JourneyProvider } from './Context/JourneyContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileProvider>
      <TrustedContactProvider>
        <LocationProvider>
          <JourneyProvider>
              <App />
          </JourneyProvider>
        </LocationProvider>
      </TrustedContactProvider>
    </ProfileProvider>
  </StrictMode>
);