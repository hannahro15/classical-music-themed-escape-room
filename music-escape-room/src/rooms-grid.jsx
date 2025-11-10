import { Link } from 'react-router-dom'
import './rooms-grid.css'
import rooms from './data/room-card-info.jsx'

function RoomsGrid() {
  return (
    <div className="rooms-grid-container">
      <h2>Select a Room</h2>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.image} alt={room.alt} />
            <h3>{room.title}</h3>
            <p>{room.description}</p>
            <Link to={`/rooms/${room.id}`}>
              <button className="enter-room-btn">Click here to enter</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomsGrid;