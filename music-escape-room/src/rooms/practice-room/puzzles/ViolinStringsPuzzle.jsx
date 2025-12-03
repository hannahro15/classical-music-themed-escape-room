import '../practice-room.css'
import './ViolinStringsPuzzle.css'

function ViolinStringsPuzzle() {
  return (
    <div className="violin-strings-puzzle">
      <div className="violin-container">
        <div className="violin-scroll"></div>
        <div className="violin-neck"></div>
        <div className="violin-fingerboard"></div>
        <div className="violin-body-upper"></div>
        <div className="violin-waist"></div>
        <div className="violin-body-lower"></div>
        
        <div className="f-hole-left"></div>
        <div className="f-hole-right"></div>
        
        <div className="violin-bridge"></div>
        
        <div className="violin-string string-1"></div>
        <div className="violin-string string-2"></div>
        <div className="violin-string string-3"></div>
        <div className="violin-string string-4"></div>
        
        <div className="violin-tailpiece"></div>
        <div className="violin-chinrest"></div>
      </div>
        E A D G
    </div>
  );
}

export default ViolinStringsPuzzle;