import './rooms-grid.css'

function RoomsGrid() {
    return (
    <>
      <h2>Select a Room</h2>
      <div className="rooms-grid">
        <div className="room-card">
          <h3>Baroque Room</h3>
          <p>Explore the intricate world of Baroque music.</p>
        </div>
        <div className="room-card">
          <h3>Classical Room</h3>
          <p>Dive into the balanced and structured Classical era.</p>
        </div>
        <div className="room-card">
          <h3>Romantic Room</h3>
          <p>Experience the emotional depth of Romantic compositions.</p>
        </div>
        <div className="room-card">
          <h3>Modern Room</h3>
          <p>Discover the innovative sounds of Modern music.</p>
        </div>
        <div className="room-card">
            <h3>The practice room</h3>
            <p>Hone your skills and prepare for the challenges ahead.</p>
        </div>
        <div className="room-card">
            <h3>The concert hall</h3>
            <p>Showcase your musical talents in a grand setting.</p>
        </div>
        <div className="room-card">
            <h3>The composer’s study</h3>
            <p>Uncover the secrets behind famous compositions.</p>
        </div>
        <div className="room-card">
            <h3>The instrument workshop</h3>
            <p>Learn about the craftsmanship of musical instruments.</p>
        </div>
        <div className="room-card">
            <h3>The music library</h3>
            <p>Explore a vast collection of musical scores and literature.</p>
        </div>
      </div>
    </>
  )
};
export default RoomsGrid