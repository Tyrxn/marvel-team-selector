import React from 'react';

const Character = ({ character, selectForTeam }) => {
  return (
    <div>
      <h2>{character.name}</h2>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <button onClick={() => selectForTeam(character)}>Select</button>
    </div>
  );
};

export default Character;
