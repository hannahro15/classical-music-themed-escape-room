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
          title: 'Piano',
          content: 'Piano content will go here...'
        };
      case 'sheet-music':
        return {
          title: 'Sheet Music',
          content: 'Sheet music content will go here...'
        };
      case 'metronome':
        return {
          title: 'Metronome',
          content: 'Metronome content will go here...'
        };
      case 'music-stand':
        return {
          title: 'Music Stand',
          content: 'Music stand content will go here...'
        };
      case 'violin':
        return {
          title: 'Violin',
          content: 'Violin content will go here...'
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