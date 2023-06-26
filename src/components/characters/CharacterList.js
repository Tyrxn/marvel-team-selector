import React, { useState } from 'react';
import axios from 'axios';
import Character from './Character';
import md5 from 'md5';

const CharacterList = ({ onAddToTeam }) => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const publicKey = 'e76a3db942f6ef46df3dd05e04b25d16';
  const privateKey = '01aee429844718163e717a6ddf16368bd5f17f4b';

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    searchCharacters(event.target.value);
  };

  const searchCharacters = async (query) => {
    const ts = new Date().getTime().toString();
    const hash = md5(ts + privateKey + publicKey);

    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&apikey=${publicKey}&ts=${ts}&hash=${hash}`
      );

      setCharacters(response.data.data.results);
    } catch (error) {
      console.log('Error searching characters:', error);
    }
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
  

  

  const searchStyle = {
    width: '95%',
    minHeight: '30px',
    padding: '5px'
  };

  return (
    <div style={containerStyle}>
      <div style = {searchStyle}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for a Marvel character..."
            style={searchStyle}
          />
        </div>
        {characters.map((character) => (
          <Character
            key={character.id}
            character={character}
            selectForTeam={onAddToTeam}
          />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
