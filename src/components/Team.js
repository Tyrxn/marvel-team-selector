import React from 'react';

const Team = ({ team }) => {
  return (
    <div>
      <h2>Your Team:</h2>
      {team.map((player, index) => (
        <div key={index}>
          <h2>{player.character.name}</h2>
          <p>Position: {player.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;
