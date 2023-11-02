import { useState } from 'react'
import Picker from './components/Picker'

import './App.css'
import ScoreBoard from './components/ScoreBoard'

function App() {
  

  return (
    <div className="main flex flex-col justify-center items-center p-16">
      <ScoreBoard />
      
    <Picker/>
    </div>
  )
}

export default App
