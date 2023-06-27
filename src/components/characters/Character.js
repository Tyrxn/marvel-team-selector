import React, { useState } from 'react';

const Character = ({ character, selectForTeam }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    selectForTeam(character);
    setSelected(!selected);
  };

  const containerStyle = {
    display: 'flex',
    cursor: 'pointer',
    marginBottom: '10px',
    backgroundColor: selected ? 'gray' : 'transparent',
  };

  const thumbnailStyle = {
    width: '100px',
    height: 'auto',
    marginRight: '10px',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const nameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const comicsStyle = {
    fontSize: '14px',
  };

  return (
    <div
      style={containerStyle}
      onClick={handleClick}
    >
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        style={thumbnailStyle}
      />
      <div style={contentStyle}>
        <div style={nameStyle}>{character.name}</div>
        <div style={comicsStyle}>
          <p>
            {character.comics.items
              .slice(0, 5)
              .map((comic, index) => comic.name)
              .join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Character;
