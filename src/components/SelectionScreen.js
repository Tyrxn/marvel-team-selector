import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterList from './characters/CharacterList';
import Team from './characters/Team';

const SelectionScreen = () => {
  const stages = ['Goalkeeper', 'Striker', 'Midfielder', 'Defender', 'Outfielder'];
  const [currentStage, setCurrentStage] = useState(-1);
  const [currentTeamPosition, setCurrentTeamPosition] = useState(0);
  const [team, setTeam] = useState([null, null, null, null, null]);
  const [selectedTeamBox, setSelectedTeamBox] = useState(0);
  const [showTeam, setShowTeam] = useState(false); 

  const handleResultsPage = () => {
    setShowTeam(true); 
  };

  const handleSelectTeamBox = (index) => {
    setSelectedTeamBox(index);

  };

  const handleDeletePlayer = (index) => {
    setTeam(prevTeam => {
      const newTeam = [...prevTeam];
      newTeam[index] = null;
      return newTeam;
    });

    if (index < currentStage) {
      setCurrentStage(index);
    }
  };

  const handleAddToTeam = (character) => {
    if (currentTeamPosition < stages.length) {
      setTeam(prevTeam => {
        const newTeam = [...prevTeam];
        newTeam[currentTeamPosition] = { character };
        return newTeam;
      });
  
      handleNextStage();
    }
  };
  

  const progressBarContainerStyle = {
    width: '70%',
    height: '4px',
    backgroundColor: '#ccc',
    position: 'relative',
    overflow: 'hidden',
    margin: '0 auto',
  };

  const progressBarStyle = {
    width: `${((currentStage + 1) * 20)}%`,
    height: '100px',
    backgroundColor: 'gray',
    transition: 'width 0.3s ease',
  };

  const stageContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
    margin: '0 auto',
    marginTop: '20px',
  };

  const stageStyle = {
    flex: `1 0 ${100 / stages.length}%`,
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const handleNextStage = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(prevStage => prevStage + 1);
      setCurrentTeamPosition(prevPos => prevPos + 1);
    }
  };

  const mainContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
  };

  const navbarEmptyStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    color: 'white',
    padding: '30px',
  };

  const nextButtonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
    visibility: team.every(position => position !== null) ? 'visible' : 'hidden',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'center'
  }

  const listStyle = {
    textAlign: 'center',
    justifyContent: 'center'
  }



  return (
    <div>
      {!showTeam && ( 
        <>
          <div style={navbarStyle}>
            <button onClick={handleResultsPage} style={nextButtonStyle}>
              Next
            </button>
          </div>
          <div style={progressBarContainerStyle}>
            <div style={progressBarStyle}></div>
          </div>
          <div style={stageContainerStyle}>
            {stages.map((stage, index) => (
              <div key={index} style={stageStyle}>
                {stage}
              </div>
            ))}
          </div>
          <div style = {mainContainerStyle}>
            {currentTeamPosition < stages.length && <h1>CHOOSE A {stages[currentTeamPosition].toUpperCase()}</h1>}
          </div>

          <div style={mainContainerStyle}>
            
            <CharacterList onAddToTeam={handleAddToTeam} />
            <Team
              team={team}
              selectedTeamBox={selectedTeamBox}
              onSelectTeamBox={handleSelectTeamBox}
              onDeletePlayer={handleDeletePlayer}
            />
          </div>
        </>
      )}
        {showTeam && ( 
        <>
          <div style={navbarEmptyStyle}></div>
          <div style = {headerStyle}><h2>YOUR TEAM</h2></div>
          
          <div style = {listStyle}>
            {team.map((member, index) => (
              member && member.character && (
                <div key={index}>
                  <img
                    src={`${member.character.thumbnail.path}.${member.character.thumbnail.extension}`}
                    alt={member.character.name}
                    style={{ width: '100px', height: 'auto', marginRight: '10px' }}
                  />
                  <h3>{stages[index]}: {member.character.name}</h3>
                </div>
              )
            ))}
            <Link to="/marvel-team-selector" style={nextButtonStyle}>Select New Team</Link>
          </div>
        </>
      )}
    </div>
  );
  
};

export default SelectionScreen;
