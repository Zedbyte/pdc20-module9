import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainEvent from './Events/MainEvent.jsx'
import ItemList from './Events/ItemList.jsx'

import UserProfilePage from './Profile/UserProfilePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    {/* <UserProfilePage/> */}

    {/* <MainEvent/> */}

  </StrictMode>
)
