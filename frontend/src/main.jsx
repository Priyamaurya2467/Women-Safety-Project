import { StrictMode } from 'react'

import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { ProfileProvider } from './Context/ProfileContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileProvider>
      <App/>
    </ProfileProvider>
  </StrictMode>,
)
