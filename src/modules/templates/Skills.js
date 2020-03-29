import React from 'react';

const AbilityScores = ({ desc, name, ability_score, search }) => {
  const handleLink = url => {
    search(url, 'Ability-Scores');
  };
  return (
    <div>
      <h1>{name}</h1>
      <h2>Description:</h2>
      {desc.map(item => (
        <p>{item}</p>
      ))}
      <h2>Modified by:</h2>
      <a className='link' onClick={() => handleLink(ability_score.url)}>
        {ability_score.name}
      </a>
    </div>
  );
};

export default AbilityScores;
