import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blue from './components/Blue';
import Red from './components/Red';
import Navbar from './components/Navbar';
import OtherColor from './components/OtherColor';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/blue' Component={Blue} />
        <Route path='/red' Component={Red} />
        <Route path='/:color' Component={OtherColor} />
      </Routes>
    </>
  )
}

export default App
