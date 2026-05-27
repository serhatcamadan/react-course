import { useState } from 'react'


export default function App() {
  const [userName, setUsername] = useState('')

  function handleChange(e){
    return setUsername(e.target.value)
   }

   return (
    <div>
      <input type="text" value={userName} onChange={handleChange} />
      <p>Merhaba {userName}</p>
     </div>
   )
  }




