import { useState } from 'react'
import './App.css'


export default function App() {
  const products = [
  { id: 1, name: "Nike Air", price: 1200 },
  { id: 2, name: "Adidas Run", price: 950 },
  { id: 3, name: "Puma Speed", price: 800 },
]
  return (
    products.map(p => <ProductCard key={p.id} name={p.name} price={p.price} />)
  )
}

function ProductCard({ name, price }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}