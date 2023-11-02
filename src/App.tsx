
import Picker from './components/Picker'
import Result from './components/Result'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import ScoreBoard from './components/ScoreBoard'

function App() {
  

  return (
    <div className="main flex flex-col justify-center items-center p-16">
      <ScoreBoard />

      <Routes>
    <Route path='/' element={<Picker />}/>
    <Route path='/result' element={<Result/>}/>
    </Routes>
    </div>
  )
}

export default App
