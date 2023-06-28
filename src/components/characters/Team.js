import React from 'react';

const Team = ({ team, showTeam }) => {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    padding: '10px',
    height: '100%',
  };

  const teamMemberContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '10px',
  };

  const teamMemberStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
  };



  return (
    <div style={containerStyle}>
      {showTeam && ( 
        <>
          <h2>Your Team:</h2>
          {team.map((member, index) => (
            <div key={index} style={teamMemberContainerStyle}>
              {member && member.character && member.character.thumbnail ? (
                <div>
                  <img
                    src={`${member.character.thumbnail.path}.${member.character.thumbnail.extension}`}
                    alt={member.character.name}
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: 'lightgray',
                    }}
                  />
                </div>
              ) : null}
              <div style={teamMemberStyle}>
                {member && member.character && member.character.name}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Team;
