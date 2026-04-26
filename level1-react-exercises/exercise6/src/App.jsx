import { useState } from 'react'
import './App.css'


export default function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleChangeName(e){
    setName(e.target.value)
  }

  function handleChangeEmail(e){
    setEmail(e.target.value)
  }
  
  function handleClick(){
    console.log(name, email)
  }

  return (
    <div className="App" className="bg-gray-100 p-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChangeName}
        className="border p-2 mb-4 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleChangeEmail}
        className="border p-2 mb-4 w-full"
      />
      <p>Name: {name}</p>
      <p>Email: {email}</p>

      <button 
      className="bg-blue-500 text-white p-2 rounded" onClick={handleClick}>Submit</button>
    </div>
  )
}



