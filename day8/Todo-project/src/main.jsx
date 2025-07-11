import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import { UserContext } from './hooks/Context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <UserContext>
    <App />
    </UserContext>
    </Router>
  </StrictMode>,
)
