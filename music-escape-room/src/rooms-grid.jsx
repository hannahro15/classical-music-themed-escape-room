import './rooms-grid.css'

function RoomsGrid() {
    return (
    <>
      <h2>Select a Room</h2>
            <div className="rooms-grid">
        <div className="room-card">
          <h3>The Practice Room</h3>
          <p>Master the fundamentals before facing greater musical mysteries.</p>
        </div>
        <div className="room-card">
          <h3>The Music lLibrary</h3>
          <p>Ancient scores hold secrets waiting to be decoded.</p>
        </div>
        <div className="room-card">
          <h3>The Composer's Study</h3>
          <p>Unravel the hidden messages left behind by musical masters.</p>
        </div>
        <div className="room-card">
          <h3>Baroque Room</h3>
          <p>Navigate the ornate complexity of Bach's intricate musical puzzles.</p>
        </div>
        <div className="room-card">
          <h3>The Mozart Room</h3>
          <p>Solve elegant riddles crafted by the genius of Vienna.</p>
        </div>
        <div className="room-card">
          <h3>The Opera</h3>
          <p>Where drama and music collide in spectacular challenges.</p>
        </div>
        <div className="room-card">
          <h3>The String Workshop</h3>
          <p>Craft your way out using the secrets of violin makers.</p>
        </div>
        <div className="room-card">
          <h3>The Woodwind Workshop</h3>
          <p>Breathe life into melodies to unlock hidden passages.</p>
        </div>
        <div className="room-card">
          <h3>The Concert Hall</h3>
          <p>Face the ultimate performance that will determine your escape.</p>
        </div>
      </div>
    </>
  )
};
export default RoomsGrid