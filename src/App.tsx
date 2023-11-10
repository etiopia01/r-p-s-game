
import Picker from './components/Picker'
import Result from './components/Result'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ScoreBoard from './components/ScoreBoard'
import Rules from './components/Rules'
import RulesBtn, { RulesOpen } from './components/RulesBtn'


function App() {
  
  return (
    <div className={`main ${RulesOpen.value && "opacity"} flex flex-col justify-start items-center p-16 gap-20 relative`}>
      <ScoreBoard />

      <Routes>
    <Route path='/' element={<Picker />}/>
    <Route path='/result' element={<Result/>}/>
    </Routes>
    <div className='w-full flex justify-end absolute bottom-0 p-6'>
    <RulesBtn/>
    </div>
    {RulesOpen.value && <Rules/>}
    </div>
  )
}

export default App
