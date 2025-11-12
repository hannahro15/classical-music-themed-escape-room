import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/home.jsx'
import RoomsGrid from './rooms-grid.jsx'
import PracticeRoom from './rooms/practice-room.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rooms" element={<RoomsGrid />} />
      <Route path="/rooms/practice-room" element={<PracticeRoom />} />
    </Routes>
  )
}

export default App
