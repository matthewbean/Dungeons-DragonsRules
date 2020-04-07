import React from 'react';

const Skills = ({ desc, name, ability_score, search }) => {
  const handleLink = (url) => {
    search(url, 'ability-scores');
  };
  return (
    <div>
      <h1>{name}</h1>
      <div className='section'>
        <h2>Description:</h2>
        {desc.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      <div className='section'>
        <h2>Modified by:</h2>
        <button className='link' onClick={() => handleLink(ability_score.url)}>
          {ability_score.name}
        </button>
      </div>
    </div>
  );
};

export default Skills;
