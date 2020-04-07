import React from 'react';

const AbilityScores = ({ desc, full_name, skills, search }) => {
  const handleLink = (url) => {
    search(url, 'skills');
  };
  return (
    <div>
      <h1>{full_name}</h1>
      <div className='section'>
        <h2>Description:</h2>
        {desc.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      <div className='section'>
        <h2>Skills:</h2>
        {skills.map((item, i) => (
          <button key={i} className='link' onClick={() => handleLink(item.url)}>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AbilityScores;
