import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fasea from './App.jsx'
import { Serhat, Fadis } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fasea />
  </StrictMode>,
)
