import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppContext } from './components/Context/Context'
import './index.css'
AppContext
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
    <App />
    </AppContext>
  </React.StrictMode>
)
