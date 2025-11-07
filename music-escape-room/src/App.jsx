import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import RoomsGrid from './rooms-grid.jsx'

// Create a Home component
function HomePage() {
  return (
    <>
      <h1>Classical Music Themed Escape room</h1>
      <p>Please click enter to select a room and to begin your adventure!</p>
      <Link to="/rooms-grid">
        <button id="enter-btn">Enter</button>
      </Link>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rooms" element={<RoomsGrid />} />
    </Routes>
  )
}

export default App
