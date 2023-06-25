import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import Team from './components/Team';

const App = () => {
  const [team, setTeam] = useState([]);

  const handleAddToTeam = (character, position) => {
    const player = { character, position };
    setTeam([...team, player]);
  };

  return (
    <div>
      <h1>Marvel Team Selector</h1>
      <CharacterList onAddToTeam={handleAddToTeam} />
      <Team team={team} />
    </div>
  );
};

export default App;
