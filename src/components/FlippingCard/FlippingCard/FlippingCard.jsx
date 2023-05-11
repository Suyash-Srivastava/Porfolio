import React from 'react'

import { useState } from 'react';
import './FlippingCard.css'

function FlippingCard({ front, back,imgComp }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}  
    onMouseEnter={() => setIsFlipped(true)}
    onMouseLeave={() => setIsFlipped(false)}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {front}
        </div>
        <div className="flip-card-back">
          {back}
        </div>
      </div>
    </div>
  );
}

export default FlippingCard