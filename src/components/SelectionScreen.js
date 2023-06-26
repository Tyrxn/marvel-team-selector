import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterList from './characters/CharacterList';
import Team from './characters/Team';

const SelectionScreen = () => {
  const stages = ['Goalkeeper', 'Striker', 'Midfielder', 'Defender', 'Outfielder'];
  const [currentStage, setCurrentStage] = useState(-1);
  const [team, setTeam] = useState([null, null, null, null, null]);
  const [selectedTeamBox, setSelectedTeamBox] = useState(null);

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
        setTeam(prevTeam => {
          const newTeam = [...prevTeam];
          newTeam[currentStage] = { character };
          return newTeam;
        });
    }

        
  const progressBarContainerStyle = {
    width: '70%',
    height: '4px',
    backgroundColor: '#ccc',
    position: 'relative',
    overflow: 'hidden',
    margin: '0 auto', // Center the progress bar horizontally
  };

  const progressBarStyle = {
    width: `${((currentStage + 1) * 20)}%`,
    height: '100px', 
    backgroundColor: 'black', 
    transition: 'width 0.3s ease',
  };
  

  const stageContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
    margin: '0 auto', // Center the stage container horizontally
    marginTop: '20px',
  };

  const stageStyle = {
    flex: `1 0 ${100 / stages.length}%`,
    textAlign: 'center',
    fontWeight: 'bold'
  };

  const handleNextStage = () => {
    if (currentStage < stages.length) {
      setCurrentStage((prevStage) => prevStage + 1);
    }
  };
  
  const mainContainerStyle = {
    display: 'flex',
    justifyContent: 'center', 
    width: '100%', 
    height: '100%', 

  };
  

  return (
    <div>
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
        <Team team={team} selectedTeamBox={selectedTeamBox} onSelectTeamBox={handleSelectTeamBox} onDeletePlayer={handleDeletePlayer} />
      </div>
      <button onClick={handleNextStage} disabled={currentStage >= stages.length - 1}>
        Next Stage
      </button>
      <Link to="/results">Go to Results</Link>
    </div>
  );
};

export default SelectionScreen;