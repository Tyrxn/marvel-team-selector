import React, { useState } from 'react';

const Character = ({ character, selectForTeam }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    selectForTeam(character);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const thumbnailStyle = {
    width: '100px', // Adjust the width to your desired size
    height: 'auto', // Maintain the aspect ratio
    cursor: 'pointer', // Show pointer cursor on hover
    position: 'relative', // Enable positioning for hover effect
    overflow: 'hidden', // Hide overflow to prevent content overlap
    marginRight: '5px'
  };  

  const textWrapperStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: isHovered ? '1' : '0',
    transition: 'opacity 300ms ease',
    textShadow: '1px 1px 1px #000',
  };

  return (
    <div style={thumbnailStyle} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} style={{ width: '100px', height: '100px' }} />
      <div style={textWrapperStyle}>{character.name}</div>
    </div>
  );
};

export default Character;
