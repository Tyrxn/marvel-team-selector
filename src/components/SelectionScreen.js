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
  const [position, setPosition] = useState(stages[0]);
  const [showTeam, setShowTeam] = useState(false); // State variable to control team visibility

  const handleResultsPage = () => {
    setShowTeam(true); // Show team when Next button is clicked
  };

  const handleSelectTeamBox = (index) => {
    setSelectedTeamBox(index);
    setPosition(stages[index]);
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
    setTeam(prevTeam => {
      const newTeam = [...prevTeam];
      newTeam[currentTeamPosition] = { character };
      return newTeam;
    });

    handleNextStage();
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

  const nextButtonStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px',
    borderRadius: '5px',
    textDecoration: 'none',
  };

  return (
    <div>
      {!showTeam && ( // Render the selection screen until Next button is clicked
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
      {showTeam && ( // Render the team screen after Next button is clicked
        <div>
          <h2>Your Team:</h2>
          {team.map((member, index) => (
            member && member.character && (
              <div key={index}>
                <h3>{stages[index]}: {member.character.name}</h3>
              </div>
            )
          ))}
          <button onClick={() => {}}>Share to Facebook</button>
          <Link to="/marvel-team-selector">Select New Team</Link>
        </div>
      )}
    </div>
  );
};

export default SelectionScreen;
