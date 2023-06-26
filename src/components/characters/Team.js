import React from 'react';

const Team = ({ team, selectedTeamBox, onSelectTeamBox, onDeletePlayer }) => {
  const positions = ['GK', 'ST', 'MD', 'DF', 'ST, MD or DF'];

  const handleDeletePlayer = (index) => {
    onDeletePlayer(index);
  };

  const handleSelectTeamBox = (index) => {
    onSelectTeamBox(index);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    border: '1px solid black', 
    padding: '10px',
    width: '35%', 
    height: '100%', 
    boxSizing: 'border-box', 
  };
  

  const teamBoxContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const teamBoxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'lightgray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: selectedTeamBox === null ? 'none' : '1px solid black',
  };

  const positionTextStyle = {
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h2>Your Team:</h2>
      <div style={teamBoxContainerStyle}>
        {positions.map((position, index) => (
          <div key={index}>
            <div style={positionTextStyle}>{position}</div>
            <div
              style={teamBoxStyle}
              onClick={() => handleSelectTeamBox(index)}
            >
              {team[index] && team[index].character.thumbnail ? (
                <img
                  src={`${team[index].character.thumbnail.path}.${team[index].character.thumbnail.extension}`}
                  alt={team[index].character.name}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
