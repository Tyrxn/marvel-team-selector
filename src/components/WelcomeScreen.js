import React from 'react';
import { Link } from 'react-router-dom';
import welcomePic from '../marvel-team.png';

const WelcomeScreen = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };


  const paragraphStyle = {
    marginTop: '40px',
    fontSize: '16px',
    textAlign: 'center',
    maxWidth: '550px',
    marginBottom: '20px',
  };

  const startButtonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
  };
  

  const startButtonHoverStyle = {
    backgroundColor: '#555',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>BUILD YOUR OWN MARVEL TEAM!</h1>
      <img src={welcomePic} alt="Marvel Team" />
      <p style={paragraphStyle}>
        You've been selected to comprise the best 5-a-side football team using your extensive knowledge of Marvel characters. Are you up for the challenge?
      </p>
      <Link
        to="/selection"
        style={startButtonStyle}
        activeStyle={startButtonHoverStyle}
      >
        START
      </Link>
    </div>
  );
};

export default WelcomeScreen;
