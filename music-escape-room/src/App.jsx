import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/home.jsx'
import RoomsGrid from './rooms-grid.jsx'
import PracticeRoom from './rooms/practice-room/practice-room.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rooms" element={<RoomsGrid />} />
      <Route path="/rooms/practice-room" element={<PracticeRoom />} />
      <Route path="/rooms/:roomId" element={<div style={{padding: '20px', textAlign: 'center'}}><h2>Room Coming Soon!</h2><p>This room is under construction. Check back soon!</p></div>} />
    </Routes>
  )
}

export default App
