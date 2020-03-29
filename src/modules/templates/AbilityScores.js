import React from 'react';

const AbilityScores = ({ desc, full_name, skills, clear, search, setType }) => {
  const handleLink = url => {
    search(url, 'Skills');
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
        <a className='link' onClick={() => handleLink(item.url)}>
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default AbilityScores;
