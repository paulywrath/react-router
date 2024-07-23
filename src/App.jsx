import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blue from './components/Blue';
import Red from './components/Red';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/blue' Component={Blue} />
        <Route path='/red' Component={Red} />
      </Routes>
    </>
  )
}

export default App
