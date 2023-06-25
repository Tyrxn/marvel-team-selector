import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';
import md5 from 'md5';

const CharacterList = ({ onAddToTeam }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const publicKey = 'e76a3db942f6ef46df3dd05e04b25d16';
    const privateKey = '01aee429844718163e717a6ddf16368bd5f17f4b';
    const ts = new Date().getTime().toString();
    const hash = md5(ts + privateKey + publicKey);

    const fetchCharacters = async () => {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${ts}&hash=${hash}`
      );

      setCharacters(response.data.data.results);
    };

    fetchCharacters();
  }, []);

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',

  };

  return (
    <div style={containerStyle}>
      {characters.map((character) => (
        <Character
          key={character.id}
          character={character}
          selectForTeam={onAddToTeam}
        />
      ))}
    </div>
  );
};

export default CharacterList;
