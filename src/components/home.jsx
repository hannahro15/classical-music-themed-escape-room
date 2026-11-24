import { Link } from 'react-router-dom'
import './home.css';


function HomePage() {
  return (
    <div className='home-page'>
      <h1>Classical Music Themed Escape room</h1>
      <p>Please click enter to select a room and to begin your adventure!</p>
      <Link to="/rooms" id="enter-btn">Enter</Link>
    </div>
  )
}

export default HomePage;