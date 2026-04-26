import { useState } from 'react'
import './App.css'


export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="App" className="bg-gray-100 p-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={toggleMenu}>
        {isOpen ? 'Close' : 'Open'} Menu
      </button>
      {isOpen && (
        <div className="menu">
          <p>Menu Content</p>
        </div>
      )}
    </div>
  )
}



