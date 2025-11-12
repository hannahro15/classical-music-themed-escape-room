import React, { useState } from 'react';
import img from '../assets/practice-room.webp';
import './practice-room.css';

function PracticeRoom() {
  const [activeModal, setActiveModal] = useState(null);

  const handleObjectClick = (objectName) => {
    console.log('Clicked:', objectName); // Debug log
    setActiveModal(objectName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const renderModalContent = () => {
    switch(activeModal) {
      case 'piano':
        return {
          content: '_ _ E F _ _ B C'
        };
      case 'sheet-music':
        return {
          content: 'A major, Bb major, B major, C major'
        };
      case 'violin':
        return {
          content: 'E A D G'
        };
      default:
        return null;
    }
  };

  const modalContent = renderModalContent();

  return (
    <div className="practice-room">
      <div className="room-container">
        <img src={img} alt="Practice Room" />
        
        {/* Clickable hotspots */}
        <div 
          className="clickable-object keyboard-hotspot"
          onClick={() => handleObjectClick('piano')}
          title="Click the piano keys"
        />
        
        <div 
          className="clickable-object sheet-music-hotspot"
          onClick={() => handleObjectClick('sheet-music')}
          title="Click the sheet music"
        />

        <div 
          className="clickable-object violin-hotspot"
          onClick={() => handleObjectClick('violin')}
          title="Click the violin"
        />
      </div>
      
      {/* Modal */}
      {activeModal && modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{modalContent.title}</h2>
              <button className="close-button" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <p>{modalContent.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PracticeRoom;