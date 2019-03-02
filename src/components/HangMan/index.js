import React from 'react';
import './HangMan.css';

const bodyParts = [
  <div className="head" />,
  <div className='body' />,
  <div className='left-arm' />,
  <div className='right-arm' />,
  <div className='left-leg' />,
  <div className='right-leg' />
];

const deadEyes = [
  <div className="left-eye">X</div>,
  <div className="right-eye">X</div>,
];

const HangMan = (props) => {
  let bodyPartsToDisplay = [];
  for (let i = 0; i < props.failures; i++) {
    bodyPartsToDisplay.push(bodyParts[i]);
  }

  if (props.failures === 6) {
    bodyPartsToDisplay.push(deadEyes);
  }

  return (
    <div style={{ height : "300px" }}>
      <div className="hangman">
        {bodyPartsToDisplay}
      </div>
      <div className="platform">
        <div className="base" />
        <div className='rope' />
        <div className='stick' />
      </div>
    </div>
  );
};

export default HangMan;