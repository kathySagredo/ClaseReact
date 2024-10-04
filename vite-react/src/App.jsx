import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import Componentes from './components/Componentes'
import Home from './components/Home'
import UsoProps from './components/Props2'
import UsoState from './components/State'
import Effect from './components/Effect'
import RenderCondicional from './components/RCondicional'
import ListasKeys from './components/ListasyKeys'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Componentes' element={<Componentes />}/>
        <Route path='/Props' element={<UsoProps />} />
        <Route path='/State' element={<UsoState />} />
        <Route path='/Effect' element={<Effect />} />
        <Route path='/RenderCondicional' element={<RenderCondicional />} />
        <Route path='/ListasyKeys' element={<ListasKeys />} />
      </Routes>
    </Router>
  )
}

export default App
