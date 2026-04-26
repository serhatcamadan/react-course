import { useState } from 'react'
import './App.css'


export default function App() {
  const [count, setCount] = useState(5)

  function handleClick(){
    setCount(count -1)
  }


  return (
    <div>
      <h1>Count: {count}</h1>
      <button 
      disabled={count === 0}
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={handleClick}>Decrease</button>
    </div>
  )
}




