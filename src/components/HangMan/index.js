import React from 'react';
import './HangMan.css';

const bodyParts = [
  <div key={0} className="head" />,
  <div key={1} className='body' />,
  <div key={2} className='left-arm' />,
  <div key={3} className='right-arm' />,
  <div key={4} className='left-leg' />,
  <div key={5} className='right-leg' />
];

const deadEyes = [
  <div key={6} className="left-eye">X</div>,
  <div key={7} className="right-eye">X</div>,
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