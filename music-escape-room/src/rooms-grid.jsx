import './rooms-grid.css'
import practiceRoomImg from './assets/practice-room.webp'
import musicLibraryImg from './assets/music-library.webp'
import composersStudyImg from './assets/composers-study.webp'
import baroqueRoomImg from './assets/baroque-room.webp'
import mozartRoomImg from './assets/mozart-room.webp'
import operaStageImg from './assets/opera-stage.webp'
import stringWorkshopImg from './assets/string-workshop.webp'
import woodwindWorkshopImg from './assets/woodwind-workshop.webp'
import concertHallImg from './assets/concert-hall.webp'

function RoomsGrid() {
    return (
    <>
      <h2>Select a Room</h2>
        <div className="rooms-grid">
        <div className="room-card">
        <img src={practiceRoomImg} alt="The Practice Room" />
          <h3>The Practice Room</h3>
          <p>Master the fundamentals before facing greater musical mysteries.</p>
        </div>
        <div className="room-card">
            <img src={musicLibraryImg} alt="The Music Library" />
          <h3>The Music Library</h3>
          <p>Ancient scores hold secrets waiting to be decoded.</p>
        </div>
        <div className="room-card">
            <img src={composersStudyImg} alt="The Composer's Study" />
          <h3>The Composer's Study</h3>
          <p>Unravel the hidden messages left behind by musical masters.</p>
        </div>
        <div className="room-card">
            <img src={baroqueRoomImg} alt="The Baroque Room" />
          <h3>Baroque Room</h3>
          <p>Navigate the ornate complexity of Bach's intricate musical puzzles.</p>
        </div>
        <div className="room-card">
            <img src={mozartRoomImg} alt="The Mozart Room" />
          <h3>The Mozart Room</h3>
          <p>Solve elegant riddles crafted by the genius of Vienna.</p>
        </div>
        <div className="room-card">
            <img src={operaStageImg} alt="The Opera" />
          <h3>The Opera</h3>
          <p>Where drama and music collide in spectacular challenges.</p>
        </div>
        <div className="room-card">
            <img src={stringWorkshopImg} alt="The String Workshop" />
          <h3>The String Workshop</h3>
          <p>Craft your way out using the secrets of violin makers.</p>
        </div>
        <div className="room-card">
            <img src={woodwindWorkshopImg} alt="The Woodwind Workshop" />
          <h3>The Woodwind Workshop</h3>
          <p>Breathe life into melodies to unlock hidden passages.</p>
        </div>
        <div className="room-card">
            <img src={concertHallImg} alt="The Concert Hall" />
          <h3>The Concert Hall</h3>
          <p>Face the ultimate performance that will determine your escape.</p>
        </div>
      </div>
    </>
  )
};
export default RoomsGrid