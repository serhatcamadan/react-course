import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <UserCard name="Serhat" age={24} city="Rize" description="Software Engineer" />
  );
}

function UserCard({ name, age, city, description }) {
  return (

<a href="#" className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
  <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
    <div className="mt-4 sm:mt-0">
      <h3 className="text-lg font-medium text-pretty text-gray-900">
        {name}
      </h3>

      <p className="mt-1 text-sm text-gray-700">{description}</p>
    </div>
  </div>

  <dl className="mt-6 flex gap-4 lg:gap-6">
    <div className="flex items-center gap-2">

      <dd className="text-xs text-gray-700">{age}</dd>
    </div>

    <div className="flex items-center gap-2">

      <dd className="text-xs text-gray-700">{city}</dd>
    </div>
  </dl>
</a>
  );
}