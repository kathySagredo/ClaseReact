import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import Componentes from './components/Componentes'
import Home from './components/Home'
import UsoProps from './components/Props2'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Componentes' element={<Componentes />}/>
        <Route path='/Props' element={<UsoProps />} />
      </Routes>
    </Router>
  )
}

export default App
