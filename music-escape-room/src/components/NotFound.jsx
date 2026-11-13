import { Link } from 'react-router-dom'
import './not-found.css'

function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found-emoji" aria-hidden="true">🎼</p>
      <h1 className="not-found-heading">This page is out of tune</h1>
      <p className="not-found-text">
        The page you are looking for hit a wrong note. Let&apos;s get you back on
        track.
      </p>
      <div className="not-found-links">
        <Link to="/" className="not-found-btn">Home</Link>
        <Link to="/rooms" className="not-found-btn">Rooms</Link>
      </div>
    </div>
  )
}

export default NotFound
