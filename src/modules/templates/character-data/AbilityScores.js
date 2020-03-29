import React from 'react';

const AbilityScores = ({ desc, full_name, skills, search }) => {
  const handleLink = url => {
    search(url, 'skills');
  };
  return (
    <div>
      <h1>{full_name}</h1>
      <h2>Description:</h2>
      {desc.map(item => (
        <p>{item}</p>
      ))}
      <h2>Skills:</h2>
      {skills.map(item => (
        <button className='link' onClick={() => handleLink(item.url)}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default AbilityScores;
