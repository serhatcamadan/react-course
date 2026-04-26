import { useState } from 'react'
import './App.css'


export default function App() {
return (
  <div>
    <Button label="Satın al" color="green" />
    <Button label="Vazgeç" color="red" />
  </div>
)

}


function Button({ label, color }) {
  const style = {
    backgroundColor: color,
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  };

  return <button style={style}>{label}</button>;
}