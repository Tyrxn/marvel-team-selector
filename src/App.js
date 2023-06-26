import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from './components/characters/CharacterList';
import Team from './components/characters/Team';
import WelcomeScreen from './components/WelcomeScreen';
import SelectionScreen from './components/SelectionScreen';
import ResultsScreen from './components/ResultsScreen';

const App = () => {
  const [team, setTeam] = useState([]);
  const [selectedTeamBox, setSelectedTeamBox] = useState(null);

  const handleAddToTeam = (character, position) => {
    if (selectedTeamBox !== null) {
      const updatedTeam = [...team];
      updatedTeam[selectedTeamBox] = { character, position };
      setTeam(updatedTeam);
      setSelectedTeamBox(null);
    }
  };

  const handleSelectTeamBox = (index) => {
    setSelectedTeamBox(index);
  };

  const handleDeletePlayer = (index) => {
    const updatedTeam = [...team];
    updatedTeam[index] = null;
    setTeam(updatedTeam);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/selection" element={<SelectionScreen />} />
        <Route path="/results" element={<ResultsScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
