import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blue from './Blue';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/blue' Component={Blue} />
      </Routes>
    </>
  )
}

export default App
