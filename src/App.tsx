
import Picker from './components/Picker'
import Result from './components/Result'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ScoreBoard from './components/ScoreBoard'
import Rules from './components/Rules'
import RulesBtn, { RulesOpen } from './components/RulesBtn'


function App() {
  
  return (
    <div className={`main ${RulesOpen.value && "opacity"} flex flex-col justify-center items-center px-16 py-6 gap-10 h-full`}>
      <ScoreBoard />

      <Routes>
    <Route path='/' element={<Picker />}/>
    <Route path='/result' element={<Result/>}/>
    </Routes>
    <div className='w-full flex justify-center p-6'>
    <RulesBtn/>
    </div>
    {RulesOpen.value && <Rules/>}
    </div>
  )
}

export default App
