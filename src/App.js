import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import Team from './components/Team';

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
<div>
<h1>Marvel Team Selector</h1>
<Team
     team={team}
     selectedTeamBox={selectedTeamBox}
     onSelectTeamBox={handleSelectTeamBox}
     onDeletePlayer={handleDeletePlayer}
   />
<CharacterList onAddToTeam={handleAddToTeam} />
</div>
);
};

export default App;