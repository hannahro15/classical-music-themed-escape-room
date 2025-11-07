import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage.jsx'
import RoomsGrid from './rooms-grid.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rooms" element={<RoomsGrid />} />
    </Routes>
  )
}

export default App
