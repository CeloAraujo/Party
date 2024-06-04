import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
     <div>
      <h1>Fun Time</h1>
      <Outlet/>
     </div>
    </>
  )
}

export default App
