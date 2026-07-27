import { StrictMode } from 'react'

import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { ProfileProvider } from './Context/ProfileContext.jsx'
import { TrustedContactProvider } from './Context/TrustedContactContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileProvider>
      <TrustedContactProvider>
          <App/>
      </TrustedContactProvider>
      
    </ProfileProvider>
  </StrictMode>,
)
