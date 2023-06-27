import React from 'react';

const Team = ({ team }) => {
  const positions = ['GK', 'ST', 'MD', 'DF', 'ST, MD or DF'];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    padding: '10px',
    width: '35%', 
    height: '100%', 
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
            <div style={positionTextStyle}></div>
            {team[index] && team[index].character.thumbnail ? (
              <div style={teamBoxStyle}>
                <img
                  src={`${team[index].character.thumbnail.path}.${team[index].character.thumbnail.extension}`}
                  alt={team[index].character.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    
                  }}
                />
                
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
