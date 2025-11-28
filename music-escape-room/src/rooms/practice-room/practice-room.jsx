import React, { useState } from 'react';
import img from '../../assets/practice-room.webp';
import PianoScalesPuzzle from './puzzles/PianoScalesPuzzle';
import KeySignaturePuzzle from './puzzles/KeySignaturePuzzle';
import ViolinStringsPuzzle from './puzzles/ViolinStringsPuzzle';
import './practice-room.css';

function PracticeRoom() {
  const [activeModal, setActiveModal] = useState(null);

  const renderModalContent = () => {
    switch(activeModal) {
      case 'piano':
        return <PianoScalesPuzzle />;
      case 'sheet-music':
        return <KeySignaturePuzzle />;
      case 'violin':
        return <ViolinStringsPuzzle />;
      default:
        return null;
    }
  };

  return (
    <div className="practice-room">
      <div className="room-container">
        <img src={img} alt="Practice Room" />
        
        <div 
          className="clickable-object keyboard-hotspot"
          onClick={() => setActiveModal('piano')}
          title="Click the piano keys"
        />
        
        <div 
          className="clickable-object sheet-music-hotspot"
          onClick={() => setActiveModal('sheet-music')}
          title="Click the sheet music"
        />

        <div 
          className="clickable-object violin-hotspot"
          onClick={() => setActiveModal('violin')}
          title="Click the violin"
        />
      </div>
      
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="close-button" onClick={() => setActiveModal(null)}>×</button>
            </div>
            <div className="modal-body">
              {renderModalContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PracticeRoom;